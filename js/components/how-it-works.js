// js/components/how-it-works.js
// Блок «Как это работает» — шаги

const STEPS_DATA = [
  {
    num: '1',
    icon: 'credit-card',
    title: 'Оплачиваете',
    desc: 'Доступ открывается сразу после оплаты',
  },
  {
    num: '2',
    icon: 'play-circle',
    title: 'Проходите разбор',
    desc: 'Смотрите зоны риска по каждому узлу White Box',
  },
  {
    num: '3',
    icon: 'map',
    title: 'Видите зоны риска',
    desc: 'Получаете ясность по конкретным узлам вашей квартиры',
  },
  {
    num: '4',
    icon: 'check-circle',
    title: 'Принимаете решение',
    desc: 'Понимаете, что оставить, что проверить, что переделать',
  },
  {
    num: '5',
    icon: 'arrow-right-circle',
    title: 'Начинаете чистовую осознанно',
    desc: 'Не вслепую, а с пониманием того, что у вас уже сделано',
  },
];

/**
 * @returns {string} HTML блока шагов
 */
export function renderHowItWorks() {
  const steps = STEPS_DATA.map((step, i) => `
    <div class="step-item">
      <div class="step-line-wrap">
        <div class="step-circle">
          <i data-lucide="${step.icon}" class="w-4 h-4"></i>
        </div>
        ${i < STEPS_DATA.length - 1
          ? '<div class="step-connector"></div>'
          : ''}
      </div>
      <div class="step-content">
        <div class="step-num">Шаг ${step.num}</div>
        <div class="step-title">${step.title}</div>
        <div class="step-desc">${step.desc}</div>
      </div>
    </div>
  `).join('');

  return `
    <section id="how-it-works" class="section">
      <h2 class="section-title">Как это работает</h2>
      <div class="steps-list">
        ${steps}
      </div>
    </section>
  `;
}
