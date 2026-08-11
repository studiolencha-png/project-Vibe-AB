// js/components/situation.js
// Блок узнавания ситуации (блок 2)

/**
 * @returns {string} HTML блока узнавания
 */
export function renderSituation() {
  return `
    <section id="situation" class="section">
      <div class="situation-card card">
        <div class="situation-quote">
          «Ключи получены. Стены выглядят ровными.
          Стяжка есть. Электрика разведена.
          Кажется, уже можно начинать чистовую...»
        </div>

        <div class="situation-divider divider"></div>

        <p class="situation-text">
          Но&nbsp;«вроде нормально» — не&nbsp;всегда значит
          «можно продолжать». White&nbsp;Box — это основа,
          которую сначала нужно понять.
        </p>

        <div class="situation-items">
          <div class="situation-item">
            <i data-lucide="map-pin" class="situation-icon"></i>
            <span>Вы видите стены, стяжку и трубы</span>
          </div>
          <div class="situation-item">
            <i data-lucide="help-circle" class="situation-icon situation-icon--warn"></i>
            <span>Но не понимаете, что из этого нормально</span>
          </div>
          <div class="situation-item">
            <i data-lucide="clock" class="situation-icon situation-icon--warn"></i>
            <span>И не знаете, что проверить до чистовой</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
