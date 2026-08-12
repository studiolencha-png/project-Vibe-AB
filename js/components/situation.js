// js/components/situation.js
// Блок узнавания ситуации — исправлена терминология

export function renderSituation() {
  return `
    <section id="situation" class="section">
      <div class="situation-card card">
        <div class="situation-quote">
          «Это видео будет полезно не только тем,
          у кого квартира White Box — а даже тем,
          у кого квартира с черновой отделкой...»
        </div>

        <div class="divider"></div>

        <p class="situation-text">
          Мы разберём основные моменты, которые можно улучшить
          за небольшие деньги — без кардинальных переделок.
          Всё по делу, без воды.
        </p>

        <div class="situation-items">
          <div class="situation-item">
            <i data-lucide="check-circle" class="situation-icon"></i>
            <span>Подходит для White Box и квартиры с черновой отделкой</span>
          </div>
          <div class="situation-item">
            <i data-lucide="check-circle" class="situation-icon"></i>
            <span>Только реальные, практичные улучшения</span>
          </div>
          <div class="situation-item">
            <i data-lucide="check-circle" class="situation-icon"></i>
            <span>Без «сносить всё» и лишних трат</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
