// Placeholder for recipes without a photo yet: an empty plate and a line that changes per recipe.
// Shared by the Kitchen (/kitchen/) and the Starter Kit page. Needs /kitchen/recipes.js loaded first.
(function () {
  var QUIPS = ['Ate it before the photo.', 'Our photographer got hungry.', 'Camera shy. Tastes great.', 'Plating in progress.',
    'Too good to wait for the camera.', 'Somebody ate the model.', 'Photo pending. Fork ready.', 'Seconds happened. Photo didn\'t.'];
  var PLATE = '<svg class="kpl" viewBox="26 10 148 100" aria-hidden="true">' +
    '<ellipse cx="100" cy="66" rx="50" ry="44" fill="#000" opacity=".28"/>' +
    '<circle cx="100" cy="60" r="46" fill="#2C2A26" stroke="#3B3934" stroke-width="2"/><circle cx="100" cy="60" r="33" fill="#24221F" stroke="#34322D" stroke-width="1.5"/>' +
    '<path d="M70 40 a40 40 0 0 1 44 -20" stroke="#4A4741" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>' +
    '<g fill="#5A5750"><rect x="34" y="40" width="3" height="20" rx="1.5"/><rect x="39.5" y="40" width="3" height="20" rx="1.5"/><rect x="45" y="40" width="3" height="20" rx="1.5"/>' +
    '<path d="M33 58 h16 v4 q0 6 -5 7 v32 q0 3 -3 3 q-3 0 -3 -3 v-32 q-5 -1 -5 -7 z"/>' +
    '<path d="M162 40 q10 8 9 34 h-5 v29 q0 3 -3 3 q-3 0 -3 -3 v-60 q0 -3 2 -3 z"/></g>' +
    '<circle cx="128" cy="38" r="3.2" fill="#BE5126"/></svg>';
  // Same recipe, same quip, on every page: number the photo-less recipes in recipe order.
  var QI = {}, qn = 0;
  ((window.SK && SK.RECIPES) || []).forEach(function (r) { if (!r.photos) QI[r.id] = qn++; });
  window.SH_PLATE = function (r) {
    if (!(r.id in QI)) QI[r.id] = qn++;
    return '<span class="kph">' + PLATE + '<b>' + QUIPS[QI[r.id] % QUIPS.length] + '</b><i>Photo coming soon</i></span>';
  };
})();
