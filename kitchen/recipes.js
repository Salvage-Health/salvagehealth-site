// Salvage Kitchen data.
// FOODS: nutrition per 100 g (raw or dry weight, USDA-based estimates).
// INGREDIENTS: what people can tap in. Staples are assumed to be in every kitchen.
// RECIPES: amounts are written imperial first, metric second; "g" is the weight used for macros.
window.SK = {
  FOODS: {
    'chicken-thigh':  { kcal: 121, p: 19.7, f: 4.1,  c: 0 },
    'chicken-breast': { kcal: 120, p: 22.5, f: 2.6,  c: 0 },
    'sirloin':        { kcal: 160, p: 21.0, f: 8.0,  c: 0 },
    'shrimp':         { kcal: 85,  p: 20.1, f: 0.5,  c: 0 },
    'egg':            { kcal: 143, p: 12.6, f: 9.5,  c: 0.7 },
    'white-rice':     { kcal: 360, p: 6.6,  f: 0.6,  c: 79 },
    'black-beans':    { kcal: 110, p: 7.0,  f: 0.4,  c: 20 },
    'corn':           { kcal: 88,  p: 3.3,  f: 1.4,  c: 19 },
    'bell-pepper':    { kcal: 26,  p: 1.0,  f: 0.3,  c: 6 },
    'onion':          { kcal: 40,  p: 1.1,  f: 0.1,  c: 9.3 },
    'lime-juice':     { kcal: 25,  p: 0.4,  f: 0.1,  c: 8.4 },
    'lemon-juice':    { kcal: 22,  p: 0.4,  f: 0.2,  c: 6.9 },
    'cilantro':       { kcal: 23,  p: 2.1,  f: 0.5,  c: 3.7 },
    'olive-oil':      { kcal: 884, p: 0,    f: 100,  c: 0 },
    'butter':         { kcal: 717, p: 0.9,  f: 81,   c: 0.1 },
    'corn-tortilla':  { kcal: 218, p: 5.7,  f: 2.9,  c: 44.6 },
    'salsa':          { kcal: 36,  p: 1.5,  f: 0.2,  c: 7 },
    'potato':         { kcal: 77,  p: 2.0,  f: 0.1,  c: 17.5 },
    'sweet-potato':   { kcal: 86,  p: 1.6,  f: 0.1,  c: 20 },
    'green-beans':    { kcal: 31,  p: 1.8,  f: 0.2,  c: 7 },
    'broccoli':       { kcal: 34,  p: 2.8,  f: 0.4,  c: 6.6 },
    'zucchini':       { kcal: 17,  p: 1.2,  f: 0.3,  c: 3.1 },
    'garlic':         { kcal: 149, p: 6.4,  f: 0.5,  c: 33 },
    'none':           { kcal: 0,   p: 0,    f: 0,    c: 0 }
  },

  INGREDIENTS: [
    { id: 'chicken-thighs', name: 'Chicken thighs', group: 'Protein', alias: ['thigh', 'thighs', 'chicken'] },
    { id: 'chicken-breast', name: 'Chicken breast', group: 'Protein', alias: ['breast', 'chicken'] },
    { id: 'steak', name: 'Steak', group: 'Protein', alias: ['sirloin', 'beef', 'ribeye', 'strip'] },
    { id: 'shrimp', name: 'Shrimp', group: 'Protein', alias: ['prawns'] },
    { id: 'eggs', name: 'Eggs', group: 'Protein', alias: ['egg'] },
    { id: 'rice', name: 'Rice', group: 'Carbs', alias: ['jasmine', 'white rice'] },
    { id: 'potatoes', name: 'Potatoes', group: 'Carbs', alias: ['potato', 'baby potatoes', 'yukon'] },
    { id: 'sweet-potatoes', name: 'Sweet potatoes', group: 'Carbs', alias: ['sweet potato', 'yam'] },
    { id: 'tortillas', name: 'Corn tortillas', group: 'Carbs', alias: ['tortilla', 'tortillas'] },
    { id: 'black-beans', name: 'Black beans', group: 'Carbs', alias: ['beans'] },
    { id: 'corn', name: 'Corn', group: 'Veg', alias: [] },
    { id: 'bell-pepper', name: 'Bell pepper', group: 'Veg', alias: ['pepper', 'peppers'] },
    { id: 'onion', name: 'Onion', group: 'Veg', alias: ['onions', 'red onion', 'white onion'] },
    { id: 'green-beans', name: 'Green beans', group: 'Veg', alias: [] },
    { id: 'broccoli', name: 'Broccoli', group: 'Veg', alias: [] },
    { id: 'zucchini', name: 'Zucchini', group: 'Veg', alias: ['squash'] },
    { id: 'cilantro', name: 'Cilantro', group: 'Fresh', alias: [] },
    { id: 'lime', name: 'Limes', group: 'Fresh', alias: ['lime'] },
    { id: 'lemon', name: 'Lemons', group: 'Fresh', alias: ['lemon'] },
    { id: 'salsa', name: 'Salsa', group: 'Fridge', alias: [] },
    { id: 'butter', name: 'Butter', group: 'Fridge', alias: [] }
  ],

  STAPLES: ['Olive oil', 'Salt and pepper', 'Garlic', 'Basic spices (chili powder, cumin, paprika, oregano)'],

  RECIPES: [
    {
      id: 'chili-lime-bowls',
      name: 'Chili-Lime Chicken Rice Bowls',
      tag: 'Meal prep',
      serves: 4, mins: 35,
      blurb: 'Charred chicken thighs, black beans, corn and peppers over rice with a hit of lime. Four lunches done in one go.',
      items: [
        { need: 'chicken-thighs', or: ['chicken-breast'], txt: '2 lb (907 g) boneless, skinless chicken thighs', food: 'chicken-thigh', g: 907 },
        { need: 'rice', txt: '1 1/2 cups (280 g) dry jasmine rice', food: 'white-rice', g: 280 },
        { need: 'black-beans', txt: '1 can (15 oz / 425 g) black beans, drained', food: 'black-beans', g: 250 },
        { need: 'corn', txt: '1 cup (150 g) corn', food: 'corn', g: 150 },
        { need: 'bell-pepper', txt: '1 bell pepper, diced', food: 'bell-pepper', g: 150 },
        { need: 'lime', txt: '2 limes', food: 'lime-juice', g: 60 },
        { need: 'cilantro', optional: true, txt: 'Handful of cilantro, chopped', food: 'cilantro', g: 10 },
        { staple: true, txt: '1 tbsp olive oil', food: 'olive-oil', g: 13.5 },
        { staple: true, txt: '2 tsp chili powder, 1 tsp cumin, salt and pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Start the rice. Toss the chicken with chili powder, cumin, salt, pepper, half the oil and the juice of 1 lime.',
        'Sear the chicken in a hot skillet or on the grill, 5 to 6 minutes a side, until it hits 175°F (79°C). Rest it, then slice.',
        'In the same pan, char the pepper and corn in the rest of the oil for 4 to 5 minutes. Stir in the beans to warm through.',
        'Build bowls: rice, beans and veg, chicken. Finish with the last lime and cilantro.'
      ]
    },
    {
      id: 'street-tacos',
      name: 'Chicken Street Tacos',
      tag: 'Quick',
      serves: 4, mins: 25,
      blurb: 'Small corn tortillas, juicy chopped chicken, onion, cilantro and lime. Taco night that still fits your macros.',
      items: [
        { need: 'chicken-thighs', or: ['chicken-breast'], txt: '1 1/2 lb (680 g) boneless, skinless chicken thighs', food: 'chicken-thigh', g: 680 },
        { need: 'tortillas', txt: '12 small corn tortillas', food: 'corn-tortilla', g: 312 },
        { need: 'onion', txt: '1/2 white onion, finely diced', food: 'onion', g: 75 },
        { need: 'cilantro', txt: 'Handful of cilantro, chopped', food: 'cilantro', g: 15 },
        { need: 'lime', txt: '2 limes', food: 'lime-juice', g: 60 },
        { need: 'salsa', optional: true, txt: '1/2 cup (130 g) salsa', food: 'salsa', g: 130 },
        { staple: true, txt: '1 tsp olive oil', food: 'olive-oil', g: 4.5 },
        { staple: true, txt: '1 tsp each chili powder, cumin, oregano; salt', food: 'none', g: 0 }
      ],
      steps: [
        'Season the chicken with the spices, salt, oil and juice of 1 lime.',
        'Cook in a screaming-hot skillet, 5 to 6 minutes a side, until 175°F (79°C). Rest 5 minutes and chop small.',
        'Warm the tortillas in a dry pan, 30 seconds a side, doubled up if they are thin.',
        'Load each with chicken, onion, cilantro and a squeeze of lime. Add salsa if you have it.'
      ]
    },
    {
      id: 'steak-potatoes',
      name: 'Garlic Butter Steak, Potatoes and Green Beans',
      tag: 'Dinner',
      serves: 4, mins: 40,
      blurb: 'Seared sirloin, crispy roasted potatoes and blistered green beans. A steakhouse plate for a fraction of the calories.',
      items: [
        { need: 'steak', txt: '1 1/2 lb (680 g) sirloin steak', food: 'sirloin', g: 680 },
        { need: 'potatoes', or: ['sweet-potatoes'], txt: '1 1/2 lb (680 g) baby potatoes, halved', food: 'potato', g: 680 },
        { need: 'green-beans', or: ['broccoli'], txt: '1 lb (454 g) green beans, trimmed', food: 'green-beans', g: 454 },
        { need: 'butter', optional: true, txt: '1 tbsp butter', food: 'butter', g: 14 },
        { staple: true, txt: '1 tbsp olive oil', food: 'olive-oil', g: 13.5 },
        { staple: true, txt: '3 cloves garlic, smashed; salt and pepper', food: 'garlic', g: 9 }
      ],
      steps: [
        'Heat the oven to 425°F (220°C). Toss the potatoes with half the oil, salt and pepper and roast 25 to 30 minutes until crisp.',
        'Pat the steak dry and season hard with salt and pepper. Sear in a hot pan with the rest of the oil, 3 to 4 minutes a side for medium-rare.',
        'Drop in the butter and garlic for the last minute and spoon it over the steak. Rest 5 minutes, then slice against the grain.',
        'In the same pan, blister the green beans for 4 to 5 minutes. Plate it all up.'
      ]
    },
    {
      id: 'shrimp-skewers',
      name: 'Garlic Shrimp and Veggie Skewers',
      tag: 'Grill',
      serves: 4, mins: 30,
      blurb: 'Lemon garlic shrimp and charred zucchini, peppers and onion over rice. High protein, light on fat.',
      items: [
        { need: 'shrimp', txt: '1 1/2 lb (680 g) raw shrimp, peeled', food: 'shrimp', g: 680 },
        { need: 'zucchini', txt: '2 zucchini, cut in thick coins', food: 'zucchini', g: 400 },
        { need: 'bell-pepper', txt: '2 bell peppers, cut in squares', food: 'bell-pepper', g: 300 },
        { need: 'onion', txt: '1 red onion, cut in chunks', food: 'onion', g: 150 },
        { need: 'rice', txt: '1 cup (185 g) dry rice', food: 'white-rice', g: 185 },
        { need: 'lemon', or: ['lime'], txt: '1 lemon', food: 'lemon-juice', g: 45 },
        { staple: true, txt: '1 tbsp olive oil', food: 'olive-oil', g: 13.5 },
        { staple: true, txt: '3 cloves garlic, minced; paprika, salt and pepper', food: 'garlic', g: 9 }
      ],
      steps: [
        'Start the rice. Toss the shrimp with garlic, paprika, half the oil, salt and the lemon juice.',
        'Thread shrimp and veg onto skewers, alternating. Brush the veg with the rest of the oil.',
        'Grill or broil on high, 2 to 3 minutes a side, until the shrimp turn pink and the veg chars.',
        'Serve over rice with an extra squeeze of lemon.'
      ]
    },
    {
      id: 'steak-eggs',
      name: 'Steak and Eggs Breakfast Plate',
      tag: 'Breakfast',
      serves: 2, mins: 25,
      blurb: 'Sirloin, two eggs each and crispy skillet potatoes. A breakfast that actually keeps you full until lunch.',
      items: [
        { need: 'steak', txt: '8 oz (227 g) sirloin steak', food: 'sirloin', g: 227 },
        { need: 'eggs', txt: '4 large eggs', food: 'egg', g: 200 },
        { need: 'potatoes', or: ['sweet-potatoes'], txt: '12 oz (340 g) potatoes, diced small', food: 'potato', g: 340 },
        { need: 'onion', optional: true, txt: '1/2 onion, diced', food: 'onion', g: 75 },
        { staple: true, txt: '2 tsp olive oil', food: 'olive-oil', g: 9 },
        { staple: true, txt: 'Salt, pepper and paprika', food: 'none', g: 0 }
      ],
      steps: [
        'Cook the potatoes (and onion, if using) in half the oil over medium-high heat, 12 to 15 minutes, stirring now and then, until crisp. Season.',
        'Season the steak and sear 3 minutes a side. Rest it while you cook the eggs.',
        'Fry the eggs in the rest of the oil however you like them.',
        'Slice the steak and plate it with the eggs and potatoes.'
      ]
    },
    {
      id: 'chicken-meal-prep',
      name: 'Chicken, Sweet Potato and Broccoli Meal Prep',
      tag: 'Meal prep',
      serves: 4, mins: 40,
      blurb: 'The classic, done right: seasoned chicken breast, roasted sweet potatoes and crispy broccoli. One pan, four meals.',
      items: [
        { need: 'chicken-breast', or: ['chicken-thighs'], txt: '2 lb (907 g) chicken breast', food: 'chicken-breast', g: 907 },
        { need: 'sweet-potatoes', or: ['potatoes'], txt: '2 lb (907 g) sweet potatoes, cubed', food: 'sweet-potato', g: 907 },
        { need: 'broccoli', or: ['green-beans'], txt: '1 1/2 lb (680 g) broccoli florets', food: 'broccoli', g: 680 },
        { staple: true, txt: '2 tbsp olive oil', food: 'olive-oil', g: 27 },
        { staple: true, txt: 'Garlic powder, paprika, salt and pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Heat the oven to 425°F (220°C). Toss the sweet potatoes with half the oil and seasoning and roast 15 minutes.',
        'Season the chicken. Add it and the broccoli (tossed in the rest of the oil) to the pan.',
        'Roast another 18 to 22 minutes until the chicken hits 165°F (74°C) and the broccoli is crisp at the edges.',
        'Rest the chicken, slice, and split everything into four containers.'
      ]
    }
  ]
};
