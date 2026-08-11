// js/components/conflict.js
// Блок главной развилки (снести всё / оставить всё / проверить)

/**
 * @returns {string} HTML блока конфликта
 */
export function renderConflict() {
  return `
    <section id="conflict" class="section">
      <h2 class="section-title">Два нежелательных сценария</h2>

      <div class="conflict-grid">
        <div class="conflict-card conflict-card--bad">
          <div class="conflict-card-icon">
            <i data-lucide="banknote" class="w-5 h-5"></i>
          </div>
          <div class="conflict-card-label">Сценарий 1</div>
          <div class="conflict-card-title">Снести всё</div>
          <div class="conflict-card-desc">
            Переделать всё без понимания — потратить лишние деньги
            на ненужные работы
          </div>
          <div class="conflict-card-result conflict-card-result--bad">
            Дорого
          </div>
        </div>

        <div class="conflict-vs">или</div>

        <div class="conflict-card conflict-card--bad">
          <div class="conflict-card-icon">
            <i data-lucide="eye-off" class="w-5 h-5"></i>
          </div>
          <div class="conflict-card-label">Сценарий 2</div>
          <div class="conflict-card-title">Оставить всё</div>
          <div class="conflict-card-desc">
            Сделать чистовую — а потом обнаружить проблему и
            вскрывать уже сделанное
          </div>
          <div class="conflict-card-result conflict-card-result--bad">
            Страшно
          </div>
        </div>
      </div>

      <div class="conflict-solution">
        <div class="conflict-solution-icon">
          <i data-lucide="check-circle-2" class="w-6 h-6"></i>
        </div>
        <div>
          <div class="conflict-solution-label">Третий вариант</div>
          <div class="conflict-solution-title">
            Проверить и понять до начала чистовой
          </div>
          <p class="conflict-solution-desc">
            Не нужно ни сносить всё, ни оставлять всё без проверки.
            Нужно разобраться: что проверить, что оставить
            и что действительно переделать.
          </p>
        </div>
      </div>
    </section>
  `;
}
