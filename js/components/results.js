// js/components/results.js
// Блок «Что вы получите» (результаты)

const RESULTS_DATA = [
  {
    icon: 'check-square',
    title: 'Поймёте, что проверить',
    desc: 'Конкретный список зон и узлов — без лишней теории',
  },
  {
    icon: 'thumbs-up',
    title: 'Поймёте, что можно оставить',
    desc: 'Не всё нужно переделывать. Вы узнаете, что в порядке',
  },
  {
    icon: 'wrench',
    title: 'Поймёте, что действительно переделать',
    desc: 'Только то, что реально требует вмешательства до чистовой',
  },
  {
    icon: 'alert-triangle',
    title: 'Узнаете, что нельзя закрывать чистовой',
    desc: 'Дефекты, которые дешевле исправить сейчас, а не потом',
  },
  {
    icon: 'shield-check',
    title: 'Снизите риск платить дважды',
    desc: 'Ошибка до чистовой обходится дешевле, чем после неё',
  },
];

/**
 * @returns {string} HTML блока результатов
 */
export function renderResults() {
  const items = RESULTS_DATA.map((item, index) => `
    <div class="flex items-start gap-4">
      <div class="result-icon-wrap shrink-0">
        <i data-lucide="${item.icon}" class="w-4 h-4"></i>
      </div>
      <div class="flex-1 min-w-0">
        <h4 class="result-item-title">${item.title}</h4>
        <p class="result-item-desc">${item.desc}</p>
      </div>
    </div>
    ${index < RESULTS_DATA.length - 1
      ? '<div class="divider" style="margin:12px 0"></div>'
      : ''}
  `).join('');

  return `
    <section id="results" class="section">
      <h2 class="section-title">Что вы получите</h2>
      <div class="card results-card">
        ${items}
      </div>
    </section>
  `;
}
