// js/components/for-whom.js
// Блок «Для кого / Не для кого»

const FOR_WHOM = [
  'Получили ключи с White Box или скоро получите',
  'Готовитесь начать чистовую отделку',
  'Хотите понять, что можно оставить от застройщика',
  'Не хотите переделывать то, что нормально сделано',
  'Не хотите платить за ремонт дважды',
];

const NOT_FOR_WHOM = [
  'Хотите получить «всё идеально» без проверки',
  'Не готовы принимать решения по результатам',
  'Ищете гарантию, что никаких проблем нет вообще',
];

/**
 * @returns {string} HTML блока для кого
 */
export function renderForWhom() {
  const forItems = FOR_WHOM.map(item => `
    <li class="whom-item whom-item--for">
      <i data-lucide="check" class="whom-icon whom-icon--for shrink-0"></i>
      <span>${item}</span>
    </li>
  `).join('');

  const notForItems = NOT_FOR_WHOM.map(item => `
    <li class="whom-item whom-item--not">
      <i data-lucide="x" class="whom-icon whom-icon--not shrink-0"></i>
      <span>${item}</span>
    </li>
  `).join('');

  return `
    <section id="for-whom" class="section">
      <h2 class="section-title">Для кого этот разбор</h2>

      <div class="whom-grid">
        <div class="card whom-card whom-card--for">
          <div class="whom-card-label">
            <i data-lucide="user-check" class="w-4 h-4"></i>
            Для кого
          </div>
          <ul class="whom-list">
            ${forItems}
          </ul>
        </div>

        <div class="card whom-card whom-card--not">
          <div class="whom-card-label whom-card-label--not">
            <i data-lucide="user-x" class="w-4 h-4"></i>
            Не для кого
          </div>
          <ul class="whom-list">
            ${notForItems}
          </ul>
        </div>
      </div>
    </section>
  `;
}
