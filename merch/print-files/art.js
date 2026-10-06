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
      svg: svg('54 100 292 204',
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
      svg: svg('90 74 220 58',
        '<g filter="url(#dist)">' +
        '<text x="200" y="104" text-anchor="middle" ' + O + ' font-size="28" fill="#EDE8DC" textLength="200" lengthAdjust="spacing">NEVER TOO LATE</text></g>' +
        '<text x="200" y="124" text-anchor="middle" font-family="Oswald" font-weight="600" font-size="11" fill="' + R + '" textLength="200" lengthAdjust="spacing">SECOND CHANCES EXIST</text>' +
        '', DIST) },

    { id: 'hoodie-front', name: 'Hoodie, front: chest wordmark', place: 'Center chest, 4 in (10 cm) wide', inches: 4, bg: 'dark',
      svg: svg('148 210 104 52',
        '<text x="201" y="232" text-anchor="middle" ' + O + ' font-size="22" fill="' + B + '" letter-spacing="2">SALVAGE</text>' +
        '<text x="201" y="256" text-anchor="middle" ' + O + ' font-size="22" fill="' + R + '" letter-spacing="2">HEALTH</text>') },
    { id: 'hoodie-back', name: 'Hoodie, back: Second Chances Exist', place: 'Full back, 12 in (30 cm) wide', inches: 12, bg: 'dark',
      svg: svg('88 120 224 260',
        '<g transform="translate(130 128) scale(1.4)">' + SHIELD(R, B) + '</g>' +
        '<text x="200" y="306" text-anchor="middle" ' + O + ' font-size="29" fill="' + B + '" textLength="200" lengthAdjust="spacingAndGlyphs">SECOND CHANCES</text>' +
        '<text x="200" y="340" text-anchor="middle" ' + O + ' font-size="30" fill="' + R + '" letter-spacing="2">EXIST.</text>' +
        '<text x="200" y="368" text-anchor="middle" font-family="Inter" font-weight="700" font-size="9" fill="' + M + '" textLength="150" lengthAdjust="spacing">SALVAGEHEALTH.COM</text>') },
    { id: 'hoodie-sleeve', name: "Hoodie, sleeve: Say What You'll Do", place: 'Left sleeve, 12 in (30 cm) long, reads top to bottom', inches: 12, bg: 'dark',
      svg: svg('0 0 300 28',
        '<text x="150" y="21" text-anchor="middle" font-family="Oswald" font-weight="600" font-size="22" fill="' + B + '" textLength="284" lengthAdjust="spacing">SAY WHAT YOU\'LL DO.</text>') },

    { id: 'beanie-shield', name: 'Beanie: embroidered shield', place: 'Front cuff, 2 in (5 cm) tall, embroidered', inches: 1.8, bg: 'dark',
      svg: svg('6 -2 88 106', '<path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="none" stroke="' + R + '" stroke-width="8" stroke-linejoin="round"/>' +
        '<path d="M31 54 H39 L45 41 L52 65 L58 47 L63 54 H69" fill="none" stroke="' + B + '" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>') },
    { id: 'tumbler-etch', name: 'Tumbler: laser etch (black = etched)', place: 'Front of tumbler, 2.5 in (6.5 cm) wide, laser etched', inches: 2.5, bg: 'light',
      svg: svg('0 0 200 236',
        '<g transform="translate(46 4) scale(1.08)"><path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="none" stroke="#000" stroke-width="7.5" stroke-linejoin="round"/><path d="M30 54 H38 L44.5 41 L52 65 L58 47 L63 54 H70" fill="none" stroke="#000" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/></g>' +
        '<text x="100" y="152" text-anchor="middle" ' + O + ' font-size="40" fill="#000" textLength="176" lengthAdjust="spacingAndGlyphs">SALVAGE</text>' +
        '<text x="100" y="196" text-anchor="middle" ' + O + ' font-size="40" fill="#000" textLength="176" lengthAdjust="spacingAndGlyphs">HEALTH</text>' +
        '<rect x="12" y="210" width="176" height="3" fill="#000"/>' +
        '<text x="100" y="230" text-anchor="middle" font-family="Oswald" font-weight="600" font-size="12" fill="#000" textLength="176" lengthAdjust="spacing">BUILT FROM WHAT\'S LEFT</text>') },
    { id: 'towel', name: 'Gym towel: full print', place: 'Golf towel 16 x 24 in (40 x 60 cm), full bleed, all art inside the 1 in safe area', inches: 16, bg: 'any',
      svg: svg('0 0 160 240',
        '<rect x="0" y="0" width="160" height="240" fill="' + S + '"/>' +
        '<g transform="translate(42 28) scale(.76)">' + SHIELD(R, B, 7) + '</g>' +
        '<text x="80" y="137" text-anchor="middle" ' + O + ' font-size="28" fill="' + B + '" textLength="108" lengthAdjust="spacingAndGlyphs">SAY WHAT</text>' +
        '<text x="80" y="167" text-anchor="middle" ' + O + ' font-size="28" fill="' + B + '" textLength="108" lengthAdjust="spacingAndGlyphs">YOU\'LL DO.</text>' +
        '<rect x="26" y="176" width="108" height="1.5" fill="' + R + '"/>' +
        '<text x="80" y="191" text-anchor="middle" ' + O + ' font-size="11.5" fill="' + R + '" textLength="108" lengthAdjust="spacing">DO WHAT YOU SAY.</text>' +
        '<text x="80" y="207" text-anchor="middle" font-family="Inter" font-weight="700" font-size="5" fill="' + M + '" textLength="56" lengthAdjust="spacing">SALVAGE HEALTH</text>') },
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
        '<circle cx="118" cy="118" r="118" fill="#FFFFFF"/><circle cx="118" cy="118" r="106" fill="#2B2A27"/><circle cx="118" cy="118" r="68" fill="none" stroke="' + M + '" stroke-width="1.5"/>' +
        '<text ' + O + ' font-size="15" fill="' + B + '" textLength="516" lengthAdjust="spacing"><textPath href="#ring" startOffset="0">BUILT FROM WHAT\'S LEFT · SALVAGE HEALTH ·</textPath></text>' +
        '<g transform="translate(77 74) scale(.82)">' + SHIELD(R, B) + '</g>', '<path id="ring" d="M118 118 m-84 0 a84 84 0 1 1 168 0 a84 84 0 1 1 -168 0"/>') },
    { id: 'tank-back', name: 'Tank, back: Say What You\'ll Do', place: 'Upper back, 10 in (25 cm) wide, 3 in (8 cm) below collar', inches: 10, bg: 'dark',
      svg: svg('0 0 300 352',
        '<g transform="translate(130 0) scale(.4)">' + SHIELD(R, B, 8) + '</g>' +
        '<text ' + O + ' font-size="73.6" fill="' + B + '" x="2" y="117.3" textLength="296" lengthAdjust="spacing">SAY WHAT</text>' +
        '<text ' + O + ' font-size="67.9" fill="' + B + '" x="2" y="185.9" textLength="296" lengthAdjust="spacing">YOU\'LL DO.</text>' +
        '<text ' + O + ' font-size="80.3" fill="' + R + '" x="2" y="264.8" textLength="296" lengthAdjust="spacing">DO WHAT</text>' +
        '<text ' + O + ' font-size="82.7" fill="' + R + '" x="2" y="345.7" textLength="296" lengthAdjust="spacing">YOU SAY.</text>') },
    { id: 'tank-back-text', name: 'Tank, back: Say What You\'ll Do (text only, no shield)', place: 'Upper back, 10 in (25 cm) wide, 3 in (8 cm) below collar', inches: 10, bg: 'dark',
      svg: svg('0 51 300 301',
        '<text ' + O + ' font-size="73.6" fill="' + B + '" x="2" y="117.3" textLength="296" lengthAdjust="spacing">SAY WHAT</text>' +
        '<text ' + O + ' font-size="67.9" fill="' + B + '" x="2" y="185.9" textLength="296" lengthAdjust="spacing">YOU\'LL DO.</text>' +
        '<text ' + O + ' font-size="80.3" fill="' + R + '" x="2" y="264.8" textLength="296" lengthAdjust="spacing">DO WHAT</text>' +
        '<text ' + O + ' font-size="82.7" fill="' + R + '" x="2" y="345.7" textLength="296" lengthAdjust="spacing">YOU SAY.</text>') },
    { id: 'tank-front-light', name: 'Women\'s tank, front: Say What You\'ll Do (for light colors)', place: 'Center chest, 8 in (20 cm) wide, 3 in (8 cm) below collar', inches: 10, bg: 'light',
      svg: svg('0 51 300 301',
        '<text ' + O + ' font-size="73.6" fill="' + S + '" x="2" y="117.3" textLength="296" lengthAdjust="spacing">SAY WHAT</text>' +
        '<text ' + O + ' font-size="67.9" fill="' + S + '" x="2" y="185.9" textLength="296" lengthAdjust="spacing">YOU\'LL DO.</text>' +
        '<text ' + O + ' font-size="80.3" fill="' + R + '" x="2" y="264.8" textLength="296" lengthAdjust="spacing">DO WHAT</text>' +
        '<text ' + O + ' font-size="82.7" fill="' + R + '" x="2" y="345.7" textLength="296" lengthAdjust="spacing">YOU SAY.</text>') },
    { id: 'womens-heart', name: 'Women\'s tank, front: heartbeat heart', place: 'Left chest, 3 in (7.5 cm) wide', inches: 3, bg: 'light',
      svg: svg('4 14 92 80', '<path d="M50 86 C27 71 12 56 15 39 C18 25 35 19 50 35 C65 19 82 25 85 39 C88 56 73 71 50 86 Z" fill="none" stroke="' + R + '" stroke-width="3.6" stroke-linejoin="round"/>' +
        '<path d="M8 53 H31 L38 41 L46 67 L53 46 L58 53 H92" fill="none" stroke="' + S + '" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>') },
    { id: 'heart-dark', name: 'Heartbeat heart (for dark garments)', place: 'Left chest, 3 in (7.5 cm) wide', inches: 7, bg: 'dark',
      svg: svg('4 14 92 80', '<path d="M50 86 C27 71 12 56 15 39 C18 25 35 19 50 35 C65 19 82 25 85 39 C88 56 73 71 50 86 Z" fill="none" stroke="' + R + '" stroke-width="3.6" stroke-linejoin="round"/>' +
        '<path d="M8 53 H31 L38 41 L46 67 L53 46 L58 53 H92" fill="none" stroke="' + B + '" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>') },
    { id: 'bag-front', name: 'Drawstring bag: full front (black)', place: 'Full bag front, edge to edge (Sublicolor 604)', inches: 16, bg: 'dark',
      svg: svg('0 0 464 552', '<rect width="464" height="552" fill="' + S + '"/>' +
        '<g transform="translate(196.00 136.68) scale(.72)">' + SHIELD(R, B, 7) + '</g>' +
        '<g transform="translate(102 181.80) scale(0.8667)">' + '<text ' + O + ' font-size="73.6" fill="' + B + '" x="2" y="117.3" textLength="296" lengthAdjust="spacing">SAY WHAT</text>' + '<text ' + O + ' font-size="67.9" fill="' + B + '" x="2" y="185.9" textLength="296" lengthAdjust="spacing">YOU\'LL DO.</text>' + '<text ' + O + ' font-size="80.3" fill="' + R + '" x="2" y="264.8" textLength="296" lengthAdjust="spacing">DO WHAT</text>' + '<text ' + O + ' font-size="82.7" fill="' + R + '" x="2" y="345.7" textLength="296" lengthAdjust="spacing">YOU SAY.</text>' + '</g>') },
    { id: 'bag-baggage', name: 'Drawstring bag: Emotional Baggage (black)', place: 'Full bag front, edge to edge (Sublicolor 604)', inches: 16, bg: 'dark',
      svg: svg('0 0 464 552', '<rect width="464" height="552" fill="' + S + '"/>' +
        '<path d="M232 196 V150 M218 164 L232 150 L246 164" fill="none" stroke="' + R + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<text ' + O + ' font-size="60.7" fill="' + B + '" x="92" y="265.6" textLength="280" lengthAdjust="spacing">EMOTIONAL</text>' +
        '<text ' + O + ' font-size="68.3" fill="' + B + '" x="92" y="334.5" textLength="280" lengthAdjust="spacing">BAGGAGE.</text>' +
        '<text font-family="Oswald" font-weight="500" font-size="22" fill="' + R + '" x="92" y="374.8" textLength="280" lengthAdjust="spacing">NOW WITH DRAWSTRINGS.</text>' +
        '<g transform="translate(218.5 452) scale(.36)">' + SHIELD(R, B, 8) + '</g>' +
        '<text font-family="Oswald" font-weight="500" font-size="11" fill="' + M + '" x="167" y="508" textLength="130" lengthAdjust="spacing">SALVAGE HEALTH</text>') },
    { id: 'bag-monitor', name: 'Drawstring bag: SALVAGE heart monitor (black)', place: 'Full bag front, edge to edge (Sublicolor 604)', inches: 16, bg: 'dark',
      svg: svg('0 0 464 552', '<rect width="464" height="552" fill="' + S + '"/>' +
        '<path d="M-10.00 306.00 L68.00 306.00 L74.21 298.76 L80.42 306.00 L88.69 306.00 L91.80 314.28 L96.97 231.50 L102.15 326.69 L106.28 306.00 L117.67 306.00 L125.94 294.62 L134.22 306.00 L148.71 306.00 L148.71 306.00 L173.54 306.00 L173.54 286.34 L167.33 280.13 L154.91 280.13 L148.71 273.92 L148.71 260.47 L154.91 254.26 L167.33 254.26 L173.54 260.47 L167.33 254.26 L154.91 254.26 L148.71 260.47 L148.71 273.92 L154.91 280.13 L167.33 280.13 L173.54 286.34 L173.54 306.00 L148.71 306.00 L173.54 306.00 L182.85 306.00 L182.85 306.00 L195.27 248.06 L203.25 285.31 L187.29 285.31 L203.25 285.31 L207.68 306.00 L217.00 306.00 L217.00 306.00 L217.00 254.26 L217.00 306.00 L235.62 306.00 L244.93 306.00 L244.93 306.00 L257.35 306.00 L244.93 254.26 L257.35 306.00 L269.77 254.26 L257.35 306.00 L269.77 306.00 L279.08 306.00 L279.08 306.00 L291.50 248.06 L299.48 285.31 L283.51 285.31 L299.48 285.31 L303.91 306.00 L313.22 306.00 L313.22 306.00 L313.22 260.47 L319.43 254.26 L331.85 254.26 L338.06 260.47 L338.06 264.61 L338.06 260.47 L331.85 254.26 L319.43 254.26 L313.22 260.47 L313.22 306.00 L338.06 306.00 L338.06 283.24 L325.64 283.24 L338.06 283.24 L338.06 306.00 L347.37 306.00 L347.37 306.00 L347.37 306.00 L347.37 260.47 L353.58 254.26 L369.10 254.26 L353.58 254.26 L347.37 260.47 L347.37 306.00 L347.37 280.13 L364.96 280.13 L347.37 280.13 L347.37 306.00 L369.10 306.00 L369.10 306.00 L383.58 306.00 L389.79 299.79 L396.00 306.00 L474.00 306.00" fill="none" stroke="url(#fade)" stroke-width="3.72" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="8"/>' +
        '<text font-family="Oswald" font-weight="500" font-size="12" fill="' + M + '" x="179" y="366" textLength="160" lengthAdjust="spacing">BUILT FROM WHAT\'S LEFT.</text>',
        '<linearGradient id="fade" gradientUnits="userSpaceOnUse" x1="0" x2="464" y1="0" y2="0"><stop offset="0" stop-color="' + R + '" stop-opacity="0"/><stop offset=".16" stop-color="' + R + '" stop-opacity="1"/></linearGradient>') },
    { id: 'hat-monitor-cream', name: 'Hat: SALVAGE heart monitor, embroidered (cream thread)', place: 'Front panel, 4 in (10 cm) wide, embroidered', inches: 4, bg: 'dark',
      svg: svg('19.5 3.5 350.0 105.0', '<path d="M26.00 82.00 L32.00 75.00 L38.00 82.00 L46.00 82.00 L45.00 91.00 L54.00 10.00 L63.00 103.00 L68.00 82.00 L74.00 82.00 L82.00 71.00 L90.00 82.00 L104.00 82.00 L104.00 82.00 L128.00 82.00 L128.00 63.00 L122.00 57.00 L110.00 57.00 L104.00 51.00 L104.00 38.00 L110.00 32.00 L122.00 32.00 L128.00 38.00 L122.00 32.00 L110.00 32.00 L104.00 38.00 L104.00 51.00 L110.00 57.00 L122.00 57.00 L128.00 63.00 L128.00 82.00 L104.00 82.00 L128.00 82.00 L138.00 82.00 L138.00 82.00 L150.00 26.00 L157.71 62.00 L142.29 62.00 L157.71 62.00 L162.00 82.00 L172.00 82.00 L172.00 82.00 L172.00 32.00 L172.00 82.00 L190.00 82.00 L200.00 82.00 L200.00 82.00 L212.00 82.00 L200.00 32.00 L212.00 82.00 L224.00 32.00 L212.00 82.00 L224.00 82.00 L234.00 82.00 L234.00 82.00 L246.00 26.00 L253.71 62.00 L238.29 62.00 L253.71 62.00 L258.00 82.00 L268.00 82.00 L268.00 82.00 L268.00 38.00 L274.00 32.00 L286.00 32.00 L292.00 38.00 L292.00 42.00 L292.00 38.00 L286.00 32.00 L274.00 32.00 L268.00 38.00 L268.00 82.00 L292.00 82.00 L292.00 60.00 L280.00 60.00 L292.00 60.00 L292.00 82.00 L302.00 82.00 L302.00 82.00 L302.00 82.00 L302.00 38.00 L308.00 32.00 L323.00 32.00 L308.00 32.00 L302.00 38.00 L302.00 82.00 L302.00 57.00 L319.00 57.00 L302.00 57.00 L302.00 82.00 L323.00 82.00 L323.00 82.00 L337.00 82.00 L343.00 76.00 L349.00 82.00 L363.00 82.00" fill="none" stroke="' + B + '" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="3"/>') },
    { id: 'hat-monitor-small', name: 'Hat: SALVAGE heart monitor, embroidered (white thread, bold for small placement)', place: 'Side front panel, 2.5 to 3 in (6.5 to 7.5 cm) wide, embroidered', inches: 3, bg: 'dark',
      svg: svg('17 1 355 110', '<path d="M26.00 82.00 L32.00 75.00 L38.00 82.00 L46.00 82.00 L45.00 91.00 L54.00 10.00 L63.00 103.00 L68.00 82.00 L74.00 82.00 L82.00 71.00 L90.00 82.00 L104.00 82.00 L104.00 82.00 L128.00 82.00 L128.00 63.00 L122.00 57.00 L110.00 57.00 L104.00 51.00 L104.00 38.00 L110.00 32.00 L122.00 32.00 L128.00 38.00 L122.00 32.00 L110.00 32.00 L104.00 38.00 L104.00 51.00 L110.00 57.00 L122.00 57.00 L128.00 63.00 L128.00 82.00 L104.00 82.00 L128.00 82.00 L138.00 82.00 L138.00 82.00 L150.00 26.00 L157.71 62.00 L142.29 62.00 L157.71 62.00 L162.00 82.00 L172.00 82.00 L172.00 82.00 L172.00 32.00 L172.00 82.00 L190.00 82.00 L200.00 82.00 L200.00 82.00 L212.00 82.00 L200.00 32.00 L212.00 82.00 L224.00 32.00 L212.00 82.00 L224.00 82.00 L234.00 82.00 L234.00 82.00 L246.00 26.00 L253.71 62.00 L238.29 62.00 L253.71 62.00 L258.00 82.00 L268.00 82.00 L268.00 82.00 L268.00 38.00 L274.00 32.00 L286.00 32.00 L292.00 38.00 L292.00 42.00 L292.00 38.00 L286.00 32.00 L274.00 32.00 L268.00 38.00 L268.00 82.00 L292.00 82.00 L292.00 60.00 L280.00 60.00 L292.00 60.00 L292.00 82.00 L302.00 82.00 L302.00 82.00 L302.00 82.00 L302.00 38.00 L308.00 32.00 L323.00 32.00 L308.00 32.00 L302.00 38.00 L302.00 82.00 L302.00 57.00 L319.00 57.00 L302.00 57.00 L302.00 82.00 L323.00 82.00 L323.00 82.00 L337.00 82.00 L343.00 76.00 L349.00 82.00 L363.00 82.00" fill="none" stroke="' + B + '" stroke-width="9" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="3"/>') },
    { id: 'hat-monitor-black', name: 'Hat: SALVAGE heart monitor, embroidered (black thread)', place: 'Front panel, 4 in (10 cm) wide, embroidered', inches: 4, bg: 'light',
      svg: svg('19.5 3.5 350.0 105.0', '<path d="M26.00 82.00 L32.00 75.00 L38.00 82.00 L46.00 82.00 L45.00 91.00 L54.00 10.00 L63.00 103.00 L68.00 82.00 L74.00 82.00 L82.00 71.00 L90.00 82.00 L104.00 82.00 L104.00 82.00 L128.00 82.00 L128.00 63.00 L122.00 57.00 L110.00 57.00 L104.00 51.00 L104.00 38.00 L110.00 32.00 L122.00 32.00 L128.00 38.00 L122.00 32.00 L110.00 32.00 L104.00 38.00 L104.00 51.00 L110.00 57.00 L122.00 57.00 L128.00 63.00 L128.00 82.00 L104.00 82.00 L128.00 82.00 L138.00 82.00 L138.00 82.00 L150.00 26.00 L157.71 62.00 L142.29 62.00 L157.71 62.00 L162.00 82.00 L172.00 82.00 L172.00 82.00 L172.00 32.00 L172.00 82.00 L190.00 82.00 L200.00 82.00 L200.00 82.00 L212.00 82.00 L200.00 32.00 L212.00 82.00 L224.00 32.00 L212.00 82.00 L224.00 82.00 L234.00 82.00 L234.00 82.00 L246.00 26.00 L253.71 62.00 L238.29 62.00 L253.71 62.00 L258.00 82.00 L268.00 82.00 L268.00 82.00 L268.00 38.00 L274.00 32.00 L286.00 32.00 L292.00 38.00 L292.00 42.00 L292.00 38.00 L286.00 32.00 L274.00 32.00 L268.00 38.00 L268.00 82.00 L292.00 82.00 L292.00 60.00 L280.00 60.00 L292.00 60.00 L292.00 82.00 L302.00 82.00 L302.00 82.00 L302.00 82.00 L302.00 38.00 L308.00 32.00 L323.00 32.00 L308.00 32.00 L302.00 38.00 L302.00 82.00 L302.00 57.00 L319.00 57.00 L302.00 57.00 L302.00 82.00 L323.00 82.00 L323.00 82.00 L337.00 82.00 L343.00 76.00 L349.00 82.00 L363.00 82.00" fill="none" stroke="' + S + '" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="3"/>') },
    { id: 'heart-salvage', name: 'Heart + SALVAGE heartbeat, embroidered (rust heart, white line)', place: 'Left chest, 3.25 in (8 cm) wide, embroidered', inches: 3.25, bg: 'dark',
      svg: svg('-8.5 2.7 418.0 131.4', '<g transform="translate(-5 -12) scale(1.6)"><path d="M50 86 C27 71 12 56 15 39 C18 25 35 19 50 35 C65 19 82 25 85 39 C88 56 73 71 50 86 Z" fill="none" stroke="' + R + '" stroke-width="5.312" stroke-linejoin="round"/></g>' +
        '<path d="M0.0 75.2 L44.0 75.2 L50.0 68.2 L56.0 87.2 L70.0 11.2 L82.0 105.2 L90.0 75.2 L150.0 75.2 L152.0 75.2 L152.0 75.2 L176.0 75.2 L176.0 56.2 L170.0 50.2 L158.0 50.2 L152.0 44.2 L152.0 31.2 L158.0 25.2 L170.0 25.2 L176.0 31.2 L170.0 25.2 L158.0 25.2 L152.0 31.2 L152.0 44.2 L158.0 50.2 L170.0 50.2 L176.0 56.2 L176.0 75.2 L152.0 75.2 L176.0 75.2 L186.0 75.2 L186.0 75.2 L198.0 19.2 L205.7 55.2 L190.3 55.2 L205.7 55.2 L210.0 75.2 L220.0 75.2 L220.0 75.2 L220.0 25.2 L220.0 75.2 L238.0 75.2 L248.0 75.2 L248.0 75.2 L260.0 75.2 L248.0 25.2 L260.0 75.2 L272.0 25.2 L260.0 75.2 L272.0 75.2 L282.0 75.2 L282.0 75.2 L294.0 19.2 L301.7 55.2 L286.3 55.2 L301.7 55.2 L306.0 75.2 L316.0 75.2 L316.0 75.2 L316.0 31.2 L322.0 25.2 L334.0 25.2 L340.0 31.2 L340.0 35.2 L340.0 31.2 L334.0 25.2 L322.0 25.2 L316.0 31.2 L316.0 75.2 L340.0 75.2 L340.0 53.2 L328.0 53.2 L340.0 53.2 L340.0 75.2 L350.0 75.2 L350.0 75.2 L350.0 75.2 L350.0 31.2 L356.0 25.2 L371.0 25.2 L356.0 25.2 L350.0 31.2 L350.0 75.2 L350.0 50.2 L367.0 50.2 L350.0 50.2 L350.0 75.2 L371.0 75.2 L371.0 75.2 L387.0 75.2 L401.0 75.2" fill="none" stroke="#FFFFFF" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="3"/>') },
    { id: 'sleeve-still-beating', name: 'Sleeve: heartbeat + STILL BEATING. (runs top to bottom)', place: 'Left sleeve, 2.4 in (6 cm) wide, top of sleeve down', inches: 2.4, bg: 'dark',
      svg: svg('0 0 60 400', '<g transform="translate(60 0) rotate(90)">' +
        '<path d="M0 30 L30 30 L34 25 L38 30 L44 30 L47 35 L53 4 L59 52 L63 30 L72 30 L78 23 L84 30 L120 30 L124 25 L128 30 L134 30 L137 35 L143 4 L149 52 L153 30 L162 30 L168 23 L174 30 L250 30" fill="none" stroke="' + R + '" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="6"/>' +
        '<text ' + O + ' font-size="24" fill="' + B + '" x="262" y="39" textLength="136" lengthAdjust="spacing">STILL BEATING.</text></g>') },
    { id: 'sleeve-salvage', name: 'Sleeve: SALVAGE heartbeat (runs top to bottom)', place: 'Left sleeve, 2.6 in (6.5 cm) wide, starts near the shoulder', inches: 5.2, bg: 'dark',
      svg: svg('0 -4 100 351', '<g transform="translate(100 0) rotate(90)">' +
        '<path d="M0.0 76.0 L12.0 76.0 L18.0 69.0 L24.0 76.0 L32.0 76.0 L35.0 84.0 L40.0 4.0 L45.0 96.0 L49.0 76.0 L60.0 76.0 L68.0 65.0 L76.0 76.0 L90.0 76.0" fill="none" stroke="' + R + '" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="6"/>' +
        '<path d="M90.0 76.0 L90.0 76.0 L114.0 76.0 L114.0 57.0 L108.0 51.0 L96.0 51.0 L90.0 45.0 L90.0 32.0 L96.0 26.0 L108.0 26.0 L114.0 32.0 L108.0 26.0 L96.0 26.0 L90.0 32.0 L90.0 45.0 L96.0 51.0 L108.0 51.0 L114.0 57.0 L114.0 76.0 L90.0 76.0 L114.0 76.0 L123.0 76.0 L123.0 76.0 L135.0 20.0 L142.7 56.0 L127.3 56.0 L142.7 56.0 L147.0 76.0 L156.0 76.0 L156.0 76.0 L156.0 26.0 L156.0 76.0 L174.0 76.0 L183.0 76.0 L183.0 76.0 L195.0 76.0 L183.0 26.0 L195.0 76.0 L207.0 26.0 L195.0 76.0 L207.0 76.0 L216.0 76.0 L216.0 76.0 L228.0 20.0 L235.7 56.0 L220.3 56.0 L235.7 56.0 L240.0 76.0 L249.0 76.0 L249.0 76.0 L249.0 32.0 L255.0 26.0 L267.0 26.0 L273.0 32.0 L273.0 36.0 L273.0 32.0 L267.0 26.0 L255.0 26.0 L249.0 32.0 L249.0 76.0 L273.0 76.0 L273.0 54.0 L261.0 54.0 L273.0 54.0 L273.0 76.0 L282.0 76.0 L282.0 76.0 L282.0 76.0 L282.0 32.0 L288.0 26.0 L303.0 26.0 L288.0 26.0 L282.0 32.0 L282.0 76.0 L282.0 51.0 L299.0 51.0 L282.0 51.0 L282.0 76.0 L303.0 76.0 L303.0 76.0 L315.0 76.0 L321.0 70.0 L327.0 76.0 L343.0 76.0" fill="none" stroke="' + B + '" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="6"/></g>') },
    { id: 'socks', name: 'Crew socks: full wrap, left and right', place: 'Full sock template (Tribe TC001), both socks', inches: 46.67, bg: 'dark',
      svg: (function () {
        var sock = function (ox, side, sideFill) {
          var g = '<rect x="' + ox + '" y="0" width="286" height="536" fill="' + S + '"/>' +
            '<rect x="' + ox + '" y="36" width="286" height="10" fill="' + R + '"/><rect x="' + ox + '" y="51" width="286" height="4" fill="' + B + '"/>' +
            '<g transform="translate(' + (ox + 98) + ' 82) scale(.875)">' + SHIELD(R, B, 8) + '</g>' +
            '<text ' + O + ' font-size="26" fill="' + B + '" x="' + (ox + 142) + '" y="212" text-anchor="middle" textLength="104" lengthAdjust="spacing">SALVAGE</text>' +
            '<rect x="' + (ox + 118) + '" y="226" width="48" height="4" fill="' + R + '"/>';
          var tx = side === 'L' ? ox + 242 : ox + 26;
          g += '<text ' + O + ' font-size="22" fill="' + sideFill + '" transform="translate(' + tx + ' 80) rotate(90)" textLength="176" lengthAdjust="spacing">' + (side === 'L' ? 'SAY WHAT YOU\'LL DO.' : 'DO WHAT YOU SAY.') + '</text>';
          return g;
        };
        return svg('0 0 698 536', '<rect width="698" height="536" fill="' + S + '"/>' + sock(0, 'L', B) + sock(412, 'R', R));
      })() }
  ];
})();
