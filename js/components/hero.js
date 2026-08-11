// js/components/hero.js
// Первый экран лендинга White Box

/**
 * @returns {string} HTML первого экрана
 */
export function renderHero() {
  return `
    <section id="hero" class="hero-section">
      <div class="hero-badge">
        <span class="hero-badge-dot"></span>
        Разбор White Box
      </div>

      <h1 class="hero-title">
        Получили квартиру с&nbsp;White Box —<br>
        и&nbsp;не&nbsp;понимаете, что из&nbsp;него<br>
        <span class="hero-title-accent">можно оставить?</span>
      </h1>

      <p class="hero-subtitle">
        Разберитесь, что проверить до&nbsp;начала чистовой,
        что действительно стоит переделать, а&nbsp;на&nbsp;что
        не&nbsp;нужно тратить деньги.
        <span class="hero-subtitle-note">Без подхода «сносить всё».</span>
      </p>

      <div class="hero-cta-group">
        <button
          id="hero-cta-btn"
          class="btn-primary btn-press hero-cta-btn"
          onclick="document.getElementById('pricing').scrollIntoView({behavior:'smooth'})"
        >
          Проверить White Box — 1&nbsp;990&nbsp;₽
        </button>
        <p class="hero-cta-hint">
          Цифровой разбор · Доступ сразу после оплаты
        </p>
      </div>

      <div class="hero-tags">
        <span class="hero-tag">Что оставить</span>
        <span class="hero-tag-sep">·</span>
        <span class="hero-tag">Что проверить</span>
        <span class="hero-tag-sep">·</span>
        <span class="hero-tag">Что переделать</span>
      </div>
    </section>
  `;
}
