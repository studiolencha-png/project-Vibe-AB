// js/components/results.js
// Что получите — тёмная тема с золотыми иконками

const RESULTS_DATA = [
  { icon: 'check-square', title: 'Поймёте, что улучшить в первую очередь',   desc: 'Конкретные зоны и узлы — по каждой теме из разбора' },
  { icon: 'thumbs-up',    title: 'Узнаете, что можно оставить от застройщика', desc: 'Без лишних переделок и трат на ненужные работы' },
  { icon: 'banknote',     title: 'Поймёте, где экономия разумна',              desc: 'Где можно сэкономить без потери качества' },
  { icon: 'shield-check', title: 'Узнаете, где нельзя экономить никогда',     desc: 'Электрика, коммуникации — зоны безопасности' },
  { icon: 'calendar',     title: 'Сможете планировать этапы',                  desc: 'Понятная последовательность: что и когда делать' },
];

export function renderResults() {
  const items = RESULTS_DATA.map((item, i) => `
    <div class="flex items-start gap-4">
      <div class="result-icon-wrap shrink-0">
        <i data-lucide="${item.icon}" class="w-4 h-4"></i>
      </div>
      <div class="flex-1 min-w-0">
        <h4 class="result-item-title">${item.title}</h4>
        <p class="result-item-desc">${item.desc}</p>
      </div>
    </div>
    ${i < RESULTS_DATA.length - 1 ? '<div class="divider" style="margin:12px 0"></div>' : ''}
  `).join('');

  return `
    <section id="results" class="section">
      <div class="section-label">Результат</div>
      <h2 class="section-title">Что вы получите</h2>
      <div class="card results-card">${items}</div>
    </section>
  `;
}
