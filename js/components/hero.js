// js/components/hero.js
// Первый экран — тёмный, с фото, золотой акцент

export function renderHero() {
  return `
    <section id="hero" class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-bg-overlay"></div>

      <div class="hero-content">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span>
          AB Studio · White Box
        </div>

        <h1 class="hero-title">
          Как сделать ремонт<br>в White Box
          <em> намного лучше</em><br>
          за небольшие деньги
        </h1>

        <p class="hero-sub">
          Подходит не только для White Box —
          <strong>актуально и для черновой квартиры.</strong>
          Разбираем основные зоны, которые легко улучшить
          без кардинальных затрат.
        </p>

        <div class="hero-topics">
          <span class="hero-topic">Стены</span>
          <span class="hero-topic">Окна</span>
          <span class="hero-topic">Отопление</span>
          <span class="hero-topic">Полы</span>
          <span class="hero-topic">Электрика</span>
          <span class="hero-topic">Коммуникации</span>
        </div>

        <button
          id="hero-cta-btn"
          class="btn-primary btn-press hero-cta-btn"
          onclick="document.getElementById('pricing').scrollIntoView({behavior:'smooth'})"
        >
          Получить разбор — 1&nbsp;990&nbsp;₽
        </button>
        <p class="hero-cta-hint">
          Доступ сразу после оплаты · Только практическое
        </p>
      </div>
    </section>
  `;
}
