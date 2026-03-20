const CREATE_PAYMENT_URL = "https://functions.poehali.dev/1eb2a9be-2418-421d-922a-b10b47d80696";

async function handleBuy(amount: string, description: string) {
  try {
    const res = await fetch(CREATE_PAYMENT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        description,
        return_url: window.location.origin + "?payment=success",
      }),
    });
    const data = await res.json();
    if (data.confirmation_url) {
      window.location.href = data.confirmation_url;
    }
  } catch {
    alert("Ошибка при создании платежа. Попробуйте ещё раз.");
  }
}

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">VINYL*DINER</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Афиша</a>
          <a href="#">Адреса</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              БЕЗ ПОНТОВ,
              <br />
              ТОЛЬКО <span>ВКУС</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Эстетика 70-х в современной подаче. Локальные продукты, огненные блюда и атмосфера для настоящих ценителей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              СВЕЖАК
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ЭСТЕТИКА
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ОГОНЬ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * БУРГЕРЫ КОТОРЫЕ РВУТ * КРАФТОВЫЕ КОКТЕЙЛИ * ТОЛЬКО РЕТРО ВАЙБ * ОТКРЫТЫ ДО 2:00 * ЛУЧШИЕ В ГОРОДЕ *
            БУРГЕРЫ КОТОРЫЕ РВУТ * КРАФТОВЫЕ КОКТЕЙЛИ * ТОЛЬКО РЕТРО ВАЙБ * ОТКРЫТЫ ДО 2:00 * ЛУЧШИЕ В ГОРОДЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ВЫБОР ШЕФА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Классический бургер"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Классика</h3>
                  <span className="price">1 400 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Тройной смэш из мраморной говядины, фирменный соус, маринованные огурцы на бриоши.
                </p>
                <button
                  className="btn-cta"
                  style={{ marginTop: "16px", width: "100%", background: "var(--primary)", color: "white" }}
                  onClick={() => handleBuy("1400.00", "Классика — Красти Краб")}
                >
                  Купить — 1 400 ₽
                </button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Острое
              </span>
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Неоновая пицца"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Электро Пепперони</h3>
                  <span className="price">1 800 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Двойная пепперони, острый мёд, тесто на закваске.</p>
                <button
                  className="btn-cta"
                  style={{ marginTop: "16px", width: "100%", background: "var(--primary)", color: "white" }}
                  onClick={() => handleBuy("1800.00", "Электро Пепперони — Красти Краб")}
                >
                  Купить — 1 800 ₽
                </button>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Диско Сауэр"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Диско Сауэр</h3>
                  <span className="price">1 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Джин, цветок бузины, голубой чай и съедобная золотая пыльца.
                </p>
                <button
                  className="btn-cta"
                  style={{ marginTop: "16px", width: "100%", background: "var(--primary)", color: "white" }}
                  onClick={() => handleBuy("1200.00", "Диско Сауэр — Красти Краб")}
                >
                  Купить — 1 200 ₽
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВАЙБ-ЧЕК ПРОЙДЕН.</h2>
            <p className="vibe-text">
              Мы не просто кормим. Мы создаём моменты. От плейлиста хип-хопа 90-х до диванов в стиле 70-х — каждый уголок
              продуман для твоего идеального кадра. Бронь не нужна, просто приходи с настроением.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @VINYL.DINER
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">VINYL*DINER</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Твоё место для еды высокого качества и лоу-фай атмосферы. С 2024, но ощущается как 1974.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Условия
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Вт-Чт: 12:00 - 23:00</li>
            <li>Пт-Сб: 12:00 - 02:00</li>
            <li>Вс: 11:00 - 21:00</li>
            <li>Пн: Выходной</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 VINYL DINER</span>
          <span>ВКУС КЛАССИКИ</span>
          <span>IG / TW / TK</span>
        </div>
      </footer>
    </>
  );
}