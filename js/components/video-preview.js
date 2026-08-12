// js/components/video-preview.js
// Блок с изображением — выводит assets/images/video-preview.jpg

export function renderVideoPreview() {
  return `
    <div class="video-section">
      <div class="image-placeholder-wrap" id="video-block">
        <img
          id="video-image"
          class="placeholder-img"
          src="./assets/images/video-preview.jpg"
          alt="Разбор White Box — AB Studio"
          loading="lazy"
          onerror="this.onerror=null; this.style.display='none'; document.getElementById('placeholder-label').style.display='flex'"
        />
        <div
          id="placeholder-label"
          class="placeholder-label"
          style="display:none"
          aria-hidden="true"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:#717171;margin-bottom:8px">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span>Добавьте изображение в редакторе Notibot</span>
        </div>
      </div>
    </div>
  `;
}
