// js/components/expert.js
// Блок «Эксперт» — Алексей Белянин / AB Studio

/**
 * @returns {string} HTML блока эксперта
 */
export function renderExpert() {
  return `
    <section id="expert" class="section">
      <h2 class="section-title">Об эксперте</h2>

      <div class="expert-card card">
        <div class="expert-avatar">
          <div class="expert-avatar-circle">
            <i data-lucide="user" class="w-8 h-8 expert-avatar-icon"></i>
          </div>
        </div>

        <div class="expert-body">
          <div class="expert-name">Алексей Белянин</div>
          <div class="expert-role">Основатель AB Studio · Самара</div>

          <div class="divider" style="margin: 12px 0"></div>

          <p class="expert-desc">
            Практикующий эксперт по&nbsp;ремонту квартир
            и&nbsp;дизайну интерьера. Системный, технически
            грамотный подход — инженерная глубина, контроль
            качества, объяснение сложных процессов простым языком.
          </p>

          <div class="expert-media">
            <div class="expert-media-item">
              <i data-lucide="youtube" class="w-4 h-4 expert-media-icon"></i>
              <span>YouTube</span>
            </div>
            <div class="expert-media-item">
              <i data-lucide="send" class="w-4 h-4 expert-media-icon"></i>
              <span>Telegram</span>
            </div>
            <div class="expert-media-item">
              <i data-lucide="tv-2" class="w-4 h-4 expert-media-icon"></i>
              <span>ТВ-эфиры</span>
            </div>
          </div>
        </div>
      </div>

      <div class="expert-mission">
        <i data-lucide="quote" class="expert-mission-quote"></i>
        <p>
          AB Studio — не&nbsp;инфобизнес и&nbsp;не&nbsp;«красивые картинки».
          Это практика, реальные объекты, инженерная глубина
          и&nbsp;помощь человеку в&nbsp;контроле ремонта.
        </p>
      </div>
    </section>
  `;
}
