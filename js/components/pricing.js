// js/components/pricing.js
// Блок цены

/**
 * @returns {string} HTML блока цены
 */
export function renderPricing() {
  return `
    <section id="pricing" class="section">
      <div class="pricing-card card">
        <div class="pricing-badge">Цифровой разбор</div>

        <div class="pricing-name">White Box</div>
        <div class="pricing-tagline">
          Понять, что проверить до начала чистовой
        </div>

        <div class="divider" style="margin: 16px 0"></div>

        <div class="pricing-includes">
          <div class="pricing-include-item">
            <i data-lucide="check" class="pricing-check-icon"></i>
            <span>Разбор 5 ключевых зон риска White Box</span>
          </div>
          <div class="pricing-include-item">
            <i data-lucide="check" class="pricing-check-icon"></i>
            <span>Что проверить, оставить и переделать</span>
          </div>
          <div class="pricing-include-item">
            <i data-lucide="check" class="pricing-check-icon"></i>
            <span>Дефекты, которые нельзя закрывать чистовой</span>
          </div>
          <div class="pricing-include-item">
            <i data-lucide="check" class="pricing-check-icon"></i>
            <span>Доступ сразу после оплаты</span>
          </div>
        </div>

        <div class="divider" style="margin: 16px 0"></div>

        <div class="pricing-price-row">
          <div class="pricing-price">1 990 <span class="pricing-currency">₽</span></div>
          <div class="pricing-price-note">разовый платёж</div>
        </div>

        <button
          id="pricing-cta-btn"
          class="btn-primary btn-press pricing-btn"
          onclick="window.notibot?.hapticImpact?.('medium')"
        >
          Проверить White Box
        </button>

        <p class="pricing-guarantee">
          Без подхода «сносить всё» · Только практически полезное
        </p>
      </div>

      <div class="pricing-note">
        <i data-lucide="info" class="pricing-note-icon"></i>
        <p>
          Разбор помогает принять решение до начала чистовой.
          Он не заменяет выездной технадзор, если нужен полный
          контроль на объекте.
        </p>
      </div>
    </section>
  `;
}
