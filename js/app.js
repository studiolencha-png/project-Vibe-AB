// js/app.js
// Главная точка входа — лендинг White Box Premium Dark (AB Studio)

import { initIcons }         from './utils.js';
import { renderHero }        from './components/hero.js';
import { renderVideoPreview} from './components/video-preview.js';
import { renderSituation }   from './components/situation.js';
import { renderConflict }    from './components/conflict.js';
import { renderZones }       from './components/zones.js';
import { renderResults }     from './components/results.js';
import { renderHowItWorks }  from './components/how-it-works.js';
import { renderExpert }      from './components/expert.js';
import { renderForWhom }     from './components/for-whom.js';
import { renderPricing }     from './components/pricing.js';
import { renderFaq }         from './components/faq.js';
import { renderFinalCta }    from './components/final-cta.js';
import { renderFooter }      from './components/footer.js';

/** Переключение аккордеона FAQ */
window.toggleFaq = function toggleFaq(index) {
  const answer  = document.getElementById(`faq-answer-${index}`);
  const chevron = document.getElementById(`faq-chevron-${index}`);
  const btn     = answer?.previousElementSibling;
  if (!answer) return;
  const isOpen = !answer.hidden;
  answer.hidden = isOpen;
  btn?.setAttribute('aria-expanded', String(!isOpen));
  chevron?.classList.toggle('faq-chevron--open', !isOpen);
  if (window.notibot?.hapticSelection) window.notibot.hapticSelection();
};

/** Инициализация и рендер лендинга */
function initApp() {
  const appEl = document.getElementById('app');

  appEl.innerHTML = `
    <div class="landing-wrap fade-in">
      ${renderHero()}
      ${renderVideoPreview()}
      ${renderSituation()}
      ${renderConflict()}
      ${renderZones()}
      ${renderResults()}
      ${renderHowItWorks()}
      ${renderExpert()}
      ${renderForWhom()}
      ${renderPricing()}
      ${renderFaq()}
      ${renderFinalCta()}
      ${renderFooter()}
    </div>
  `;

  initIcons();
}

initApp();
