// js/components/final-cta.js
// Финальный CTA — тёмный фон с фото, золотой акцент

export function renderFinalCta() {
  return `
    <section id="final-cta" class="final-cta-section">
      <div class="final-cta-bg"></div>
      <div class="final-cta-overlay"></div>

      <div class="final-cta-inner">
        <h2 class="final-cta-title">
          Перед чистовой важно понять,
          <em>что у вас уже сделано</em>
        </h2>

        <p class="final-cta-text">
          Разберитесь, что в White Box оставить, что улучшить
          за небольшие деньги и что действительно
          переделать — до начала финишной отделки.
        </p>

        <button
          id="final-cta-btn"
          class="btn-primary btn-press final-cta-btn"
          onclick="document.getElementById('pricing').scrollIntoView({behavior:'smooth'})"
        >
          Получить разбор — 1&nbsp;990&nbsp;₽
        </button>
        <p class="final-cta-hint">
          Доступ сразу · Без подхода «сносить всё»
        </p>
      </div>
    </section>
  `;
}
