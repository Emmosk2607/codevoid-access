// CODEVOID ritual logic: timed reveal
(function(){
  const settings = window.CODEVOID_SETTINGS || {};
  const tz = settings.timezone || 'Europe/Berlin';
  const revealIso = settings.revealIso || null;
  const revealUrl = settings.revealUrl || '#';

  const headline = document.getElementById('headline');
  const sub = document.getElementById('sub');
  const cta = document.getElementById('cta');
  const countdown = document.getElementById('countdown');

  let revealDate = revealIso ? new Date(revealIso) : null;

  function update() {
    if(!revealDate) return;
    const now = new Date();
    const diff = revealDate - now;

    if (diff <= 0) {
      headline.innerHTML = 'ACCESS: <span>GRANTED</span>';
      sub.textContent = 'THE GATE IS OPEN';
      cta.classList.remove('hidden');
      cta.href = revealUrl;
      countdown.classList.add('hidden');
      return;
    }

    // countdown
    const s = Math.floor(diff / 1000);
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    countdown.classList.remove('hidden');
    countdown.textContent = `T- ${d}d ${h}h ${m}m ${sec}s`;
    requestAnimationFrame(() => setTimeout(update, 1000));
  }

  // If no reveal date set, keep it classified
  if (revealDate) update();
})();