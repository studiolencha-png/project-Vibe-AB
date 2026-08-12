// js/components/expert.js
// Эксперт — тёмная тема, фото-placeholder, inline SVG иконки соцсетей

export function renderExpert() {
  return `
    <section id="expert" class="section">
      <div class="section-label">Кто объясняет</div>
      <h2 class="section-title">Эксперт</h2>

      <div class="expert-card card">
        <!--
          📸 ФОТО ЭКСПЕРТА
          Замените src на ссылку на реальное фото в редакторе Notibot.
          Рекомендуемое соотношение: 16:9 или 4:3, горизонтальное.
        -->
        <div class="expert-photo-wrap">
          <img
            id="expert-photo"
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
            <a class="expert-media-btn" href="https://t.me/abstudio" target="_blank" rel="noopener" aria-label="Telegram">
              <!-- Telegram SVG -->
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Telegram
            </a>

            <a class="expert-media-btn expert-media-btn--yt" href="https://www.youtube.com/@abstudio" target="_blank" rel="noopener" aria-label="YouTube">
              <!-- YouTube SVG -->
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
