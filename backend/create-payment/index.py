import json
import os
import uuid
import urllib.request
import urllib.error
import base64


def handler(event: dict, context) -> dict:
    """Создаёт платёж в ЮКассе и возвращает ссылку для оплаты картой"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    amount = str(body.get('amount', '0'))
    description = body.get('description', 'Заказ в Красти Краб')
    return_url = body.get('return_url', 'https://krab.ru/success')

    shop_id = os.environ['YUKASSA_SHOP_ID']
    secret_key = os.environ['YUKASSA_SECRET_KEY']

    idempotence_key = str(uuid.uuid4())

    credentials = base64.b64encode(f"{shop_id}:{secret_key}".encode()).decode()

    payload = json.dumps({
        "amount": {
            "value": amount,
            "currency": "RUB"
        },
        "confirmation": {
            "type": "redirect",
            "return_url": return_url
        },
        "capture": True,
        "description": description
    }).encode('utf-8')

    req = urllib.request.Request(
        'https://api.yookassa.ru/v3/payments',
        data=payload,
        headers={
            'Authorization': f'Basic {credentials}',
            'Idempotence-Key': idempotence_key,
            'Content-Type': 'application/json'
        },
        method='POST'
    )

    with urllib.request.urlopen(req) as response:
        result = json.loads(response.read().decode('utf-8'))

    confirmation_url = result['confirmation']['confirmation_url']

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({
            'payment_id': result['id'],
            'confirmation_url': confirmation_url,
            'status': result['status']
        })
    }
