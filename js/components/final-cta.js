// js/components/final-cta.js
// Финальный блок CTA

/**
 * @returns {string} HTML финального CTA
 */
export function renderFinalCta() {
  return `
    <section id="final-cta" class="section final-cta-section">
      <div class="final-cta-inner">
        <h2 class="final-cta-title">
          Перед чистовой важно понять,
          что у вас уже сделано
        </h2>

        <p class="final-cta-text">
          Разберитесь, что в White Box оставить, что проверить
          и что действительно переделать — до того,
          как начнёте чистовую.
        </p>

        <button
          id="final-cta-btn"
          class="btn-primary btn-press final-cta-btn"
          onclick="document.getElementById('pricing').scrollIntoView({behavior:'smooth'})"
        >
          Проверить White Box — 1&nbsp;990&nbsp;₽
        </button>

        <p class="final-cta-hint">
          Цифровой разбор · Без подхода «сносить всё»
        </p>
      </div>
    </section>
  `;
}
