// js/components/pricing.js
// Цена — тёмная тема, золотая рамка, золотая цена

export function renderPricing() {
  return `
    <section id="pricing" class="section">
      <div class="section-label">Доступ к материалам</div>
      <h2 class="section-title">White Box</h2>

      <div class="pricing-card card">
        <div class="pricing-badge">Цифровой разбор</div>

        <div class="pricing-name">Разбор White Box</div>
        <div class="pricing-tagline">
          6 ключевых зон · Что улучшить за небольшие деньги
        </div>

        <div class="divider"></div>

        <div class="pricing-includes">
          <div class="pricing-include-item">
            <i data-lucide="check" class="pricing-check-icon"></i>
            <span>Разбор 6 зон: стены, окна, отопление, полы, электрика, коммуникации</span>
          </div>
          <div class="pricing-include-item">
            <i data-lucide="check" class="pricing-check-icon"></i>
            <span>Что проверить, оставить и где улучшить</span>
          </div>
          <div class="pricing-include-item">
            <i data-lucide="check" class="pricing-check-icon"></i>
            <span>Где экономить разумно, а где нельзя</span>
          </div>
          <div class="pricing-include-item">
            <i data-lucide="check" class="pricing-check-icon"></i>
            <span>Подходит для White Box и черновой квартиры</span>
          </div>
          <div class="pricing-include-item">
            <i data-lucide="check" class="pricing-check-icon"></i>
            <span>Доступ сразу после оплаты</span>
          </div>
        </div>

        <div class="divider"></div>

        <div class="pricing-price-row">
          <div class="pricing-price">1 990 <span class="pricing-currency">₽</span></div>
          <div class="pricing-price-note">разовый платёж</div>
        </div>

        <button
          id="pricing-cta-btn"
          class="btn-primary btn-press pricing-btn"
          onclick="window.notibot?.hapticImpact?.('medium')"
        >
          Получить разбор
        </button>

        <p class="pricing-guarantee">
          Без подхода «сносить всё» · Только практически полезное
        </p>
      </div>

      <div class="pricing-note">
        <i data-lucide="info" class="pricing-note-icon"></i>
        <p>
          Разбор не заменяет выездной технадзор, если нужен
          полный контроль на объекте.
        </p>
      </div>
    </section>
  `;
}
