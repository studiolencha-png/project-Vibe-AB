// js/components/risks.js
// Блок 5 зон риска White Box

const RISKS_DATA = [
  {
    icon: 'waves',
    number: '01',
    title: 'Неправильный уклон канализации',
    visible: 'Труба спрятана, визуально всё нормально',
    result: 'Постоянные засоры, запах, вода плохо уходит',
    tip: 'Проверьте уклон до чистовой — после будет дороже',
  },
  {
    icon: 'droplets',
    number: '02',
    title: 'Скрытые проблемы водоснабжения',
    visible: 'Трубы аккуратно окрашены',
    result: 'Под краской — коррозия. За декоративным коробом — течь',
    tip: 'Аккуратная окраска не всегда означает надёжность',
  },
  {
    icon: 'scan-line',
    number: '03',
    title: 'Иллюзия ровных стен',
    visible: 'Стены выглядят гладко, свет от окна скрывает волны',
    result: 'Плинтус не прилегает, натяжной потолок покажет волны',
    tip: 'Ровная на вид стена не всегда готова к чистовой',
  },
  {
    icon: 'split',
    number: '04',
    title: 'Незаметные стыки и будущие трещины',
    visible: 'Единая белая зашпаклёванная стена',
    result: 'Стык колонны и кладки даст вертикальную трещину через год',
    tip: 'Трещина может быть ещё не видна, но уже заложена',
  },
  {
    icon: 'move-horizontal',
    number: '05',
    title: 'Завёрнутые стены и проблемы с мебелью',
    visible: 'Комната кажется прямоугольной',
    result: 'Кухонный гарнитур, ванна или мебель встают с зазорами',
    tip: 'Важно знать до покупки мебели и заказа кухни',
  },
];

/**
 * @returns {string} HTML блока зон риска
 */
export function renderRisks() {
  const items = RISKS_DATA.map((risk) => `
    <div class="risk-card card">
      <div class="risk-card-header">
        <div class="risk-card-num">${risk.number}</div>
        <div class="risk-card-icon-wrap">
          <i data-lucide="${risk.icon}" class="w-4 h-4"></i>
        </div>
      </div>
      <h3 class="risk-card-title">${risk.title}</h3>
      <div class="risk-detail">
        <div class="risk-detail-row">
          <span class="risk-detail-label">Что видно:</span>
          <span class="risk-detail-val">${risk.visible}</span>
        </div>
        <div class="risk-detail-row risk-detail-row--warn">
          <span class="risk-detail-label">Что происходит:</span>
          <span class="risk-detail-val">${risk.result}</span>
        </div>
      </div>
      <div class="risk-tip">
        <i data-lucide="info" class="w-3 h-3 risk-tip-icon"></i>
        ${risk.tip}
      </div>
    </div>
  `).join('');

  return `
    <section id="risks" class="section">
      <div class="section-header">
        <h2 class="section-title">Что может скрываться в White Box</h2>
        <p class="section-subtitle">
          Типовые зоны риска, которые выглядят нормально —
          пока не начнётся чистовая
        </p>
      </div>
      <div class="risks-grid">
        ${items}
      </div>
    </section>
  `;
}
