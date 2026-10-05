// Desktop controls for horizontal swipe rows: arrow buttons + click-and-drag.
(function () {
  var fine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
  function setup(rail) {
    if (rail.dataset.rail) return; rail.dataset.rail = '1';
    var wrap = document.createElement('div'); wrap.className = 'railwrap';
    rail.parentNode.insertBefore(wrap, rail); wrap.appendChild(rail);
    var prev = document.createElement('button'), next = document.createElement('button');
    prev.type = next.type = 'button'; prev.className = 'railbtn prev'; next.className = 'railbtn next';
    prev.setAttribute('aria-label', 'Scroll left'); next.setAttribute('aria-label', 'Scroll right');
    prev.innerHTML = '&#8249;'; next.innerHTML = '&#8250;';
    wrap.appendChild(prev); wrap.appendChild(next);
    var step = function () { return Math.max(240, rail.clientWidth * 0.8); };
    prev.onclick = function () { rail.scrollBy({ left: -step(), behavior: 'smooth' }); };
    next.onclick = function () { rail.scrollBy({ left: step(), behavior: 'smooth' }); };
    function edges() {
      var max = rail.scrollWidth - rail.clientWidth - 2;
      prev.hidden = rail.scrollLeft <= 2; next.hidden = rail.scrollLeft >= max;
    }
    rail.addEventListener('scroll', edges, { passive: true }); window.addEventListener('resize', edges); edges();
    if (!fine) return;
    var down = false, sx = 0, sl = 0, moved = false;
    rail.addEventListener('mousedown', function (e) { if (e.button) return; down = true; moved = false; sx = e.pageX; sl = rail.scrollLeft; rail.classList.add('drag'); });
    window.addEventListener('mousemove', function (e) { if (!down) return; var dx = e.pageX - sx; if (Math.abs(dx) > 5) moved = true; rail.scrollLeft = sl - dx; });
    window.addEventListener('mouseup', function () { down = false; rail.classList.remove('drag'); });
    rail.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    rail.addEventListener('dragstart', function (e) { e.preventDefault(); });
  }
  function scan() { document.querySelectorAll('.rail, .krail').forEach(setup); }
  scan();
  new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
})();
