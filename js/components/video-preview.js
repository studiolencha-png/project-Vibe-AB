// js/components/video-preview.js
// Пустой блок-плейсхолдер для изображения.
// Замените URL картинки самостоятельно в редакторе Notibot:
//   1. Откройте редактор контента Notibot
//   2. Найдите элемент с id="video-image"
//   3. Вставьте URL вашего изображения в поле src

export function renderVideoPreview() {
  return `
    <div class="video-section">
      <div class="image-placeholder-wrap" id="video-block">
        <!--
          📸 БЛОК ДЛЯ ИЗОБРАЖЕНИЯ
          Замените src ниже на ссылку вашей картинки в редакторе Notibot.
          Если src пустой — отображается рамка-заглушка.
        -->
        <img
          id="video-image"
          class="placeholder-img"
          src=""
          alt="Изображение разбора White Box"
          loading="lazy"
          onerror="this.style.display='none';document.getElementById('placeholder-label').style.display='flex'"
        />
        <div
          id="placeholder-label"
          class="placeholder-label"
          style="display:flex"
          aria-hidden="true"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:#717171;margin-bottom:8px">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span>Добавьте изображение в редакторе Notibot</span>
          <span style="font-size:11px;opacity:.5;margin-top:4px">id="video-image" → src="ваша ссылка"</span>
        </div>
      </div>
    </div>
  `;
}
