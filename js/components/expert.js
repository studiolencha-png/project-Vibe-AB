// js/components/expert.js
// Эксперт — тёмная тема, фото с Unsplash, статистика

export function renderExpert() {
  return `
    <section id="expert" class="section">
      <div class="section-label">Кто объясняет</div>
      <h2 class="section-title">Эксперт</h2>

      <div class="expert-card card">
        <div class="expert-photo-wrap">
          <img
            class="expert-photo"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
            alt="Алексей Белянин — руководитель AB Studio"
            loading="lazy"
          />
          <div class="expert-photo-overlay"></div>
        </div>

        <div class="expert-body">
          <div class="expert-name">Белянин Алексей</div>
          <div class="expert-role">Руководитель AB Studio · Самара</div>

          <div class="expert-stats">
            <div class="expert-stat">
              <div class="expert-stat-bullet"></div>
              <span>Отделочник со стажем более <strong>12 лет</strong></span>
            </div>
            <div class="expert-stat">
              <div class="expert-stat-bullet"></div>
              <span>Сдано более <strong>2700 м²</strong></span>
            </div>
            <div class="expert-stat">
              <div class="expert-stat-bullet"></div>
              <span>Принято у застройщика более <strong>300 квартир</strong></span>
            </div>
            <div class="expert-stat">
              <div class="expert-stat-bullet"></div>
              <span>Более <strong>1,65 млн</strong> просмотров на YouTube</span>
            </div>
            <div class="expert-stat">
              <div class="expert-stat-bullet"></div>
              <span>Основатель студии ремонта премиум-класса AB Studio</span>
            </div>
          </div>

          <div class="expert-media">
            <a class="expert-media-btn" href="https://t.me/abstudio" target="_blank" rel="noopener">
              <i data-lucide="send" class="w-4 h-4"></i>
              Telegram
            </a>
            <a class="expert-media-btn" href="https://www.youtube.com/@abstudio" target="_blank" rel="noopener">
              <i data-lucide="youtube" class="w-4 h-4"></i>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
