// js/components/video-preview.js
// Превью видео с кнопкой воспроизведения (YouTube)

export function renderVideoPreview() {
  return `
    <div class="video-section">
      <div class="video-wrap">
        <img
          class="video-thumb"
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75"
          alt="Превью видео разбора White Box"
          loading="lazy"
        />
        <a
          class="video-play-btn"
          href="https://www.youtube.com/@abstudio"
          target="_blank"
          rel="noopener"
          aria-label="Смотреть видео на YouTube"
        >
          <div class="video-play-circle">
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span class="video-play-label">Смотреть на YouTube</span>
        </a>
      </div>
    </div>
  `;
}
