// Print-ready artwork for Salvage Health merch. Each entry: id, name, placement, print width in inches,
// background note, and an SVG (transparent background). Text uses Oswald/Inter, embedded at export time.
(function () {
  var R = '#BE5126', B = '#FAF9F5', S = '#141413', M = '#8A8779';
  var SHIELD = function (stroke, pulse, sw) {
    sw = sw || 7;
    return '<path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '" stroke-linejoin="round"/>' +
      '<path d="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78" fill="none" stroke="' + pulse + '" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round"/>';
  };
  var DIST = '<filter id="dist" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="4" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -3.2 0 0 0 2.5" result="m"/><feComposite in="SourceGraphic" in2="m" operator="in"/></filter>';
  var O = 'font-family="Oswald" font-weight="700"';
  var svg = function (vb, inner, defs) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + vb + '"><defs>' + (defs || '') + '</defs>' + inner + '</svg>';
  };

  window.SALVAGE_ART = [
    { id: 'logo-shield', name: 'Shield logo (for dark items)', place: 'Any small logo spot', inches: 4, bg: 'dark',
      svg: svg('10 2 80 98', SHIELD(R, B)) },
    { id: 'logo-shield-light', name: 'Shield logo (for light items)', place: 'Any small logo spot', inches: 4, bg: 'light',
      svg: svg('10 2 80 98', SHIELD(R, S)) },
    { id: 'logo-horizontal-light', name: 'Store logo: shield + name (for light backgrounds)', place: 'Store header logo', inches: 6, bg: 'light',
      svg: svg('8 0 512 100', '<path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="' + S + '" stroke="' + R + '" stroke-width="7" stroke-linejoin="round"/><path d="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78" fill="none" stroke="' + B + '" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<text x="104" y="71" ' + O + ' font-size="58" letter-spacing="1.5" textLength="408" lengthAdjust="spacingAndGlyphs"><tspan fill="' + S + '">SALVAGE </tspan><tspan fill="' + R + '">HEALTH</tspan></text>') },
    { id: 'logo-horizontal-dark', name: 'Store logo: shield + name (for dark backgrounds)', place: 'Store header logo', inches: 6, bg: 'dark',
      svg: svg('8 0 512 100', '<path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="' + S + '" stroke="' + R + '" stroke-width="7" stroke-linejoin="round"/><path d="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78" fill="none" stroke="' + B + '" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<text x="104" y="71" ' + O + ' font-size="58" letter-spacing="1.5" textLength="408" lengthAdjust="spacingAndGlyphs"><tspan fill="' + B + '">SALVAGE </tspan><tspan fill="' + R + '">HEALTH</tspan></text>') },

    { id: 'tee01-front', name: 'Tee 01, front: chest shield', place: 'Left chest, 3.5 in (9 cm) wide', inches: 3.5, bg: 'dark',
      svg: svg('10 2 80 98', SHIELD(R, B)) },
    { id: 'tee01-back', name: "Tee 01, back: Built From What's Left", place: 'Full back, 11 in (28 cm) wide, 3 in (8 cm) below collar', inches: 11, bg: 'dark',
      svg: svg('86 80 228 282',
        '<g filter="url(#dist)">' +
        '<g transform="translate(178 84) scale(.44)">' + SHIELD(R, B) + '</g>' +
        '<text x="200" y="196" text-anchor="middle" ' + O + ' font-size="74" fill="' + B + '" letter-spacing="1">BUILT</text>' +
        '<text x="200" y="250" text-anchor="middle" ' + O + ' font-size="46" fill="' + B + '" letter-spacing="2" textLength="190" lengthAdjust="spacingAndGlyphs">FROM WHAT\'S</text>' +
        '<text x="200" y="322" text-anchor="middle" ' + O + ' font-size="78" fill="' + R + '" letter-spacing="1">LEFT.</text>' +
        '<text x="200" y="352" text-anchor="middle" font-family="Inter" font-weight="700" font-size="11" fill="' + M + '" letter-spacing="5">SALVAGE HEALTH</text>' +
        '</g>', DIST) },

    { id: 'tee02-front', name: 'Tee 02, front: Never Too Late', place: 'Center chest, 10 in (25 cm) wide, 3.5 in (9 cm) below collar', inches: 10, bg: 'light',
      svg: svg('88 94 224 208',
        '<g ' + O + ' text-anchor="middle">' +
        '<text x="200" y="128" font-size="29" fill="' + S + '" letter-spacing="1" textLength="150" lengthAdjust="spacingAndGlyphs">NEVER TOO OLD.</text><line x1="122" y1="118" x2="278" y2="118" stroke="' + R + '" stroke-width="3"/>' +
        '<text x="200" y="164" font-size="29" fill="' + S + '" letter-spacing="1" textLength="154" lengthAdjust="spacingAndGlyphs">NEVER TOO SICK.</text><line x1="120" y1="154" x2="280" y2="154" stroke="' + R + '" stroke-width="3"/>' +
        '<text x="200" y="200" font-size="29" fill="' + S + '" letter-spacing="1" textLength="166" lengthAdjust="spacingAndGlyphs">NEVER TOO HEAVY.</text><line x1="114" y1="190" x2="286" y2="190" stroke="' + R + '" stroke-width="3"/>' +
        '<text x="200" y="236" font-size="29" fill="' + S + '" letter-spacing="1" textLength="154" lengthAdjust="spacingAndGlyphs">NEVER TOO THIN.</text><line x1="120" y1="226" x2="280" y2="226" stroke="' + R + '" stroke-width="3"/>' +
        '<text x="200" y="292" font-size="46" fill="' + R + '" letter-spacing="1" textLength="214" lengthAdjust="spacingAndGlyphs">NEVER TOO LATE.</text>' +
        '</g>') },
    { id: 'tee02-back', name: 'Tee 02, back: neck print', place: 'Upper back below collar, 3 in (8 cm) wide', inches: 3, bg: 'light',
      svg: svg('138 66 124 68',
        '<g transform="translate(186 70) scale(.28)">' + SHIELD(R, S, 8) + '</g>' +
        '<text x="200" y="115" text-anchor="middle" ' + O + ' font-size="13" fill="' + S + '" textLength="112" lengthAdjust="spacingAndGlyphs">SALVAGE <tspan fill="' + R + '">HEALTH</tspan></text>' +
        '<text x="200" y="129" text-anchor="middle" font-family="Inter" font-weight="700" font-size="6.5" fill="#5A5752" textLength="112" lengthAdjust="spacingAndGlyphs">BUILT FROM WHAT\'S LEFT.</text>') },

    { id: 'tee03-front', name: 'Tee 03, front: Salvage Athletic', place: 'Center chest, 11 in (28 cm) wide', inches: 11, bg: 'dark',
      svg: svg('70 100 260 202',
        '<g filter="url(#dist)">' +
        '<text ' + O + ' font-size="40" fill="#EDE8DC" letter-spacing="3" textLength="250" lengthAdjust="spacingAndGlyphs"><textPath href="#arc" startOffset="50%" text-anchor="middle">SALVAGE HEALTH</textPath></text>' +
        '<g transform="translate(164 160) scale(.72)">' + SHIELD(R, '#EDE8DC') + '</g>' +
        '<text x="120" y="212" text-anchor="middle" font-family="Oswald" font-weight="600" font-size="15" fill="' + R + '" letter-spacing="2">EST.</text>' +
        '<text x="280" y="212" text-anchor="middle" font-family="Oswald" font-weight="600" font-size="15" fill="' + R + '" letter-spacing="2">2026</text>' +
        '<line x1="104" y1="256" x2="296" y2="256" stroke="#EDE8DC" stroke-width="2"/>' +
        '<text x="200" y="282" text-anchor="middle" font-family="Oswald" font-weight="600" font-size="17" fill="#EDE8DC" letter-spacing="4" textLength="192" lengthAdjust="spacingAndGlyphs">BUILT FROM WHAT\'S LEFT</text>' +
        '<line x1="104" y1="296" x2="296" y2="296" stroke="#EDE8DC" stroke-width="2"/>' +
        '</g>', DIST.replace('seed="4"', 'seed="9"') + '<path id="arc" d="M86 196 Q200 96 314 196"/>') },
    { id: 'tee03-back', name: 'Tee 03, back: Never Too Late', place: 'Upper back, 9 in (23 cm) wide', inches: 9, bg: 'dark',
      svg: svg('92 76 216 56',
        '<g filter="url(#dist)">' +
        '<text x="200" y="104" text-anchor="middle" ' + O + ' font-size="30" fill="#EDE8DC" letter-spacing="3">NEVER TOO LATE</text>' +
        '<text x="200" y="124" text-anchor="middle" font-family="Oswald" font-weight="600" font-size="11" fill="' + R + '" letter-spacing="6">SECOND CHANCES EXIST</text>' +
        '</g>', DIST) },

    { id: 'hoodie-front', name: 'Hoodie, front: chest wordmark', place: 'Center chest, 4 in (10 cm) wide', inches: 4, bg: 'dark',
      svg: svg('148 210 104 52',
        '<text x="200" y="232" text-anchor="middle" ' + O + ' font-size="22" fill="' + B + '" letter-spacing="2">SALVAGE</text>' +
        '<text x="200" y="256" text-anchor="middle" ' + O + ' font-size="22" fill="' + R + '" letter-spacing="2">HEALTH</text>') },
    { id: 'hoodie-back', name: 'Hoodie, back: Second Chances Exist', place: 'Full back, 12 in (30 cm) wide', inches: 12, bg: 'dark',
      svg: svg('100 124 200 252',
        '<g transform="translate(130 128) scale(1.4)">' + SHIELD(R, B) + '</g>' +
        '<text x="200" y="306" text-anchor="middle" ' + O + ' font-size="30" fill="' + B + '" letter-spacing="2">SECOND CHANCES</text>' +
        '<text x="200" y="340" text-anchor="middle" ' + O + ' font-size="30" fill="' + R + '" letter-spacing="2">EXIST.</text>' +
        '<text x="200" y="368" text-anchor="middle" font-family="Inter" font-weight="700" font-size="9" fill="' + M + '" letter-spacing="5">SALVAGEHEALTH.COM</text>') },
    { id: 'hoodie-sleeve', name: "Hoodie, sleeve: Say What You'll Do", place: 'Left sleeve, 12 in (30 cm) long, reads top to bottom', inches: 12, bg: 'dark',
      svg: svg('0 0 300 26',
        '<text x="150" y="20" text-anchor="middle" font-family="Oswald" font-weight="600" font-size="22" fill="' + B + '" letter-spacing="6">SAY WHAT YOU\'LL DO.</text>') },

    { id: 'beanie-patch', name: 'Beanie: woven shield patch', place: 'Front cuff patch, 2.25 x 1.5 in (6 x 4 cm)', inches: 2.25, bg: 'any',
      svg: svg('0 0 225 150',
        '<rect x="0" y="0" width="225" height="150" rx="12" fill="' + S + '"/>' +
        '<rect x="9" y="9" width="207" height="132" rx="7" fill="none" stroke="#3A3934" stroke-width="3" stroke-dasharray="7 6"/>' +
        '<g transform="translate(70 18) scale(1.14)">' + SHIELD(R, B, 8) + '</g>') },

    { id: 'sticker-shield', name: 'Sticker: shield', place: 'Die-cut, 3 in (8 cm) tall', inches: 2.4, bg: 'any',
      svg: svg('-8 -8 116 120',
        '<path d="M50 2 L88 15 V48 C88 75 70 93 50 102 C30 93 12 75 12 48 V15 Z" fill="' + S + '" stroke="#FFFFFF" stroke-width="9" stroke-linejoin="round"/>' +
        '<g transform="translate(8 6) scale(.84)">' + SHIELD(R, B) + '</g>') },
    { id: 'sticker-wordmark', name: 'Sticker: wordmark', place: 'Die-cut, 3.5 in (9 cm) wide', inches: 3.5, bg: 'any',
      svg: svg('0 0 360 96',
        '<rect x="0" y="0" width="360" height="96" rx="14" fill="#FFFFFF"/><rect x="12" y="12" width="336" height="72" rx="8" fill="' + S + '"/>' +
        '<g transform="translate(24 20) scale(.56)">' + SHIELD(R, B) + '</g>' +
        '<text x="98" y="65" ' + O + ' font-size="40" fill="' + B + '" letter-spacing="2" textLength="236" lengthAdjust="spacingAndGlyphs">SALVAGE <tspan fill="' + R + '">HEALTH</tspan></text>') },
    { id: 'sticker-never', name: 'Sticker: Never Too Late', place: 'Die-cut, 3 in (8 cm) wide', inches: 3, bg: 'any',
      svg: svg('0 0 252 136',
        '<rect x="0" y="0" width="252" height="136" rx="68" fill="#FFFFFF"/><rect x="12" y="12" width="228" height="112" rx="56" fill="' + R + '"/>' +
        '<text x="126" y="62" text-anchor="middle" ' + O + ' font-size="34" fill="' + B + '" letter-spacing="2">NEVER</text>' +
        '<text x="126" y="102" text-anchor="middle" ' + O + ' font-size="34" fill="' + S + '" letter-spacing="2">TOO LATE</text>') },
    { id: 'sticker-say', name: 'Sticker: Say What You\'ll Do', place: 'Die-cut, 3 in (8 cm) wide', inches: 3, bg: 'any',
      svg: svg('0 0 300 104',
        '<rect x="0" y="0" width="300" height="104" rx="10" fill="#FFFFFF"/><rect x="10" y="10" width="280" height="84" rx="6" fill="#E9E5DA"/>' +
        '<text x="150" y="45" text-anchor="middle" ' + O + ' font-size="24" fill="' + S + '" letter-spacing="1">SAY WHAT YOU\'LL DO.</text>' +
        '<text x="150" y="78" text-anchor="middle" ' + O + ' font-size="24" fill="' + R + '" letter-spacing="1">DO WHAT YOU SAY.</text>') },
    { id: 'sticker-badge', name: 'Sticker: round badge', place: 'Die-cut, 3 in (8 cm) circle', inches: 3, bg: 'any',
      svg: svg('0 0 236 236',
        '<circle cx="118" cy="118" r="118" fill="#FFFFFF"/><circle cx="118" cy="118" r="106" fill="#2B2A27"/><circle cx="118" cy="118" r="76" fill="none" stroke="' + M + '" stroke-width="1.5"/>' +
        '<text ' + O + ' font-size="17" fill="' + B + '" letter-spacing="5"><textPath href="#ring" startOffset="0">BUILT FROM WHAT\'S LEFT · SALVAGE HEALTH ·</textPath></text>' +
        '<g transform="translate(72 72) scale(.92)">' + SHIELD(R, B) + '</g>', '<path id="ring" d="M118 118 m-92 0 a92 92 0 1 1 184 0 a92 92 0 1 1 -184 0"/>') }
  ];
})();
