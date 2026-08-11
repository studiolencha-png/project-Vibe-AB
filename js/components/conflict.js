// js/components/conflict.js
// Блок развилки — тёмная тема, золотой акцент

export function renderConflict() {
  return `
    <section id="conflict" class="section">
      <div class="section-label">Ключевой вопрос</div>
      <h2 class="section-title">Два нежелательных сценария</h2>

      <div class="zones-grid" style="margin-bottom:16px">
        <div class="zone-card card" style="border-left:3px solid rgba(248,113,113,.4)">
          <div class="zone-icon-wrap" style="background:rgba(248,113,113,.1);border-color:rgba(248,113,113,.2);color:#f87171">
            <i data-lucide="banknote" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="zone-num">Сценарий 01</div>
            <div class="zone-title">Снести всё</div>
            <div class="zone-desc">Переделать без понимания — потратить деньги на ненужные работы</div>
            <div class="zone-tip" style="color:#f87171;background:rgba(248,113,113,.08);margin-top:8px">
              <i data-lucide="x" class="w-3 h-3"></i> Дорого и нецелесообразно
            </div>
          </div>
        </div>

        <div class="zone-card card" style="border-left:3px solid rgba(251,146,60,.4)">
          <div class="zone-icon-wrap" style="background:rgba(251,146,60,.1);border-color:rgba(251,146,60,.2);color:#fb923c">
            <i data-lucide="eye-off" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="zone-num">Сценарий 02</div>
            <div class="zone-title">Оставить всё как есть</div>
            <div class="zone-desc">Сделать чистовую — а потом вскрывать и переделывать за двойную цену</div>
            <div class="zone-tip" style="color:#fb923c;background:rgba(251,146,60,.08);margin-top:8px">
              <i data-lucide="alert-triangle" class="w-3 h-3"></i> Рискованно
            </div>
          </div>
        </div>
      </div>

      <div class="zone-card card" style="border-left:3px solid rgba(201,169,110,.5);background:rgba(201,169,110,.06)">
        <div class="zone-icon-wrap">
          <i data-lucide="check-circle-2" class="w-5 h-5"></i>
        </div>
        <div>
          <div class="zone-num" style="color:var(--accent)">Третий вариант</div>
          <div class="zone-title">Проверить и улучшить — точечно</div>
          <div class="zone-desc">Понять что оставить, что улучшить за небольшие деньги и что действительно переделать</div>
          <div class="zone-tip" style="margin-top:8px">
            <i data-lucide="check" class="w-3 h-3"></i> Именно об этом разбор
          </div>
        </div>
      </div>
    </section>
  `;
}
