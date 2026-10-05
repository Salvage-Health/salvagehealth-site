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
    'avocado-oil':      { kcal: 884, p: 0,    f: 100,  c: 0 },
    'butter':         { kcal: 717, p: 0.9,  f: 81,   c: 0.1 },
    'corn-tortilla':  { kcal: 218, p: 5.7,  f: 2.9,  c: 44.6 },
    'salsa':          { kcal: 36,  p: 1.5,  f: 0.2,  c: 7 },
    'potato':         { kcal: 77,  p: 2.0,  f: 0.1,  c: 17.5 },
    'sweet-potato':   { kcal: 86,  p: 1.6,  f: 0.1,  c: 20 },
    'green-beans':    { kcal: 31,  p: 1.8,  f: 0.2,  c: 7 },
    'broccoli':       { kcal: 34,  p: 2.8,  f: 0.4,  c: 6.6 },
    'zucchini':       { kcal: 17,  p: 1.2,  f: 0.3,  c: 3.1 },
    'garlic':         { kcal: 149, p: 6.4,  f: 0.5,  c: 33 },
    'ground-turkey':  { kcal: 148, p: 18.7, f: 8.3,  c: 0 },
    'ground-beef':    { kcal: 152, p: 20.9, f: 7.0,  c: 0 },
    'salmon':         { kcal: 208, p: 20.4, f: 13.4, c: 0 },
    'white-fish':     { kcal: 82,  p: 17.8, f: 0.7,  c: 0 },
    'tuna':           { kcal: 116, p: 25.5, f: 0.8,  c: 0 },
    'pork-tenderloin':{ kcal: 120, p: 21.0, f: 3.5,  c: 0 },
    'egg-whites':     { kcal: 52,  p: 10.9, f: 0.2,  c: 0.7 },
    'greek-yogurt':   { kcal: 59,  p: 10.3, f: 0.4,  c: 3.6 },
    'cottage-cheese': { kcal: 81,  p: 10.5, f: 2.3,  c: 4.8 },
    'protein-powder': { kcal: 380, p: 78,   f: 5,    c: 8 },
    'milk':           { kcal: 34,  p: 3.4,  f: 0.1,  c: 5 },
    'oats':           { kcal: 379, p: 13.2, f: 6.5,  c: 67.7 },
    'pasta':          { kcal: 371, p: 13,   f: 1.5,  c: 75 },
    'flour-tortilla': { kcal: 306, p: 8.2,  f: 8,    c: 50 },
    'cheese':         { kcal: 254, p: 24.3, f: 15.9, c: 2.8 },
    'feta':           { kcal: 265, p: 14.2, f: 21.3, c: 3.9 },
    'parmesan':       { kcal: 420, p: 28,   f: 28,   c: 13.9 },
    'marinara':       { kcal: 50,  p: 1.4,  f: 1.5,  c: 8 },
    'canned-tomatoes':{ kcal: 21,  p: 0.9,  f: 0.2,  c: 4 },
    'tomato':         { kcal: 18,  p: 0.9,  f: 0.2,  c: 3.9 },
    'cucumber':       { kcal: 15,  p: 0.7,  f: 0.1,  c: 3.6 },
    'lettuce':        { kcal: 17,  p: 1.2,  f: 0.3,  c: 3.3 },
    'spinach':        { kcal: 23,  p: 2.9,  f: 0.4,  c: 3.6 },
    'asparagus':      { kcal: 20,  p: 2.2,  f: 0.1,  c: 3.9 },
    'mixed-veg':      { kcal: 53,  p: 3.4,  f: 0.4,  c: 10 },
    'spaghetti-squash':{ kcal: 31, p: 0.6,  f: 0.6,  c: 7 },
    'celery':         { kcal: 16,  p: 0.7,  f: 0.2,  c: 3 },
    'banana':         { kcal: 89,  p: 1.1,  f: 0.3,  c: 22.8 },
    'berries':        { kcal: 50,  p: 0.8,  f: 0.3,  c: 12 },
    'peanut-butter':  { kcal: 588, p: 25,   f: 50,   c: 20 },
    'honey':          { kcal: 304, p: 0.3,  f: 0,    c: 82 },
    'soy-sauce':      { kcal: 53,  p: 8.1,  f: 0.1,  c: 4.9 },
    'hot-sauce':      { kcal: 12,  p: 0.5,  f: 0.3,  c: 1 },
    'avocado':        { kcal: 160, p: 2,    f: 14.7, c: 8.5 },
    'ground-chicken-lean': { kcal: 107, p: 23.2, f: 1.3, c: 0 },
    'ff-mozzarella':  { kcal: 160, p: 32,   f: 0,    c: 3.6 },
    'turkey-pepperoni':{ kcal: 233, p: 30,  f: 11.7, c: 3.3 },
    'olives':         { kcal: 115, p: 0.8,  f: 10.7, c: 6 },
    'jalapeno':       { kcal: 29,  p: 0.9,  f: 0.4,  c: 6.5 },
    'mushrooms':      { kcal: 22,  p: 3.1,  f: 0.3,  c: 3.3 },
    'protein-pasta':  { kcal: 339, p: 17.9, f: 2.7,  c: 67.9 },
    'cacio-sauce':    { kcal: 104, p: 5,    f: 6.5,  c: 3 },
    'ground-beef-96': { kcal: 123, p: 21.2, f: 4,    c: 0 },
    'american-cheese':{ kcal: 333, p: 19,   f: 26,   c: 4.8 },
    'keto-bun':       { kcal: 140, p: 10.5, f: 3.5,  c: 29.8 },
    'tallow-fries':   { kcal: 153, p: 2.4,  f: 7.1,  c: 21.2 },
    'ketchup':        { kcal: 101, p: 1,    f: 0.1,  c: 27 },
    'mustard':        { kcal: 60,  p: 3.7,  f: 3.3,  c: 5.8 },
    'pickles':        { kcal: 12,  p: 0.3,  f: 0.4,  c: 2.4 },
    'chicken-breast-cooked': { kcal: 165, p: 31, f: 3.6, c: 0 },
    'monterey-jack':  { kcal: 373, p: 24.5, f: 30.3, c: 0.7 },
    'enchilada-sauce':{ kcal: 40,  p: 1.2,  f: 1.2,  c: 6 },
    'cabbage':        { kcal: 25,  p: 1.3,  f: 0.1,  c: 5.8 },
    'chicken-breast-grilled': { kcal: 148, p: 29.5, f: 3.2, c: 0 },
    'white-rice-cooked': { kcal: 130, p: 2.2, f: 0.1, c: 28.4 },
    'teriyaki-sauce': { kcal: 158, p: 2.6,  f: 0,    c: 36.8 },
    'green-onion':    { kcal: 32,  p: 1.8,  f: 0.2,  c: 7.3 },
    'ground-beef-95': { kcal: 137, p: 21.2, f: 4.8,  c: 0 },
    'rice-paper':     { kcal: 340, p: 0,    f: 0,    c: 83.5 },
    'ff-american':    { kcal: 148, p: 22.2, f: 1.6,  c: 11.1 },
    'dijon':          { kcal: 66,  p: 4.4,  f: 4,    c: 5.8 },
    'skirt-steak':    { kcal: 160, p: 21,   f: 7.8,  c: 0 },
    'banderita-tortilla': { kcal: 154, p: 3.85, f: 1.9, c: 32.7 },
    'salsa-verde':    { kcal: 50,  p: 0,    f: 0,    c: 10 },
    'ground-beef-96b':{ kcal: 116, p: 20.3, f: 4,    c: 0 },
    'broccolini':     { kcal: 35,  p: 2.5,  f: 0.6,  c: 6.9 },
    'cottage-2':      { kcal: 72,  p: 12.5, f: 2.7,  c: 2.7 },
    'taco-seasoning': { kcal: 333, p: 0,    f: 0,    c: 67 },
    'pineapple-juice':{ kcal: 53,  p: 0.4,  f: 0.1,  c: 12.9 },
    'ramen-millet':   { kcal: 375, p: 12.5, f: 3.1,  c: 72 },
    'tonkotsu-broth': { kcal: 47,  p: 2.33, f: 3.67, c: 1.67 },
    'top-sirloin':    { kcal: 201, p: 20.6, f: 12.9, c: 0 },
    'shallot':        { kcal: 72,  p: 2.5,  f: 0.1,  c: 16.8 },
    'nori':           { kcal: 133, p: 0,    f: 0,    c: 33 },
    'sesame-oil':     { kcal: 884, p: 0,    f: 100,  c: 0 },
    'realgood-tortilla': { kcal: 180, p: 20, f: 8,    c: 32 },
    'beef-bacon':     { kcal: 321, p: 28.6, f: 17.9, c: 0 },
    'potato-bake':    { kcal: 105, p: 3.5,  f: 5.5,  c: 10.5 },
    'lm-mozzarella':  { kcal: 286, p: 21.4, f: 21.4, c: 7.1 },
    'whey-isolate':   { kcal: 333, p: 83.3, f: 0,    c: 0 },
    'egg-pasture':    { kcal: 140, p: 12,   f: 10,   c: 0 },
    'wild-blueberries':{ kcal: 57, p: 0,    f: 0,    c: 14 },
    'berry-cream-cheese':{ kcal: 250, p: 5, f: 15,   c: 25 },
    'english-muffin': { kcal: 175, p: 8.8,  f: 1.8,  c: 45.6 },
    'rf-cheese':      { kcal: 238, p: 21.4, f: 14.3, c: 7.1 },
    'chicken-sausage':{ kcal: 188, p: 16.5, f: 11.8, c: 3.5 },
    'none':           { kcal: 0,   p: 0,    f: 0,    c: 0 }
  },

  INGREDIENTS: [
    { id: 'chicken-thighs', name: 'Chicken thighs', group: 'Meat and seafood', alias: ['thigh', 'thighs', 'chicken'] },
    { id: 'chicken-breast', name: 'Chicken breast', group: 'Meat and seafood', alias: ['breast', 'chicken', 'rotisserie'] },
    { id: 'ground-chicken', name: 'Ground chicken', group: 'Meat and seafood', alias: ['chicken'] },
    { id: 'chicken-sausage', name: 'Chicken sausage', group: 'Meat and seafood', alias: ['sausage', 'sausage links'] },
    { id: 'bacon', name: 'Bacon', group: 'Meat and seafood', alias: ['beef bacon', 'turkey bacon'] },
    { id: 'turkey-pepperoni', name: 'Turkey pepperoni', group: 'Meat and seafood', alias: ['pepperoni'] },
    { id: 'ground-turkey', name: 'Ground turkey', group: 'Meat and seafood', alias: ['turkey'] },
    { id: 'ground-beef', name: 'Lean ground beef', group: 'Meat and seafood', alias: ['ground beef', 'beef', 'hamburger'] },
    { id: 'steak', name: 'Steak', group: 'Meat and seafood', alias: ['sirloin', 'beef', 'ribeye', 'strip', 'flank'] },
    { id: 'pork-tenderloin', name: 'Pork tenderloin', group: 'Meat and seafood', alias: ['pork'] },
    { id: 'shrimp', name: 'Shrimp', group: 'Meat and seafood', alias: ['prawns'] },
    { id: 'salmon', name: 'Salmon', group: 'Meat and seafood', alias: ['fish'] },
    { id: 'white-fish', name: 'White fish', group: 'Meat and seafood', alias: ['cod', 'tilapia', 'mahi', 'fish', 'haddock'] },
    { id: 'tuna', name: 'Canned tuna', group: 'Meat and seafood', alias: ['tuna', 'fish'] },
    { id: 'eggs', name: 'Eggs', group: 'Eggs and dairy', alias: ['egg'] },
    { id: 'egg-whites', name: 'Egg whites', group: 'Eggs and dairy', alias: ['whites'] },
    { id: 'greek-yogurt', name: 'Greek yogurt', group: 'Eggs and dairy', alias: ['yogurt'] },
    { id: 'cottage-cheese', name: 'Cottage cheese', group: 'Eggs and dairy', alias: [] },
    { id: 'cheese', name: 'Cheese (shredded or sliced)', group: 'Eggs and dairy', alias: ['cheddar', 'mozzarella', 'cheese', 'american', 'slices', 'monterey jack', 'jack', 'pepper jack'] },
    { id: 'feta', name: 'Feta', group: 'Eggs and dairy', alias: ['cheese'] },
    { id: 'parmesan', name: 'Parmesan', group: 'Eggs and dairy', alias: ['parm', 'cheese'] },
    { id: 'cream-cheese', name: 'Cream cheese', group: 'Eggs and dairy', alias: ['philadelphia', 'whipped cream cheese'] },
    { id: 'milk', name: 'Milk', group: 'Eggs and dairy', alias: ['almond milk', 'oat milk'] },
    { id: 'butter', name: 'Butter', group: 'Eggs and dairy', alias: [] },
    { id: 'rice', name: 'Rice', group: 'Carbs', alias: ['jasmine', 'white rice', 'brown rice'] },
    { id: 'potatoes', name: 'Potatoes', group: 'Carbs', alias: ['potato', 'baby potatoes', 'yukon', 'russet'] },
    { id: 'sweet-potatoes', name: 'Sweet potatoes', group: 'Carbs', alias: ['sweet potato', 'yam'] },
    { id: 'pasta', name: 'Pasta', group: 'Carbs', alias: ['spaghetti', 'penne', 'noodles', 'rotini', 'protein pasta', 'fettuccine'] },
    { id: 'oats', name: 'Oats', group: 'Carbs', alias: ['oatmeal', 'rolled oats'] },
    { id: 'tortillas', name: 'Corn tortillas', group: 'Carbs', alias: ['tortilla', 'tortillas'] },
    { id: 'flour-tortillas', name: 'Flour tortillas or wraps', group: 'Carbs', alias: ['tortilla', 'tortillas', 'wraps', 'wrap'] },
    { id: 'english-muffins', name: 'English muffins', group: 'Carbs', alias: ['english muffin', 'muffins', 'bread'] },
    { id: 'ramen-noodles', name: 'Ramen noodles', group: 'Carbs', alias: ['ramen', 'noodles', 'rice noodles'] },
    { id: 'rice-paper', name: 'Rice paper wrappers', group: 'Carbs', alias: ['rice paper', 'spring roll', 'wrappers', 'egg roll'] },
    { id: 'buns', name: 'Burger buns', group: 'Carbs', alias: ['bun', 'buns', 'keto bun', 'bread'] },
    { id: 'frozen-fries', name: 'Frozen fries', group: 'Carbs', alias: ['fries', 'french fries'] },
    { id: 'black-beans', name: 'Black beans', group: 'Carbs', alias: ['beans'] },
    { id: 'kidney-beans', name: 'Kidney beans', group: 'Carbs', alias: ['beans', 'pinto'] },
    { id: 'bell-pepper', name: 'Bell pepper', group: 'Vegetables', alias: ['pepper', 'peppers'] },
    { id: 'onion', name: 'Onion', group: 'Vegetables', alias: ['onions', 'red onion', 'white onion'] },
    { id: 'broccoli', name: 'Broccoli', group: 'Vegetables', alias: [] },
    { id: 'broccolini', name: 'Broccolini', group: 'Vegetables', alias: ['baby broccoli', 'broccoli'] },
    { id: 'green-beans', name: 'Green beans', group: 'Vegetables', alias: [] },
    { id: 'asparagus', name: 'Asparagus', group: 'Vegetables', alias: [] },
    { id: 'zucchini', name: 'Zucchini', group: 'Vegetables', alias: ['squash'] },
    { id: 'spaghetti-squash', name: 'Spaghetti squash', group: 'Vegetables', alias: ['squash'] },
    { id: 'spinach', name: 'Spinach', group: 'Vegetables', alias: ['greens'] },
    { id: 'lettuce', name: 'Lettuce', group: 'Vegetables', alias: ['romaine', 'greens', 'salad'] },
    { id: 'tomatoes', name: 'Tomatoes', group: 'Vegetables', alias: ['tomato', 'cherry tomatoes'] },
    { id: 'cucumber', name: 'Cucumber', group: 'Vegetables', alias: ['cucumbers'] },
    { id: 'celery', name: 'Celery', group: 'Vegetables', alias: [] },
    { id: 'corn', name: 'Corn', group: 'Vegetables', alias: [] },
    { id: 'coleslaw-mix', name: 'Coleslaw mix', group: 'Vegetables', alias: ['coleslaw', 'slaw', 'shredded cabbage', 'cabbage'] },
    { id: 'shallots', name: 'Shallots', group: 'Vegetables', alias: ['shallot', 'onion'] },
    { id: 'cabbage', name: 'Cabbage', group: 'Vegetables', alias: ['green cabbage', 'savoy'] },
    { id: 'mushrooms', name: 'Mushrooms', group: 'Vegetables', alias: ['mushroom', 'baby bella', 'cremini'] },
    { id: 'jalapenos', name: 'Jalapeños', group: 'Vegetables', alias: ['jalapeno', 'jalapenos', 'peppers'] },
    { id: 'mixed-veg', name: 'Frozen peas and carrots', group: 'Vegetables', alias: ['peas', 'carrots', 'frozen veg', 'mixed vegetables'] },
    { id: 'green-onions', name: 'Green onions', group: 'Fruit and fresh', alias: ['scallions', 'scallion', 'green onion', 'onion'] },
    { id: 'ginger', name: 'Fresh ginger', group: 'Fruit and fresh', alias: ['ginger root'] },
    { id: 'cilantro', name: 'Cilantro', group: 'Fruit and fresh', alias: [] },
    { id: 'lime', name: 'Limes', group: 'Fruit and fresh', alias: ['lime'] },
    { id: 'lemon', name: 'Lemons', group: 'Fruit and fresh', alias: ['lemon'] },
    { id: 'avocado', name: 'Avocado', group: 'Fruit and fresh', alias: ['avocados'] },
    { id: 'banana', name: 'Bananas', group: 'Fruit and fresh', alias: ['banana'] },
    { id: 'berries', name: 'Berries', group: 'Fruit and fresh', alias: ['blueberries', 'strawberries', 'raspberries'] },
    { id: 'salsa', name: 'Salsa', group: 'Sauces and pantry', alias: [] },
    { id: 'broth', name: 'Broth', group: 'Sauces and pantry', alias: ['tonkotsu', 'bone broth', 'stock', 'chicken broth', 'ramen broth'] },
    { id: 'nori', name: 'Nori seaweed', group: 'Sauces and pantry', alias: ['seaweed', 'nori'] },
    { id: 'sesame-oil', name: 'Sesame oil', group: 'Sauces and pantry', alias: ['sesame'] },
    { id: 'taco-seasoning', name: 'Taco seasoning', group: 'Sauces and pantry', alias: ['taco', 'mccormick'] },
    { id: 'salsa-verde', name: 'Salsa verde', group: 'Sauces and pantry', alias: ['verde', 'green salsa', 'tomatillo'] },
    { id: 'marinara', name: 'Marinara or pizza sauce', group: 'Sauces and pantry', alias: ['pasta sauce', 'tomato sauce', 'pizza sauce', 'marinara'] },
    { id: 'cacio-sauce', name: 'Cacio e pepe or alfredo sauce', group: 'Sauces and pantry', alias: ['alfredo', 'carbone', 'cacio', 'white sauce'] },
    { id: 'pineapple-juice', name: 'Pineapple juice', group: 'Sauces and pantry', alias: ['pineapple', 'juice'] },
    { id: 'teriyaki-sauce', name: 'Teriyaki sauce', group: 'Sauces and pantry', alias: ['teriyaki', 'sesame', 'stir fry sauce'] },
    { id: 'enchilada-sauce', name: 'Enchilada sauce', group: 'Sauces and pantry', alias: ['enchilada', 'red sauce'] },
    { id: 'pickles', name: 'Pickles', group: 'Sauces and pantry', alias: ['pickle', 'dill pickles'] },
    { id: 'olives', name: 'Black olives', group: 'Sauces and pantry', alias: ['olive', 'olives'] },
    { id: 'canned-tomatoes', name: 'Canned tomatoes', group: 'Sauces and pantry', alias: ['diced tomatoes', 'crushed tomatoes'] },
    { id: 'soy-sauce', name: 'Soy sauce', group: 'Sauces and pantry', alias: ['soy', 'tamari', 'coconut aminos'] },
    { id: 'honey', name: 'Honey', group: 'Sauces and pantry', alias: ['maple'] },
    { id: 'hot-sauce', name: 'Hot sauce', group: 'Sauces and pantry', alias: ['buffalo', 'franks', 'sriracha'] },
    { id: 'peanut-butter', name: 'Peanut butter', group: 'Sauces and pantry', alias: ['pb'] },
    { id: 'protein-powder', name: 'Protein powder', group: 'Sauces and pantry', alias: ['whey', 'protein'] }
  ],

  STAPLES: ['Avocado oil or avocado oil spray (any oil works if avocado is a problem for you)', 'Salt and pepper', 'Garlic', 'Basic spices (chili powder, cumin, paprika, oregano, cinnamon)', 'Mustard and ketchup', 'Cornstarch'],

  RECIPES: [
    {
      id: 'protein-blueberry-pancakes', name: 'Protein Blueberry Pancakes', by: 'bryan', cat: 'Breakfast', tag: 'Weekend', serves: 1, mins: 20,
      photos: ['/kitchen/img/protein-blueberry-pancakes.jpg', '/kitchen/img/protein-blueberry-pancakes-cut.jpg'],
      blurb: 'Thin, golden egg-and-whey pancakes loaded with wild blueberries, stacked with whipped mixed berry cream cheese and finished with wildflower honey. No flour, 52 grams of protein, and it eats like dessert.',
      items: [
        { need: 'eggs', txt: '4 large pasture-raised eggs (Vital Farms)', food: 'egg-pasture', g: 200 },
        { need: 'protein-powder', txt: '1 scoop (about 30 g) whey protein isolate, vanilla or unflavored', food: 'whey-isolate', g: 30 },
        { need: 'berries', txt: '3 1/2 oz (100 g) wild blueberries, about 3/4 cup (frozen works, no need to thaw)', food: 'wild-blueberries', g: 100 },
        { need: 'cream-cheese', optional: true, txt: '1/4 cup (about 2 oz / 60 g) Philadelphia Whipped Mixed Berry cream cheese', food: 'berry-cream-cheese', g: 60 },
        { need: 'honey', optional: true, txt: '1 tbsp wildflower honey', food: 'honey', g: 19.7 },
        { staple: true, txt: 'Avocado oil spray; pinch of cinnamon and salt', food: 'none', g: 0 }
      ],
      steps: [
        'Whisk or blend the eggs, whey isolate, cinnamon and a pinch of salt until completely smooth with no clumps. Let it sit 2 minutes to thicken slightly.',
        'Heat a 10-inch (25 cm) nonstick skillet over medium-low and give it a light spray of avocado oil.',
        'Pour in about a third of the batter and swirl it into a thin, even round. Scatter a third of the blueberries over the top. Cook 2 to 3 minutes until the edges set and the bottom is golden, then flip and cook 1 more minute. Whey batter browns fast, so keep the heat low.',
        'Repeat to make 3 pancakes.',
        'Stack them, spreading a thin layer of the berry cream cheese between each layer. Save a scoop for the top.',
        'Finish with the last scoop of cream cheese in the middle and drizzle the honey over everything. Slice it like a cake.'
      ]
    },
    {
      id: 'steak-breakfast-burrito', name: 'Steak Breakfast Burrito', by: 'bryan', cat: 'Breakfast', tag: 'Big breakfast', serves: 1, mins: 25,
      photos: ['/kitchen/img/steak-breakfast-burrito.jpg'],
      blurb: 'Seared top sirloin, beef bacon, a scrambled egg, cheesy cheddar and chive potatoes and melted mozzarella, wrapped in a high-protein tortilla and crisped in the pan. Nearly 50 grams of protein before 9 a.m.',
      items: [
        { need: 'flour-tortillas', txt: '1 Real Good burrito tortilla', food: 'realgood-tortilla', g: 50 },
        { need: 'steak', txt: '2 3/4 oz (78 g) top sirloin steak', food: 'top-sirloin', g: 78 },
        { need: 'eggs', txt: '1 large organic egg', food: 'egg', g: 50 },
        { need: 'bacon', optional: true, txt: '2 slices beef bacon', food: 'beef-bacon', g: 28 },
        { need: 'potatoes', optional: true, txt: '1/2 pack cheddar and chive potato bake (or 1/2 cup / 75 g crispy diced potatoes)', food: 'potato-bake', g: 100 },
        { need: 'cheese', txt: '1 oz (28 g) low-moisture mozzarella, shredded', food: 'lm-mozzarella', g: 28 },
        { staple: true, txt: 'Avocado oil spray; salt and pepper; chopped parsley to finish', food: 'none', g: 0 },
        { need: 'salsa', optional: true, txt: 'Red salsa or hot sauce for dipping (not counted in the macros)', food: 'none', g: 0 }
      ],
      steps: [
        'Heat the potato bake according to the package (oven or microwave) so it is hot and ready when you build.',
        'Cook the beef bacon in a skillet until crisp, 3 to 4 minutes, then chop it.',
        'Season the steak with salt and pepper and sear it in the same hot pan with a light spray of avocado oil, 2 to 3 minutes a side for medium-rare. Rest 3 minutes, then chop into small bite-size pieces.',
        'Drop the heat to medium-low and scramble the egg until just set and still soft.',
        'Warm the tortilla so it rolls without cracking. Lay the mozzarella down the middle first so it melts against the hot fillings, then add the egg, steak, bacon and potatoes. Fold in the sides and roll it tight.',
        'Put it seam side down in the hot pan and sear 1 to 2 minutes a side until the tortilla is golden and crisp and the cheese is melted. Cut in half, sprinkle with parsley and serve with salsa for dipping.'
      ]
    },
    {
      id: 'steak-tonkotsu-ramen', name: 'Steak Tonkotsu Ramen', by: 'bryan', cat: 'Dinner', tag: 'Ramen night', serves: 1, mins: 30,
      photos: ['/kitchen/img/steak-tonkotsu-ramen.jpg', '/kitchen/img/steak-tonkotsu-ramen-side.jpg'],
      blurb: 'Rich, creamy tonkotsu broth over millet and brown rice ramen, loaded with seared top sirloin, a jammy soft egg, charred corn, roasted mushrooms, crispy shallots and nori. A real ramen-shop bowl with 54 grams of protein.',
      items: [
        { need: 'steak', txt: '6 oz (170 g) beef top sirloin steak', food: 'top-sirloin', g: 170 },
        { need: 'ramen-noodles', or: ['pasta'], txt: '1/2 pack (about 1 1/8 oz / 32 g) millet and brown rice ramen noodles', food: 'ramen-millet', g: 32 },
        { need: 'broth', txt: '1 portion tonkotsu ramen broth, about 1 1/4 cups (300 ml)', food: 'tonkotsu-broth', g: 300 },
        { need: 'eggs', txt: '1 large organic egg', food: 'egg', g: 50 },
        { need: 'corn', optional: true, txt: '1 oz (28 g) sweet corn, about 3 tbsp', food: 'corn', g: 28 },
        { need: 'mushrooms', optional: true, txt: '1 oz (32 g) baby bella mushrooms, sliced thick', food: 'mushrooms', g: 32 },
        { need: 'green-onions', optional: true, txt: '3 tbsp (18 g) sliced scallions', food: 'green-onion', g: 18 },
        { need: 'shallots', optional: true, txt: '1 tbsp (10 g) shallot, sliced paper thin', food: 'shallot', g: 10 },
        { need: 'nori', optional: true, txt: '3 pieces nori seaweed', food: 'nori', g: 3 },
        { need: 'sesame-oil', optional: true, txt: '1/2 tsp (about 2 g) toasted sesame oil, a light drizzle', food: 'sesame-oil', g: 2.7 },
        { staple: true, txt: 'Avocado oil spray; salt and coarse black pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Jammy egg first: lower the egg into boiling water and cook exactly 6 1/2 minutes, then straight into ice water for 5 minutes. Peel and halve it when you are ready to plate.',
        'Pat the steak dry and season hard with salt and pepper. Sear in a ripping-hot cast iron pan with a light spray of avocado oil, 3 to 4 minutes a side, to 130°F (54°C) for medium-rare. Rest 5 minutes, then slice thin against the grain.',
        'In the same pan, sear the mushroom slices 2 minutes a side until browned, then char the corn 3 to 4 minutes until it gets dark spots. Set both aside.',
        'For crispy shallots, spray the thin shallot slices with avocado oil and air fry at 350°F (175°C) for 5 to 7 minutes, shaking often, until deep golden. Watch them, they go from golden to burnt fast. (Or crisp them in the hot pan.)',
        'Heat the broth until steaming. Cook the noodles according to the package, usually about 4 minutes, and drain.',
        'Build the bowl: noodles, then the hot broth, then fan the steak across the middle. Add the egg halves, corn, mushrooms and scallions around it, pile the crispy shallots on the steak, tuck the nori against the side, and finish with a light drizzle of sesame oil.'
      ]
    },
    {
      id: 'tropic-fire-chicken', batch: true, name: 'Tropic Fire Grilled Chicken', by: 'bryan', cat: 'Dinner', tag: '24-hour marinade', serves: 4, mins: 30,
      photos: ['/kitchen/img/tropic-fire-chicken.jpg'],
      blurb: 'A full 24-hour marinade of pineapple, fresh jalapeño, cilantro, garlic, ginger, onion, ancho chile and lime, then grilled hot for a deep caramelized crust and heavy grill marks. Sweet heat, bright citrus and a little smoke in every bite.',
      items: [
        { need: 'chicken-thighs', or: ['chicken-breast'], txt: '2 lb (907 g) boneless, skinless chicken thighs', food: 'chicken-thigh', g: 907 },
        { need: 'pineapple-juice', txt: '1 cup (240 ml) pineapple juice (macros count the 1/4 cup or so that clings to the chicken)', food: 'pineapple-juice', g: 60 },
        { need: 'lime', txt: '2 limes, juiced, plus more to serve', food: 'none', g: 0 },
        { need: 'jalapenos', optional: true, txt: '1 to 2 fresh jalapeños, stems off (keep the seeds for more heat)', food: 'none', g: 0 },
        { need: 'cilantro', optional: true, txt: '1 cup (about 1 oz / 30 g) cilantro, stems and all, plus more to garnish', food: 'none', g: 0 },
        { need: 'green-onions', optional: true, txt: '4 green onions', food: 'none', g: 0 },
        { need: 'onion', optional: true, txt: '1/2 white onion, roughly chopped', food: 'none', g: 0 },
        { need: 'ginger', optional: true, txt: '1-inch (2.5 cm) piece fresh ginger, peeled (or 1 tsp ground)', food: 'none', g: 0 },
        { staple: true, txt: '6 cloves fresh garlic', food: 'none', g: 0 },
        { staple: true, txt: '2 tbsp ancho chile powder (or 2 dried ancho chiles, stemmed, seeded and soaked)', food: 'none', g: 0 },
        { staple: true, txt: '1 tbsp avocado oil; 2 tsp salt; 1 tsp black pepper', food: 'avocado-oil', g: 13.5 }
      ],
      steps: [
        'Make the marinade: blend the pineapple juice, lime juice, jalapeño, cilantro, green onions, white onion, ginger, garlic, ancho chile, avocado oil, salt and pepper until smooth.',
        'Put the chicken in a zip-top bag or container, pour the marinade over and massage it in. Refrigerate a full 24 hours, turning it once or twice. (Pineapple tenderizes, so do not push it much past 24 hours or the texture goes soft.)',
        'Take the chicken out 20 minutes before grilling, let the extra marinade drip off and pat the tops lightly dry. A drier surface is what gives you the crust. Throw out the used marinade.',
        'Get the grill very hot, 450 to 500°F (230 to 260°C), and oil the grates. Grill the thighs 5 to 6 minutes a side without moving them, so you get deep caramelized grill marks, until they hit 175°F (79°C) inside. The sugar in the pineapple chars fast, so if the outside gets ahead of the inside, move them to a cooler part of the grill to finish.',
        'Rest 5 minutes. Pile on a plate, scatter chopped cilantro over the top and serve with lime halves.'
      ]
    },
    {
      id: 'power-protein-bowl', name: 'Power Protein Bowl', by: 'bryan', cat: 'Dinner', tag: 'Meal prep', serves: 1, mins: 35,
      photos: ['/kitchen/img/power-protein-bowl.jpg'],
      blurb: 'Taco-seasoned lean beef, charred sweet potatoes, blistered broccolini and a big scoop of cottage cheese with chili flakes. 64 grams of protein, no sauce needed.',
      items: [
        { need: 'ground-beef', or: ['ground-turkey'], txt: '7 oz (202 g) 96% lean ground beef', food: 'ground-beef-96b', g: 202 },
        { need: 'sweet-potatoes', or: ['potatoes'], txt: '9 oz (252 g) sweet potato, about 1 medium, cut in 1-inch (2.5 cm) cubes', food: 'sweet-potato', g: 252 },
        { need: 'broccolini', or: ['broccoli', 'green-beans'], txt: '5 1/2 oz (159 g) broccolini, about 1 bunch', food: 'broccolini', g: 159 },
        { need: 'cottage-cheese', or: ['greek-yogurt'], txt: '4 oz (112 g) 2% cottage cheese, about 1/2 cup', food: 'cottage-2', g: 112 },
        { need: 'taco-seasoning', optional: true, txt: '2 tsp McCormick taco seasoning (or 1 tsp chili powder plus 1/2 tsp cumin)', food: 'taco-seasoning', g: 6 },
        { need: 'lime', optional: true, txt: '1/2 lime, in wedges', food: 'none', g: 0 },
        { staple: true, txt: 'Avocado oil spray; red pepper flakes, garlic powder, paprika, salt and pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Heat the oven or air fryer to 425°F (220°C). Toss the sweet potato cubes with a light spray of avocado oil, salt, pepper and paprika. Roast 25 to 30 minutes in the oven (or 15 to 18 in the air fryer), shaking once, until the edges char.',
        'While they roast, brown the beef in a hot skillet, breaking it into small crumbles, 6 to 7 minutes. Stir in the taco seasoning with a splash of water and cook 2 minutes until it coats the meat.',
        'Add the broccolini to the oven pan for the last 8 to 10 minutes with a spray of avocado oil, salt, garlic powder and red pepper flakes. Or blister it in a hot skillet for 4 to 5 minutes.',
        'Build the bowl: beef on one side, sweet potatoes and broccolini on the other, a big scoop of cottage cheese in the middle. Finish with red pepper flakes and lime wedges to squeeze over.'
      ]
    },
    {
      id: 'carne-asada-tacos', name: 'Carne Asada Tacos', by: 'bryan', cat: 'Dinner', tag: 'Taco night', serves: 1, mins: 25,
      photos: ['/kitchen/img/carne-asada-tacos.jpg', '/kitchen/img/carne-asada-tacos-side.jpg'], picRatio: '4/5',
      blurb: 'Simple, clean and dialed in. Hard-seared skirt steak sliced thin on charred corn tortillas with onion, cilantro, salsa verde and lime. Four tacos, 47 grams of protein.',
      items: [
        { need: 'steak', txt: '7 1/4 oz (205 g) skirt steak, trimmed lean (raw weight)', food: 'skirt-steak', g: 205 },
        { need: 'tortillas', txt: '4 La Banderita white corn tortillas', food: 'banderita-tortilla', g: 104 },
        { need: 'onion', txt: '3/4 oz (22 g) white onion, finely diced, about 3 tbsp', food: 'onion', g: 22 },
        { need: 'cilantro', txt: 'Small handful fresh cilantro, chopped', food: 'cilantro', g: 5 },
        { need: 'salsa-verde', or: ['salsa'], txt: "1/4 cup (60 g) Mateo's Medium Salsa Verde", food: 'salsa-verde', g: 60 },
        { need: 'lime', optional: true, txt: '1 lime, half juiced for the steak, half in wedges to serve', food: 'none', g: 0 },
        { staple: true, txt: 'Avocado oil spray; garlic powder, cumin, salt and pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Pat the skirt steak dry. Season both sides with salt, pepper, garlic powder and a pinch of cumin, then squeeze half the lime over it. Let it sit 15 minutes while the grill or cast iron gets screaming hot.',
        'Give the steak a light spray of avocado oil and sear it 3 to 4 minutes a side for medium, about 135°F (57°C). Skirt is thin, so it goes fast and you want hard char on the outside.',
        'Rest the steak 5 to 10 minutes, then slice it thin against the grain. This is what keeps skirt tender, so do not skip it.',
        'Warm the tortillas on a dry hot pan or right over the flame, about 30 seconds a side, until they puff and get a few charred spots. Double them up if they are thin.',
        'Load each tortilla with steak, then onion and cilantro. Serve with the salsa verde on the side and lime wedges to squeeze over.'
      ]
    },
    {
      id: 'cheeseburger-rice-paper-rolls', name: 'Air-Fried Cheeseburger Rice Paper Rolls', by: 'bryan', cat: 'Dinner', tag: 'Air fryer', serves: 1, mins: 30,
      photos: ['/kitchen/img/cheeseburger-rice-paper-rolls.jpg'],
      blurb: 'Crispy rice paper rolls stuffed with lean beef, melted American cheese, onions, pickles and a touch of Dijon. Five rolls is a full plate with 69 grams of protein. Each roll is about 107 calories and 14 grams of protein.',
      items: [
        { need: 'ground-beef', or: ['ground-turkey'], txt: '9 oz (250 g) 95/5 lean ground beef', food: 'ground-beef-95', g: 250 },
        { need: 'rice-paper', txt: '5 rice paper wrappers (about 1/2 package serving, 2/3 oz / 17 g)', food: 'rice-paper', g: 17 },
        { need: 'cheese', txt: '3 slices Kraft Fat-Free American cheese', food: 'ff-american', g: 63 },
        { need: 'onion', txt: '2 oz (59 g) onion, finely diced, about 1/2 small onion', food: 'onion', g: 59 },
        { need: 'pickles', optional: true, txt: '1/2 Claussen pickle spear, chopped', food: 'pickles', g: 15 },
        { staple: true, txt: '4 tsp Dijon mustard', food: 'dijon', g: 20 },
        { staple: true, txt: 'Avocado oil spray; garlic powder, salt and pepper', food: 'none', g: 0 },
        { need: 'lettuce', optional: true, txt: 'To serve: romaine, diced tomato and pickle spears (not counted in the macros)', food: 'none', g: 0 }
      ],
      steps: [
        'Brown the beef and onion in a skillet over medium-high heat, breaking the beef up as it cooks, about 7 minutes. Season with garlic powder, salt and pepper. Drain any fat, stir in the Dijon and chopped pickle, and let it cool for a few minutes so it does not tear the wrappers.',
        'Heat the air fryer to 400°F (205°C).',
        'Cut each cheese slice into strips. Dip one rice paper wrapper in warm water for 5 to 10 seconds, just until it softens, and lay it flat on a damp cutting board.',
        'Spoon one fifth of the beef across the lower third, lay a few cheese strips on top, fold up the bottom, fold in the sides and roll it tight like a burrito. Repeat for all 5.',
        'Spray the rolls with avocado oil and air fry seam side down for 10 to 12 minutes, flipping halfway, until crispy and golden.',
        'Rest 2 minutes (the cheese is molten), then serve over romaine with diced tomato and pickle spears.'
      ]
    },
    {
      id: 'teriyaki-chicken-bowl', name: 'Teriyaki Chicken and Rice Bowl', by: 'bryan', cat: 'Lunch', tag: 'High protein', serves: 1, mins: 30,
      photos: ['/kitchen/img/teriyaki-chicken-bowl.jpg'],
      blurb: 'A big bowl of charred, sticky sesame teriyaki chicken over white rice with a pile of green onions. Nearly 100 grams of protein. Split it in two for a pair of 400-calorie lunches.',
      items: [
        { need: 'chicken-breast', or: ['chicken-thighs'], txt: '11 oz (308 g) grilled chicken breast, cooked weight (about 15 oz / 425 g raw)', food: 'chicken-breast-grilled', g: 308 },
        { need: 'rice', txt: '8 oz (225 g) cooked white rice, about 1 1/4 cups', food: 'white-rice-cooked', g: 225 },
        { need: 'teriyaki-sauce', or: ['soy-sauce'], txt: '2 tbsp (1 serving) sweet sesame teriyaki sauce', food: 'teriyaki-sauce', g: 38 },
        { need: 'green-onions', optional: true, txt: '2 green onions, sliced', food: 'green-onion', g: 15 },
        { need: 'soy-sauce', optional: true, txt: '1 tsp soy sauce, a light drizzle over the rice', food: 'soy-sauce', g: 6 },
        { staple: true, txt: 'Avocado oil spray; garlic powder, salt and pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Pat the chicken dry, spray it lightly with avocado oil and season with garlic powder, salt and pepper.',
        'Grill over medium-high heat, 6 to 7 minutes a side, until it hits 165°F (74°C) and has good char. No grill? Use a hot grill pan or cast iron. Rest 5 minutes.',
        'Cut the chicken into bite-size chunks. Toss them in a hot pan with the teriyaki sauce for about 1 minute, until the sauce bubbles and turns sticky and glossy.',
        'Warm the rice and drizzle the soy sauce over it.',
        'Pile the glazed chicken on the rice, spoon any extra sauce from the pan over the top, and finish with plenty of green onions.'
      ]
    },
    {
      id: 'cabbage-enchiladas', batch: true, name: 'Cabbage-Wrapped Shredded Chicken Enchiladas', by: 'bryan', cat: 'Dinner', tag: 'Low carb', serves: 8, mins: 60,
      photos: ['/kitchen/img/cabbage-enchiladas-steps.jpg', '/kitchen/img/cabbage-enchiladas.jpg'], picRatio: '3/4',
      blurb: 'All the enchilada flavor with cabbage leaves standing in for tortillas. Saucy shredded chicken, melted Monterey Jack, a charred cheesy top, and over 60 grams of protein for under 500 calories.',
      items: [
        { need: 'chicken-breast', or: ['chicken-thighs'], txt: '2 3/4 lb (1.25 kg) cooked, shredded chicken breast, from about 3 1/2 lb (1.6 kg) raw', food: 'chicken-breast-cooked', g: 1280 },
        { need: 'cabbage', txt: '1 large head green cabbage, for 16 large leaves', food: 'cabbage', g: 640 },
        { need: 'enchilada-sauce', or: ['salsa'], txt: '2 cans (10 oz / 283 g each) Old El Paso Original Enchilada Sauce', food: 'enchilada-sauce', g: 566 },
        { need: 'cheese', txt: '12 oz (340 g) Monterey Jack, shredded, about 3 cups', food: 'monterey-jack', g: 340 },
        { staple: true, txt: '1 tsp each cumin, chili powder, garlic powder and onion powder; salt and pepper; avocado oil spray', food: 'none', g: 0 }
      ],
      steps: [
        'Heat the oven to 375°F (190°C). Cut the core out of the cabbage and drop the whole head into a big pot of boiling water for 3 to 5 minutes. Peel off the leaves as they soften, and keep going until you have 16. Pat them dry and shave down the thick center rib so they roll easily.',
        'Mix the shredded chicken with the spices, 1 cup (240 ml) of the enchilada sauce and 1 cup (about 4 oz / 113 g) of the cheese.',
        'Spray a 9 x 13-inch (23 x 33 cm) baking dish with avocado oil and spread a thin layer of sauce on the bottom.',
        'Spoon a line of filling onto each leaf, fold in the sides and roll it up tight. Lay them seam side down in two rows, 8 per row.',
        'Pour the rest of the sauce over the rolls, cover with foil and bake 25 minutes.',
        'Uncover, scatter the remaining cheese over the top and bake another 15 to 20 minutes, until the cheese is bubbling and charred in spots. Rest 5 minutes. 2 rolls per serving.'
      ]
    },
    {
      id: 'double-cheeseburger', name: 'Macro-Friendly Double Cheeseburger and Fries', by: 'bryan', cat: 'Dinner', tag: 'Burger night', serves: 1, mins: 20,
      photos: ['/kitchen/img/double-cheeseburger.jpg'],
      blurb: 'Two crispy smashed patties, double American cheese, all the fixings on a keto bun, with a side of beef tallow fries. A real burger night for about 650 calories and 44 grams of protein.',
      items: [
        { need: 'ground-beef', txt: '4 oz (114 g) 96/4 lean ground beef', food: 'ground-beef-96', g: 114 },
        { need: 'cheese', txt: '2 slices American cheese', food: 'american-cheese', g: 42 },
        { need: 'buns', txt: '1 Healthy Life Keto burger bun (or any low-calorie bun)', food: 'keto-bun', g: 57 },
        { need: 'frozen-fries', or: ['potatoes'], txt: "6 oz (170 g) Jesse & Ben's Beef Tallow Sea Salt Fries, 2 servings (or hand-cut potatoes)", food: 'tallow-fries', g: 170 },
        { need: 'tomatoes', optional: true, txt: '1 thin slice tomato, about 1 oz (25 g)', food: 'tomato', g: 25 },
        { need: 'onion', optional: true, txt: '1 thin slice onion, about 1/2 oz (15 g)', food: 'onion', g: 15 },
        { need: 'lettuce', optional: true, txt: '1 romaine leaf, about 1/3 oz (10 g)', food: 'lettuce', g: 10 },
        { need: 'pickles', optional: true, txt: '3 dill pickle chips, about 1/3 oz (10 g)', food: 'pickles', g: 10 },
        { staple: true, txt: '1 tbsp (15 g) ketchup', food: 'ketchup', g: 15 },
        { staple: true, txt: '1 tbsp (about 3 tsp / 15 g) yellow mustard', food: 'mustard', g: 15 },
        { staple: true, txt: 'Avocado oil spray; salt and pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Start the fries first. Air fry at 400°F (205°C) for 12 to 15 minutes, shaking the basket halfway, until deep golden. (Or follow the bag for the oven.)',
        'Split the beef into two 2 oz (57 g) balls. Heat a cast iron skillet or griddle over high heat until it is ripping hot, and give it a light spray of avocado oil.',
        'Drop the balls in and smash them flat and thin with a sturdy spatula. Season with salt and pepper. Leave them alone for 2 minutes until the edges are dark and crispy.',
        'Flip, lay a slice of cheese on each patty, and cook 1 more minute. Cover the pan for 30 seconds so the cheese melts all the way.',
        'Toast the cut sides of the bun in the same pan for about 30 seconds.',
        'Build it: bottom bun, ketchup and mustard, lettuce and pickles, both patties stacked, onion and tomato, top bun. Plate it with the fries.'
      ]
    },
    {
      id: 'cajun-cacio-pasta', name: 'Grilled Cajun Chicken Cacio e Pepe Protein Pasta', by: 'bryan', cat: 'Dinner', tag: 'High protein', serves: 2, mins: 30,
      photos: ['/kitchen/img/cajun-cacio-pasta.jpg', '/kitchen/img/cajun-cacio-pasta-close.jpg'],
      blurb: 'Charred Cajun chicken thighs over creamy, peppery protein rotini and broccoli, buried in fresh parmesan. Tastes like a cheat meal, eats like a 45 gram protein meal.',
      items: [
        { need: 'chicken-thighs', or: ['chicken-breast'], txt: '8 oz (230 g) boneless, skinless chicken thighs', food: 'chicken-thigh', g: 230 },
        { need: 'pasta', txt: '6 oz (168 g) dry Barilla Protein+ rotini (3 servings), or any pasta', food: 'protein-pasta', g: 168 },
        { need: 'broccoli', txt: '5 1/4 oz (151 g) broccoli florets, about 1 3/4 cups', food: 'broccoli', g: 151 },
        { need: 'cacio-sauce', optional: true, txt: '2 3/4 oz (77 g) Carbone Cacio e Pepe sauce, about 1/3 cup (no jar? use extra parmesan, pasta water and lots of black pepper)', food: 'cacio-sauce', g: 77 },
        { need: 'parmesan', txt: '1 oz (25 g) fresh grated parmesan, about 1/3 cup', food: 'parmesan', g: 25 },
        { staple: true, txt: '1 1/2 tbsp Cajun seasoning; avocado oil spray; salt; lots of fresh black pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Pat the chicken thighs dry and coat them all over with the Cajun seasoning and a light spray of avocado oil. Let them sit 10 minutes while the grill heats (or overnight in the fridge).',
        'Grill over medium-high heat, 5 to 6 minutes a side, until charred and 175°F (79°C) inside. Rest 5 minutes, then slice.',
        'Meanwhile, boil the rotini in well-salted water. Add the broccoli for the last 3 minutes. Save 1/2 cup (120 ml) of the pasta water, then drain.',
        'Put the pasta and broccoli back in the pot over low heat. Stir in the cacio e pepe sauce, half the parmesan and a splash of pasta water until it turns glossy and coats everything. Crack in plenty of black pepper.',
        'Split between two plates, fan the sliced chicken on top, and finish with the rest of the parmesan and more pepper.'
      ]
    },
    {
      id: 'chicken-crust-pizza', name: "Deluxe Chicken Crust Pizza", by: 'bryan', cat: 'Dinner', tag: 'High protein', serves: 4, mins: 45,
      photos: ['/kitchen/img/chicken-crust-pizza.jpg', '/kitchen/img/chicken-crust-pizza-slice.jpg'],
      blurb: "My famous one. The crust is ground chicken, egg and cheese, baked until it is crispy and holds a real slice. Loaded deluxe, two slices still land around 45 grams of protein.",
      items: [
        { need: 'ground-chicken', or: ['chicken-breast'], txt: '12 1/2 oz (356 g) 99% fat-free ground chicken (or 1 lb / 454 g cooked chicken breast, pulsed fine)', food: 'ground-chicken-lean', g: 356 },
        { need: 'eggs', txt: '1 large egg', food: 'egg', g: 50 },
        { need: 'cheese', txt: '1/2 cup (56 g) fat-free mozzarella, for the crust', food: 'ff-mozzarella', g: 56 },
        { need: 'parmesan', txt: '1/4 cup (25 g) grated parmesan for the crust, plus 1/3 cup (33 g) for the top', food: 'parmesan', g: 58 },
        { need: 'marinara', txt: '5 3/4 oz (162 g) pizza sauce, about 2/3 cup', food: 'marinara', g: 162 },
        { need: 'cheese', txt: '5 1/2 oz (155 g) part-skim mozzarella, shredded, for the top', food: 'cheese', g: 155 },
        { need: 'turkey-pepperoni', optional: true, txt: '1 3/4 oz (50 g) turkey pepperoni', food: 'turkey-pepperoni', g: 50 },
        { need: 'bell-pepper', optional: true, txt: '2 oz (58 g) green and red bell pepper, diced', food: 'bell-pepper', g: 58 },
        { need: 'mushrooms', optional: true, txt: '1 oz (32 g) baby bella mushrooms, sliced', food: 'mushrooms', g: 32 },
        { need: 'jalapenos', optional: true, txt: '1 oz (28 g) jalapeño slices', food: 'jalapeno', g: 28 },
        { need: 'olives', optional: true, txt: '1 oz (26 g) sliced black olives', food: 'olives', g: 26 },
        { need: 'onion', optional: true, txt: '1/2 oz (15 g) onion, thinly sliced', food: 'onion', g: 15 },
        { staple: true, txt: '1/2 tsp each garlic powder, onion powder and Italian seasoning; salt and pepper; parchment paper', food: 'none', g: 0 }
      ],
      steps: [
        'Heat the oven to 400°F (205°C). Line a pizza pan or baking sheet with parchment.',
        'Mix the ground chicken, egg, fat-free mozzarella, the first 1/4 cup of parmesan and the seasonings until thick and sticky. Using cooked chicken instead? Pat it very dry first, and add 1 to 2 tbsp almond flour if the mix is wet.',
        'Press it onto the parchment into a 12-inch (30 cm) circle about 1/4 inch (6 mm) thick, a little thicker at the edge. Wet hands or a second sheet of parchment on top make this easy.',
        'Bake 15 to 20 minutes until golden and firm. For extra crisp, flip it and bake 5 more minutes.',
        'Top it lightly: sauce, mozzarella, veggies, pepperoni, then the rest of the parmesan. Go easy on the sauce so the crust stays crisp.',
        'Bake 8 to 10 more minutes until the cheese melts and the edges char. Rest 5 minutes on a rack, then cut into 8 slices. 2 slices per serving.'
      ]
    },
    {"id": "turkey-sausage-mcmuffins", "name": "High-Protein Turkey Sausage Egg McMuffins", "cat": "Breakfast", "tag": "Freezer friendly", "serves": 8, "mins": 40, "blurb": "The drive-thru classic, rebuilt lean. Homemade sage turkey sausage, a fluffy egg round and melty reduced-fat cheese on a toasted light English muffin. Make 8 on Sunday, grab one every morning. About 365 calories and 35 grams of protein each.", "items": [{"need": "ground-turkey", "or": ["chicken-sausage"], "txt": "1 1/2 lb (680 g) 93% lean ground turkey", "food": "ground-turkey", "g": 680}, {"need": "eggs", "txt": "8 large eggs", "food": "egg", "g": 400}, {"need": "egg-whites", "optional": true, "txt": "1 cup (240 ml) liquid egg whites", "food": "egg-whites", "g": 243}, {"need": "english-muffins", "txt": "8 light multigrain English muffins (about 100 calories each)", "food": "english-muffin", "g": 456}, {"need": "cheese", "txt": "8 slices reduced-fat cheddar or 2% American cheese", "food": "rf-cheese", "g": 168}, {"staple": true, "txt": "Sausage seasoning: 1 tsp dried sage, 1 tsp salt, 1/2 tsp each black pepper, garlic powder and crushed fennel seed, 1/4 tsp each smoked paprika and red pepper flakes", "food": "none", "g": 0}, {"staple": true, "txt": "Avocado oil spray", "food": "none", "g": 0}], "batch": true},
    {"id": "shredded-salsa-chicken", "name": "Shredded Salsa Chicken", "cat": "Lunch", "tag": "Set it and forget it", "serves": 8, "mins": 20, "blurb": "Three pounds of chicken and a jar of salsa, cooked low and slow until it shreds with a fork. One batch covers bowls, tacos, wraps and salads all week. About 40 grams of protein per serving for around 230 calories.", "items": [{"need": "chicken-breast", "or": ["chicken-thighs"], "txt": "3 lb (1.36 kg) boneless, skinless chicken breasts", "food": "chicken-breast", "g": 1360}, {"need": "salsa", "or": ["salsa-verde"], "txt": "2 cups (16 oz / 520 g) salsa, any heat level", "food": "salsa", "g": 520}, {"need": "taco-seasoning", "optional": true, "txt": "1 tbsp taco seasoning (or 1 tsp each chili powder and cumin)", "food": "taco-seasoning", "g": 8}, {"need": "lime", "optional": true, "txt": "1 lime, juiced", "food": "none", "g": 0}, {"staple": true, "txt": "1/2 tsp salt", "food": "none", "g": 0}], "batch": true},
    {"id": "egg-roll-in-a-bowl", "name": "Egg Roll in a Bowl", "cat": "Dinner", "tag": "20 minutes", "serves": 4, "mins": 20, "blurb": "Everything you love about an egg roll without the wrapper. Ground turkey, crunchy cabbage slaw, ginger, garlic and soy, all in one skillet in 20 minutes. Low carb, high protein, and it reheats perfectly.", "items": [{"need": "ground-turkey", "or": ["ground-beef", "ground-chicken"], "txt": "1 1/2 lb (680 g) 93% lean ground turkey", "food": "ground-turkey", "g": 680}, {"need": "coleslaw-mix", "or": ["cabbage"], "txt": "1 bag (14 oz / 400 g) coleslaw mix", "food": "cabbage", "g": 400}, {"need": "soy-sauce", "txt": "3 tbsp (45 ml) low-sodium soy sauce", "food": "soy-sauce", "g": 48}, {"need": "green-onions", "optional": true, "txt": "4 green onions, sliced, whites and greens kept separate", "food": "green-onion", "g": 30}, {"need": "ginger", "optional": true, "txt": "1 tbsp fresh ginger, grated (or 1/2 tsp ground)", "food": "none", "g": 0}, {"need": "sesame-oil", "optional": true, "txt": "1 tsp toasted sesame oil", "food": "sesame-oil", "g": 4.5}, {"need": "hot-sauce", "optional": true, "txt": "Sriracha to finish", "food": "none", "g": 0}, {"staple": true, "txt": "1 tsp avocado oil; 3 cloves garlic, minced", "food": "avocado-oil", "g": 4.5}], "batch": true},
    {"id": "sheet-pan-chicken-sausage", "name": "Sheet Pan Chicken Sausage, Peppers and Potatoes", "cat": "Dinner", "tag": "Sheet pan", "serves": 4, "mins": 40, "blurb": "Browned chicken sausage, crispy potatoes and sweet roasted peppers and onions, all on one pan. Minimal chopping, one pan to wash, and four containers ready for the week.", "items": [{"need": "chicken-sausage", "txt": "1 lb (454 g) fully cooked chicken sausage, 5 to 6 links", "food": "chicken-sausage", "g": 454}, {"need": "potatoes", "or": ["sweet-potatoes"], "txt": "1 lb (454 g) baby potatoes", "food": "potato", "g": 454}, {"need": "bell-pepper", "txt": "2 bell peppers, any color", "food": "bell-pepper", "g": 300}, {"need": "onion", "txt": "1 red onion", "food": "onion", "g": 150}, {"staple": true, "txt": "1 tbsp avocado oil; 1 tsp each Italian seasoning or oregano, garlic powder and paprika; 1/2 tsp salt; black pepper", "food": "avocado-oil", "g": 13.5}], "batch": true},
    {"id": "protein-breakfast-casserole", "name": "High-Protein Breakfast Casserole", "cat": "Breakfast", "tag": "Meal prep", "serves": 8, "mins": 55, "blurb": "A whole week of breakfast in one 9 x 13 dish. Homemade turkey sausage, eggs, egg whites, cottage cheese, crispy potatoes, spinach and peppers under a layer of reduced-fat cheddar. Cut, box and reheat in a minute.", "items": [{"need": "ground-turkey", "or": ["chicken-sausage"], "txt": "1 lb (454 g) 93% lean ground turkey", "food": "ground-turkey", "g": 454}, {"need": "eggs", "txt": "10 large eggs", "food": "egg", "g": 500}, {"need": "egg-whites", "optional": true, "txt": "2 cups (480 ml) liquid egg whites", "food": "egg-whites", "g": 486}, {"need": "cottage-cheese", "or": ["greek-yogurt"], "txt": "1 cup (8 oz / 226 g) low-fat cottage cheese", "food": "cottage-cheese", "g": 226}, {"need": "potatoes", "or": ["sweet-potatoes"], "txt": "1 lb (454 g) potatoes, diced small (or frozen diced hash browns, thawed)", "food": "potato", "g": 454}, {"need": "spinach", "optional": true, "txt": "2 packed cups (60 g) baby spinach, roughly chopped", "food": "spinach", "g": 60}, {"need": "bell-pepper", "optional": true, "txt": "1 bell pepper, diced", "food": "bell-pepper", "g": 150}, {"need": "cheese", "txt": "1 cup (4 oz / 113 g) reduced-fat shredded cheddar", "food": "rf-cheese", "g": 113}, {"staple": true, "txt": "Sausage seasoning: 1 tsp dried sage, 1 tsp salt, 1/2 tsp each black pepper, garlic powder and crushed fennel seed, 1/4 tsp each smoked paprika and red pepper flakes", "food": "none", "g": 0}, {"staple": true, "txt": "Avocado oil spray; salt and pepper", "food": "none", "g": 0}], "batch": true},
    {
      id: 'chili-lime-bowls', batch: true, cat: 'Lunch',
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
        { staple: true, txt: '1 tbsp avocado oil', food: 'avocado-oil', g: 13.5 },
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
      id: 'street-tacos', cat: 'Dinner',
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
        { staple: true, txt: '1 tsp avocado oil', food: 'avocado-oil', g: 4.5 },
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
      id: 'steak-potatoes', cat: 'Dinner',
      name: 'Garlic Butter Steak, Potatoes and Green Beans',
      tag: 'Dinner',
      serves: 4, mins: 40,
      blurb: 'Seared sirloin, crispy roasted potatoes and blistered green beans. A steakhouse plate for a fraction of the calories.',
      items: [
        { need: 'steak', txt: '1 1/2 lb (680 g) sirloin steak', food: 'sirloin', g: 680 },
        { need: 'potatoes', or: ['sweet-potatoes'], txt: '1 1/2 lb (680 g) baby potatoes, halved', food: 'potato', g: 680 },
        { need: 'green-beans', or: ['broccoli'], txt: '1 lb (454 g) green beans, trimmed', food: 'green-beans', g: 454 },
        { need: 'butter', optional: true, txt: '1 tbsp butter', food: 'butter', g: 14 },
        { staple: true, txt: '1 tbsp avocado oil', food: 'avocado-oil', g: 13.5 },
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
      id: 'shrimp-skewers', cat: 'Dinner',
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
        { staple: true, txt: '1 tbsp avocado oil', food: 'avocado-oil', g: 13.5 },
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
      id: 'steak-eggs', cat: 'Breakfast',
      name: 'Steak and Eggs Breakfast Plate',
      tag: 'Breakfast',
      serves: 2, mins: 25,
      blurb: 'Sirloin, two eggs each and crispy skillet potatoes. A breakfast that actually keeps you full until lunch.',
      items: [
        { need: 'steak', txt: '8 oz (227 g) sirloin steak', food: 'sirloin', g: 227 },
        { need: 'eggs', txt: '4 large eggs', food: 'egg', g: 200 },
        { need: 'potatoes', or: ['sweet-potatoes'], txt: '12 oz (340 g) potatoes, diced small', food: 'potato', g: 340 },
        { need: 'onion', optional: true, txt: '1/2 onion, diced', food: 'onion', g: 75 },
        { staple: true, txt: '2 tsp avocado oil', food: 'avocado-oil', g: 9 },
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
      id: 'chicken-meal-prep', batch: true, cat: 'Lunch',
      name: 'Chicken, Sweet Potato and Broccoli Meal Prep',
      tag: 'Meal prep',
      serves: 4, mins: 40,
      blurb: 'The classic, done right: seasoned chicken breast, roasted sweet potatoes and crispy broccoli. One pan, four meals.',
      items: [
        { need: 'chicken-breast', or: ['chicken-thighs'], txt: '2 lb (907 g) chicken breast', food: 'chicken-breast', g: 907 },
        { need: 'sweet-potatoes', or: ['potatoes'], txt: '2 lb (907 g) sweet potatoes, cubed', food: 'sweet-potato', g: 907 },
        { need: 'broccoli', or: ['green-beans'], txt: '1 1/2 lb (680 g) broccoli florets', food: 'broccoli', g: 680 },
        { staple: true, txt: '2 tbsp avocado oil', food: 'avocado-oil', g: 27 },
        { staple: true, txt: 'Garlic powder, paprika, salt and pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Heat the oven to 425°F (220°C). Toss the sweet potatoes with half the oil and seasoning and roast 15 minutes.',
        'Season the chicken. Add it and the broccoli (tossed in the rest of the oil) to the pan.',
        'Roast another 18 to 22 minutes until the chicken hits 165°F (74°C) and the broccoli is crisp at the edges.',
        'Rest the chicken, slice, and split everything into four containers.'
      ]
    },
    {
      id: 'protein-overnight-oats', batch: true, name: 'Protein Overnight Oats', cat: 'Breakfast', tag: 'Make ahead', serves: 2, mins: 5,
      blurb: 'Oats, Greek yogurt and a scoop of protein, mixed the night before. Grab-and-go breakfast with over 30 grams of protein.',
      items: [
        { need: 'oats', txt: '1 cup (80 g) rolled oats', food: 'oats', g: 80 },
        { need: 'greek-yogurt', txt: '1 cup (227 g) nonfat Greek yogurt', food: 'greek-yogurt', g: 227 },
        { need: 'protein-powder', txt: '1 scoop (30 g) vanilla protein powder', food: 'protein-powder', g: 30 },
        { need: 'milk', txt: '1 cup (240 ml) milk', food: 'milk', g: 240 },
        { need: 'berries', optional: true, txt: '1 cup (150 g) berries', food: 'berries', g: 150 },
        { need: 'honey', optional: true, txt: '1 tsp honey', food: 'honey', g: 7 },
        { staple: true, txt: 'Pinch of cinnamon and salt', food: 'none', g: 0 }
      ],
      steps: [
        'Whisk the protein powder into the milk first so it does not clump.',
        'Stir in the oats, yogurt, cinnamon and a pinch of salt. Split between two jars.',
        'Cover and refrigerate overnight, or at least 4 hours.',
        'Top with berries and a drizzle of honey when you eat it. Keeps 4 days in the fridge.'
      ]
    },
    {
      id: 'egg-bites', batch: true, name: 'Veggie Egg Bites', cat: 'Breakfast', tag: 'Meal prep', serves: 4, mins: 30,
      blurb: 'Fluffy muffin-tin egg bites with spinach and peppers. Cottage cheese makes them creamy and adds protein.',
      items: [
        { need: 'eggs', txt: '6 large eggs', food: 'egg', g: 300 },
        { need: 'egg-whites', optional: true, txt: '1 cup (240 ml) liquid egg whites', food: 'egg-whites', g: 243 },
        { need: 'cottage-cheese', txt: '1/2 cup (113 g) cottage cheese', food: 'cottage-cheese', g: 113 },
        { need: 'spinach', txt: '2 cups (60 g) spinach, chopped', food: 'spinach', g: 60 },
        { need: 'bell-pepper', txt: '1 bell pepper, finely diced', food: 'bell-pepper', g: 150 },
        { need: 'cheese', optional: true, txt: '1/2 cup (56 g) shredded cheese', food: 'cheese', g: 56 },
        { staple: true, txt: 'Avocado oil spray, salt and pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Heat the oven to 350°F (175°C) and spray a 12-cup muffin tin well.',
        'Blend the eggs, egg whites, cottage cheese, salt and pepper until smooth.',
        'Divide the spinach, pepper and cheese between the cups, then pour the egg mix over.',
        'Bake 20 to 25 minutes until set in the middle. Cool 5 minutes before popping them out. 3 bites per serving.'
      ]
    },
    {
      id: 'yogurt-bowl', name: 'Greek Yogurt Power Bowl', cat: 'Breakfast', tag: '5 minutes', serves: 1, mins: 5,
      blurb: 'Thick Greek yogurt, berries, banana and a spoon of peanut butter. Tastes like dessert, eats like a protein shake.',
      items: [
        { need: 'greek-yogurt', txt: '1 cup (227 g) nonfat Greek yogurt', food: 'greek-yogurt', g: 227 },
        { need: 'berries', txt: '3/4 cup (110 g) berries', food: 'berries', g: 110 },
        { need: 'banana', optional: true, txt: '1/2 banana, sliced', food: 'banana', g: 60 },
        { need: 'peanut-butter', optional: true, txt: '1 tbsp peanut butter', food: 'peanut-butter', g: 16 },
        { need: 'honey', optional: true, txt: '1 tsp honey', food: 'honey', g: 7 },
        { staple: true, txt: 'Pinch of cinnamon', food: 'none', g: 0 }
      ],
      steps: [
        'Spoon the yogurt into a bowl and stir in the cinnamon.',
        'Top with the berries and banana.',
        'Warm the peanut butter for 10 seconds so it drizzles, then finish with honey.'
      ]
    },
    {
      id: 'greek-chicken-bowls', batch: true, name: 'Greek Chicken Bowls', cat: 'Lunch', tag: 'Meal prep', serves: 4, mins: 35,
      blurb: 'Lemon-oregano chicken over rice with cucumber, tomato, red onion, feta and a Greek yogurt tzatziki.',
      items: [
        { need: 'chicken-breast', or: ['chicken-thighs'], txt: '2 lb (907 g) chicken breast', food: 'chicken-breast', g: 907 },
        { need: 'rice', txt: '1 1/2 cups (280 g) dry rice', food: 'white-rice', g: 280 },
        { need: 'cucumber', txt: '1 large cucumber', food: 'cucumber', g: 300 },
        { need: 'tomatoes', txt: '2 tomatoes, chopped', food: 'tomato', g: 246 },
        { need: 'onion', optional: true, txt: '1/2 red onion, thinly sliced', food: 'onion', g: 75 },
        { need: 'greek-yogurt', txt: '1 cup (227 g) nonfat Greek yogurt', food: 'greek-yogurt', g: 227 },
        { need: 'lemon', txt: '1 lemon', food: 'lemon-juice', g: 45 },
        { need: 'feta', optional: true, txt: '1/3 cup (50 g) crumbled feta', food: 'feta', g: 50 },
        { staple: true, txt: '1 tbsp avocado oil; garlic, oregano, salt and pepper', food: 'avocado-oil', g: 13.5 }
      ],
      steps: [
        'Start the rice. Toss the chicken with oil, half the lemon juice, garlic, oregano, salt and pepper.',
        'Grill or pan-sear 6 to 7 minutes a side until 165°F (74°C). Rest and slice.',
        'For the tzatziki, grate a quarter of the cucumber, squeeze out the water and stir it into the yogurt with garlic, salt and the rest of the lemon.',
        'Dice the rest of the cucumber. Build bowls with rice, chicken, cucumber, tomato and onion. Top with tzatziki and feta.'
      ]
    },
    {
      id: 'burrito-skillet', batch: true, name: 'One-Pan Chicken Burrito Skillet', cat: 'Dinner', tag: 'One pan', serves: 4, mins: 30,
      blurb: 'Chicken, rice, beans, corn and salsa all cooked in one skillet, finished with melted cheese. Burrito bowl, fewer dishes.',
      items: [
        { need: 'chicken-breast', or: ['chicken-thighs'], txt: '1 1/2 lb (680 g) chicken breast, cubed', food: 'chicken-breast', g: 680 },
        { need: 'rice', txt: '1 cup (185 g) dry rice', food: 'white-rice', g: 185 },
        { need: 'black-beans', or: ['kidney-beans'], txt: '1 can (15 oz / 425 g) black beans, drained', food: 'black-beans', g: 250 },
        { need: 'corn', optional: true, txt: '1 cup (150 g) corn', food: 'corn', g: 150 },
        { need: 'salsa', or: ['canned-tomatoes'], txt: '1 cup (260 g) salsa', food: 'salsa', g: 260 },
        { need: 'cheese', optional: true, txt: '1/2 cup (56 g) shredded cheese', food: 'cheese', g: 56 },
        { staple: true, txt: '1 tsp avocado oil; chili powder, cumin, salt; 2 cups (480 ml) water', food: 'avocado-oil', g: 4.5 }
      ],
      steps: [
        'Season the chicken and brown it in the oil in a large lidded skillet, 5 minutes.',
        'Stir in the rice, salsa, beans, corn and water. Bring to a boil.',
        'Cover, drop to low and simmer 18 to 20 minutes until the rice is tender.',
        'Sprinkle the cheese on top, cover 2 more minutes to melt, and serve.'
      ]
    },
    {
      id: 'turkey-taco-lettuce-wraps', name: 'Turkey Taco Lettuce Wraps', cat: 'Lunch', tag: 'Low carb', serves: 4, mins: 20,
      blurb: 'Seasoned taco turkey in crunchy romaine cups with tomato, cheese and a Greek yogurt crema.',
      items: [
        { need: 'ground-turkey', or: ['ground-beef'], txt: '1 1/2 lb (680 g) lean ground turkey', food: 'ground-turkey', g: 680 },
        { need: 'lettuce', txt: '2 romaine hearts, leaves separated', food: 'lettuce', g: 300 },
        { need: 'tomatoes', txt: '2 tomatoes, diced', food: 'tomato', g: 246 },
        { need: 'onion', optional: true, txt: '1/2 onion, diced', food: 'onion', g: 75 },
        { need: 'cheese', optional: true, txt: '1/2 cup (56 g) shredded cheese', food: 'cheese', g: 56 },
        { need: 'greek-yogurt', optional: true, txt: '1/2 cup (113 g) Greek yogurt with lime', food: 'greek-yogurt', g: 113 },
        { need: 'salsa', optional: true, txt: '1/2 cup (130 g) salsa', food: 'salsa', g: 130 },
        { staple: true, txt: '2 tsp chili powder, 1 tsp cumin, paprika, salt', food: 'none', g: 0 }
      ],
      steps: [
        'Brown the turkey and onion over medium-high heat, breaking it up, 7 to 8 minutes.',
        'Add the spices and a splash of water. Simmer 2 minutes until it coats the meat.',
        'Spoon into lettuce leaves.',
        'Top with tomato, cheese, salsa and a dollop of yogurt.'
      ]
    },
    {
      id: 'greek-yogurt-chicken-salad', batch: true, name: 'Greek Yogurt Chicken Salad', cat: 'Lunch', tag: 'No cook option', serves: 4, mins: 15,
      blurb: 'Classic chicken salad made with Greek yogurt instead of mayo. Crunchy celery, red onion and lemon. Great in a wrap or lettuce.',
      items: [
        { need: 'chicken-breast', or: ['chicken-thighs'], txt: '1 1/2 lb (680 g) cooked chicken breast or rotisserie chicken, chopped', food: 'chicken-breast', g: 680 },
        { need: 'greek-yogurt', txt: '3/4 cup (170 g) nonfat Greek yogurt', food: 'greek-yogurt', g: 170 },
        { need: 'celery', txt: '2 stalks celery, diced', food: 'celery', g: 80 },
        { need: 'onion', optional: true, txt: '1/4 red onion, minced', food: 'onion', g: 40 },
        { need: 'lemon', optional: true, txt: '1/2 lemon', food: 'lemon-juice', g: 22 },
        { need: 'lettuce', or: ['flour-tortillas'], optional: true, txt: 'Lettuce leaves or wraps to serve', food: 'lettuce', g: 100 },
        { staple: true, txt: '1 tbsp Dijon mustard, garlic powder, salt and pepper', food: 'none', g: 0 }
      ],
      steps: [
        'If the chicken is raw, poach it in simmering salted water 12 to 15 minutes until 165°F (74°C), then cool and chop.',
        'Stir the yogurt, mustard, lemon, garlic powder, salt and pepper together.',
        'Fold in the chicken, celery and onion.',
        'Serve in lettuce cups or wraps. Keeps 4 days in the fridge.'
      ]
    },
    {
      id: 'tuna-cucumber', name: 'Tuna Salad Cucumber Boats', cat: 'Lunch', tag: '10 minutes', serves: 2, mins: 10,
      blurb: 'Lemony Greek yogurt tuna salad piled into cucumber halves. Over 30 grams of protein, almost no cooking.',
      items: [
        { need: 'tuna', txt: '2 cans (5 oz / 142 g each) tuna in water, drained', food: 'tuna', g: 226 },
        { need: 'greek-yogurt', txt: '1/4 cup (57 g) nonfat Greek yogurt', food: 'greek-yogurt', g: 57 },
        { need: 'cucumber', txt: '1 large cucumber', food: 'cucumber', g: 300 },
        { need: 'onion', optional: true, txt: '2 tbsp red onion, minced', food: 'onion', g: 20 },
        { need: 'lemon', optional: true, txt: '1/2 lemon', food: 'lemon-juice', g: 22 },
        { staple: true, txt: '1 tsp Dijon mustard, salt and pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Mix the tuna, yogurt, onion, mustard and lemon. Season with salt and pepper.',
        'Halve the cucumber lengthwise and scoop out the seeds with a spoon.',
        'Pack the tuna salad into the cucumber halves and slice into boats.'
      ]
    },
    {
      id: 'chicken-caesar-wraps', name: 'Chicken Caesar Wraps', cat: 'Lunch', tag: 'Wraps', serves: 4, mins: 25,
      blurb: 'Grilled chicken, crisp romaine and parmesan with a creamy Greek yogurt Caesar dressing, rolled into a wrap.',
      items: [
        { need: 'chicken-breast', or: ['chicken-thighs'], txt: '1 1/2 lb (680 g) chicken breast', food: 'chicken-breast', g: 680 },
        { need: 'lettuce', txt: '1 head romaine, chopped', food: 'lettuce', g: 300 },
        { need: 'parmesan', txt: '1/3 cup (33 g) grated parmesan', food: 'parmesan', g: 33 },
        { need: 'greek-yogurt', txt: '1/2 cup (113 g) nonfat Greek yogurt', food: 'greek-yogurt', g: 113 },
        { need: 'lemon', txt: '1 lemon', food: 'lemon-juice', g: 45 },
        { need: 'flour-tortillas', txt: '4 large flour tortillas or wraps', food: 'flour-tortilla', g: 288 },
        { staple: true, txt: '1 tsp avocado oil; 1 tsp Dijon, garlic, salt, lots of black pepper', food: 'avocado-oil', g: 4.5 }
      ],
      steps: [
        'Season the chicken with salt, pepper and oil. Grill or sear 6 to 7 minutes a side to 165°F (74°C). Rest and slice.',
        'Whisk the yogurt, half the parmesan, lemon juice, Dijon, garlic and plenty of pepper. Thin with water if needed.',
        'Toss the romaine with the dressing and the rest of the parmesan.',
        'Fill each wrap with salad and chicken, roll tight and cut in half.'
      ]
    },
    {
      id: 'korean-beef-bowls', batch: true, name: 'Korean-Style Beef Bowls', cat: 'Dinner', tag: '20 minutes', serves: 4, mins: 20,
      blurb: 'Sweet and savory ground beef with garlic, ginger and soy over rice. Faster than takeout and a lot leaner.',
      items: [
        { need: 'ground-beef', or: ['ground-turkey'], txt: '1 1/2 lb (680 g) 93% lean ground beef', food: 'ground-beef', g: 680 },
        { need: 'rice', txt: '1 1/2 cups (280 g) dry rice', food: 'white-rice', g: 280 },
        { need: 'soy-sauce', txt: '1/4 cup (60 ml) low-sodium soy sauce', food: 'soy-sauce', g: 64 },
        { need: 'honey', txt: '2 tbsp honey or brown sugar', food: 'honey', g: 42 },
        { need: 'cucumber', optional: true, txt: '1 cucumber, sliced', food: 'cucumber', g: 300 },
        { need: 'broccoli', optional: true, txt: '2 cups (180 g) steamed broccoli', food: 'broccoli', g: 180 },
        { staple: true, txt: '4 cloves garlic, 1 tsp ginger (fresh or ground), red pepper flakes', food: 'garlic', g: 12 }
      ],
      steps: [
        'Start the rice. Whisk the soy sauce, honey, garlic, ginger and pepper flakes.',
        'Brown the beef over high heat, breaking it up, 6 to 7 minutes. Drain any fat.',
        'Pour in the sauce and simmer 2 minutes until glossy.',
        'Serve over rice with cucumber and broccoli.'
      ]
    },
    {
      id: 'buffalo-chicken-wraps', name: 'Buffalo Chicken Wraps', cat: 'Lunch', tag: 'Wraps', serves: 4, mins: 25,
      blurb: 'Spicy buffalo chicken, crunchy lettuce and a cool Greek yogurt ranch, all in a wrap.',
      items: [
        { need: 'chicken-breast', or: ['chicken-thighs'], txt: '1 1/2 lb (680 g) chicken breast', food: 'chicken-breast', g: 680 },
        { need: 'hot-sauce', txt: '1/3 cup (80 ml) buffalo hot sauce', food: 'hot-sauce', g: 80 },
        { need: 'flour-tortillas', txt: '4 large flour tortillas or wraps', food: 'flour-tortilla', g: 288 },
        { need: 'lettuce', txt: '2 cups (100 g) shredded lettuce', food: 'lettuce', g: 100 },
        { need: 'greek-yogurt', txt: '1/2 cup (113 g) Greek yogurt', food: 'greek-yogurt', g: 113 },
        { need: 'celery', optional: true, txt: '1 stalk celery, thinly sliced', food: 'celery', g: 40 },
        { need: 'cheese', optional: true, txt: '1/2 cup (56 g) shredded cheese', food: 'cheese', g: 56 },
        { staple: true, txt: '1 tsp avocado oil; garlic powder, dried dill or parsley, salt', food: 'avocado-oil', g: 4.5 }
      ],
      steps: [
        'Season and cook the chicken in the oil, 6 to 7 minutes a side, until 165°F (74°C). Chop and toss with the hot sauce.',
        'Stir the yogurt with garlic powder, dill, salt and a splash of water for a quick ranch.',
        'Warm the tortillas so they roll without cracking.',
        'Fill with lettuce, buffalo chicken, celery, cheese and ranch. Roll and slice.'
      ]
    },
    {
      id: 'sheet-pan-fajitas', batch: true, name: 'Sheet Pan Chicken Fajitas', cat: 'Dinner', tag: 'Sheet pan', serves: 4, mins: 30,
      blurb: 'Chicken, peppers and onions roasted on one pan with fajita spices. Wrap them up or eat them over rice.',
      items: [
        { need: 'chicken-breast', or: ['chicken-thighs', 'shrimp'], txt: '1 1/2 lb (680 g) chicken breast, sliced into strips', food: 'chicken-breast', g: 680 },
        { need: 'bell-pepper', txt: '3 bell peppers, sliced', food: 'bell-pepper', g: 450 },
        { need: 'onion', txt: '1 onion, sliced', food: 'onion', g: 150 },
        { need: 'flour-tortillas', or: ['tortillas'], txt: '8 small (8-inch) flour tortillas', food: 'flour-tortilla', g: 392 },
        { need: 'lime', optional: true, txt: '1 lime', food: 'lime-juice', g: 30 },
        { need: 'greek-yogurt', optional: true, txt: '1/2 cup (113 g) Greek yogurt in place of sour cream', food: 'greek-yogurt', g: 113 },
        { need: 'salsa', optional: true, txt: 'Salsa to serve', food: 'salsa', g: 130 },
        { staple: true, txt: '1 tbsp avocado oil; 2 tsp chili powder, 1 tsp each cumin, paprika, garlic powder, salt', food: 'avocado-oil', g: 13.5 }
      ],
      steps: [
        'Heat the oven to 425°F (220°C).',
        'Toss the chicken, peppers and onion with the oil and spices on a big sheet pan. Spread them out so they roast, not steam.',
        'Roast 18 to 22 minutes, until the chicken is cooked through and the veg has charred edges. Squeeze the lime over.',
        'Warm the tortillas and load them with fajitas, yogurt and salsa. Two per serving.'
      ]
    },
    {
      id: 'shrimp-fried-rice', name: 'Shrimp Fried Rice', cat: 'Dinner', tag: '20 minutes', serves: 4, mins: 20,
      blurb: 'Better than takeout: shrimp, egg, peas and carrots tossed with day-old rice and soy sauce in a hot pan.',
      items: [
        { need: 'shrimp', or: ['chicken-breast'], txt: '1 lb (454 g) raw shrimp, peeled', food: 'shrimp', g: 454 },
        { need: 'rice', txt: '1 1/2 cups (280 g) dry rice, cooked and chilled (about 4 1/2 cups cooked)', food: 'white-rice', g: 280 },
        { need: 'eggs', txt: '3 large eggs, beaten', food: 'egg', g: 150 },
        { need: 'mixed-veg', txt: '2 cups (300 g) frozen peas and carrots', food: 'mixed-veg', g: 300 },
        { need: 'soy-sauce', txt: '3 tbsp low-sodium soy sauce', food: 'soy-sauce', g: 48 },
        { need: 'onion', optional: true, txt: '1/2 onion or 3 green onions, chopped', food: 'onion', g: 60 },
        { staple: true, txt: '1 tbsp avocado oil; 3 cloves garlic', food: 'avocado-oil', g: 13.5 }
      ],
      steps: [
        'Get a large pan or wok very hot with half the oil. Cook the shrimp 1 to 2 minutes a side and set aside.',
        'Scramble the eggs in the pan, break them up, and set aside with the shrimp.',
        'Add the rest of the oil, onion, garlic and frozen veg. Cook 3 minutes, then add the cold rice and press it into the pan to crisp.',
        'Add the soy sauce, shrimp and eggs. Toss 2 minutes and serve.'
      ]
    },
    {
      id: 'turkey-chili', batch: true, name: 'Big Batch Turkey Chili', cat: 'Dinner', tag: 'Meal prep', serves: 6, mins: 45,
      blurb: 'Lean turkey, two kinds of beans and tomatoes simmered with real spice. Freezes perfectly.',
      items: [
        { need: 'ground-turkey', or: ['ground-beef'], txt: '2 lb (907 g) lean ground turkey', food: 'ground-turkey', g: 907 },
        { need: 'kidney-beans', or: ['black-beans'], txt: '1 can (15 oz / 425 g) kidney beans, drained', food: 'black-beans', g: 250 },
        { need: 'black-beans', or: ['kidney-beans'], txt: '1 can (15 oz / 425 g) black beans, drained', food: 'black-beans', g: 250 },
        { need: 'canned-tomatoes', txt: '2 cans (14.5 oz / 411 g each) diced tomatoes', food: 'canned-tomatoes', g: 822 },
        { need: 'onion', txt: '1 onion, diced', food: 'onion', g: 150 },
        { need: 'bell-pepper', optional: true, txt: '1 bell pepper, diced', food: 'bell-pepper', g: 150 },
        { need: 'cheese', optional: true, txt: 'Shredded cheese to top', food: 'cheese', g: 56 },
        { need: 'greek-yogurt', optional: true, txt: 'Greek yogurt to top', food: 'greek-yogurt', g: 113 },
        { staple: true, txt: '1 tbsp avocado oil; 3 tbsp chili powder, 2 tsp cumin, 1 tsp oregano, garlic, salt', food: 'avocado-oil', g: 13.5 }
      ],
      steps: [
        'Cook the onion and pepper in the oil for 5 minutes. Add the turkey and brown it, breaking it up.',
        'Stir in the garlic and spices for 1 minute until fragrant.',
        'Add the tomatoes, beans and 1 cup (240 ml) water. Bring to a boil.',
        'Simmer uncovered 25 to 30 minutes, stirring now and then. Taste for salt. Top with cheese and yogurt.'
      ]
    },
    {
      id: 'beef-broccoli', name: 'Beef and Broccoli', cat: 'Dinner', tag: 'Takeout swap', serves: 4, mins: 25,
      blurb: 'Thin-sliced steak and crisp broccoli in a glossy garlic-soy sauce over rice. The takeout classic, lighter.',
      items: [
        { need: 'steak', txt: '1 1/2 lb (680 g) flank or sirloin steak, thinly sliced', food: 'sirloin', g: 680 },
        { need: 'broccoli', txt: '1 lb (454 g) broccoli florets', food: 'broccoli', g: 454 },
        { need: 'rice', txt: '1 1/2 cups (280 g) dry rice', food: 'white-rice', g: 280 },
        { need: 'soy-sauce', txt: '1/4 cup (60 ml) low-sodium soy sauce', food: 'soy-sauce', g: 64 },
        { need: 'honey', txt: '2 tbsp honey or brown sugar', food: 'honey', g: 42 },
        { staple: true, txt: '1 tbsp avocado oil; 1 tbsp cornstarch; 3 cloves garlic; ginger', food: 'avocado-oil', g: 13.5 }
      ],
      steps: [
        'Start the rice. Toss the steak with half the cornstarch. Whisk the soy sauce, honey, garlic, ginger, the rest of the cornstarch and 1/2 cup (120 ml) water.',
        'Steam or microwave the broccoli 3 minutes until bright green.',
        'Sear the steak in the oil over high heat in two batches, 1 to 2 minutes each. Don\'t crowd the pan.',
        'Add the sauce and broccoli and toss until the sauce thickens, about 1 minute. Serve over rice.'
      ]
    },
    {
      id: 'honey-garlic-salmon', name: 'Honey Garlic Salmon and Asparagus', cat: 'Dinner', tag: 'Sheet pan', serves: 4, mins: 25,
      blurb: 'Sticky honey-garlic glazed salmon roasted on one pan with asparagus. Restaurant flavor in 25 minutes.',
      items: [
        { need: 'salmon', or: ['white-fish'], txt: '1 1/2 lb (680 g) salmon fillets', food: 'salmon', g: 680 },
        { need: 'asparagus', or: ['green-beans', 'broccoli'], txt: '1 lb (454 g) asparagus, trimmed', food: 'asparagus', g: 454 },
        { need: 'honey', txt: '2 tbsp honey', food: 'honey', g: 42 },
        { need: 'soy-sauce', txt: '2 tbsp low-sodium soy sauce', food: 'soy-sauce', g: 32 },
        { need: 'lemon', optional: true, txt: '1 lemon', food: 'lemon-juice', g: 45 },
        { need: 'rice', optional: true, txt: '1 cup (185 g) dry rice to serve', food: 'white-rice', g: 185 },
        { staple: true, txt: '1 tsp avocado oil; 3 cloves garlic, minced; salt and pepper', food: 'avocado-oil', g: 4.5 }
      ],
      steps: [
        'Heat the oven to 400°F (200°C). Whisk the honey, soy sauce, garlic and half the lemon juice.',
        'Lay the salmon and asparagus on a lined sheet pan. Toss the asparagus with oil, salt and pepper.',
        'Brush the glaze over the salmon. Roast 12 to 15 minutes until it flakes and hits 145°F (63°C).',
        'Finish with the rest of the lemon. Serve with rice if you want the carbs.'
      ]
    },
    {
      id: 'turkey-meatballs-pasta', batch: true, name: 'Turkey Meatballs and Marinara Pasta', cat: 'Dinner', tag: 'Family', serves: 4, mins: 35,
      blurb: 'Tender parmesan turkey meatballs baked, then simmered in marinara and served over pasta. Sunday dinner that fits the plan.',
      items: [
        { need: 'ground-turkey', or: ['ground-beef'], txt: '1 1/2 lb (680 g) lean ground turkey', food: 'ground-turkey', g: 680 },
        { need: 'eggs', txt: '1 large egg', food: 'egg', g: 50 },
        { need: 'parmesan', txt: '1/3 cup (33 g) grated parmesan', food: 'parmesan', g: 33 },
        { need: 'oats', optional: true, txt: '1/3 cup (27 g) oats or breadcrumbs', food: 'oats', g: 27 },
        { need: 'marinara', or: ['canned-tomatoes'], txt: '2 cups (500 g) marinara', food: 'marinara', g: 500 },
        { need: 'pasta', or: ['spaghetti-squash'], txt: '8 oz (227 g) dry pasta', food: 'pasta', g: 227 },
        { need: 'spinach', optional: true, txt: '2 cups (60 g) spinach', food: 'spinach', g: 60 },
        { staple: true, txt: 'Garlic, Italian seasoning or oregano, salt and pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Heat the oven to 400°F (200°C). Mix the turkey, egg, parmesan, oats, garlic, seasoning and salt with your hands. Do not overwork it.',
        'Roll into 16 meatballs on a lined sheet pan. Bake 15 to 18 minutes until 165°F (74°C).',
        'Cook the pasta. Warm the marinara in a pan, add the meatballs and spinach, and simmer 5 minutes.',
        'Serve the meatballs and sauce over pasta.'
      ]
    },
    {
      id: 'stuffed-peppers', batch: true, name: 'Turkey Stuffed Peppers', cat: 'Dinner', tag: 'Oven', serves: 4, mins: 50,
      blurb: 'Bell peppers packed with seasoned turkey, rice and tomatoes, baked under melted cheese.',
      items: [
        { need: 'bell-pepper', txt: '4 large bell peppers, tops cut off and seeded', food: 'bell-pepper', g: 800 },
        { need: 'ground-turkey', or: ['ground-beef'], txt: '1 lb (454 g) lean ground turkey', food: 'ground-turkey', g: 454 },
        { need: 'rice', txt: '1/2 cup (93 g) dry rice, cooked', food: 'white-rice', g: 93 },
        { need: 'canned-tomatoes', or: ['marinara', 'salsa'], txt: '1 can (14.5 oz / 411 g) diced tomatoes', food: 'canned-tomatoes', g: 411 },
        { need: 'onion', optional: true, txt: '1/2 onion, diced', food: 'onion', g: 75 },
        { need: 'cheese', optional: true, txt: '1/2 cup (56 g) shredded cheese', food: 'cheese', g: 56 },
        { staple: true, txt: 'Garlic, Italian seasoning or cumin, salt and pepper', food: 'none', g: 0 }
      ],
      steps: [
        'Heat the oven to 375°F (190°C). Stand the peppers in a baking dish.',
        'Brown the turkey and onion with garlic and seasoning. Stir in the cooked rice and half the tomatoes.',
        'Fill the peppers and spoon the rest of the tomatoes over the top. Cover with foil and bake 30 minutes.',
        'Uncover, add the cheese and bake 10 more minutes until bubbly.'
      ]
    },
    {
      id: 'spaghetti-squash-marinara', batch: true, name: 'Spaghetti Squash with Turkey Marinara', cat: 'Dinner', tag: 'Low carb', serves: 4, mins: 55,
      blurb: 'Roasted spaghetti squash strands under a hearty turkey meat sauce and parmesan. Big bowl, light on calories.',
      items: [
        { need: 'spaghetti-squash', or: ['pasta'], txt: '1 large spaghetti squash (about 3 lb / 1.4 kg)', food: 'spaghetti-squash', g: 1000 },
        { need: 'ground-turkey', or: ['ground-beef'], txt: '1 lb (454 g) lean ground turkey', food: 'ground-turkey', g: 454 },
        { need: 'marinara', or: ['canned-tomatoes'], txt: '2 cups (500 g) marinara', food: 'marinara', g: 500 },
        { need: 'parmesan', optional: true, txt: '1/4 cup (25 g) grated parmesan', food: 'parmesan', g: 25 },
        { need: 'spinach', optional: true, txt: '2 cups (60 g) spinach', food: 'spinach', g: 60 },
        { staple: true, txt: '1 tsp avocado oil; garlic, Italian seasoning, salt and pepper', food: 'avocado-oil', g: 4.5 }
      ],
      steps: [
        'Heat the oven to 400°F (200°C). Halve the squash, scoop the seeds, rub with oil and salt, and roast cut side down 35 to 45 minutes.',
        'Meanwhile brown the turkey with garlic and seasoning. Add the marinara and spinach and simmer 10 minutes.',
        'Scrape the squash into strands with a fork.',
        'Top with the meat sauce and parmesan.'
      ]
    },
    {
      id: 'lemon-butter-cod', name: 'Lemon Butter Cod with Potatoes and Green Beans', cat: 'Dinner', tag: 'Lean', serves: 4, mins: 35,
      blurb: 'Flaky white fish baked with lemon, garlic and a little butter, next to roasted potatoes and green beans.',
      items: [
        { need: 'white-fish', or: ['salmon'], txt: '1 1/2 lb (680 g) cod or other white fish', food: 'white-fish', g: 680 },
        { need: 'potatoes', or: ['sweet-potatoes'], txt: '1 1/2 lb (680 g) baby potatoes, halved', food: 'potato', g: 680 },
        { need: 'green-beans', or: ['asparagus', 'broccoli'], txt: '1 lb (454 g) green beans', food: 'green-beans', g: 454 },
        { need: 'lemon', txt: '1 lemon', food: 'lemon-juice', g: 45 },
        { need: 'butter', optional: true, txt: '1 tbsp butter, melted', food: 'butter', g: 14 },
        { staple: true, txt: '1 tbsp avocado oil; garlic, paprika, salt and pepper', food: 'avocado-oil', g: 13.5 }
      ],
      steps: [
        'Heat the oven to 425°F (220°C). Roast the potatoes with half the oil, salt and pepper for 15 minutes.',
        'Add the green beans to the pan with the rest of the oil and roast 5 more minutes.',
        'Nestle in the fish. Mix the butter, lemon juice, garlic and paprika and spoon it over.',
        'Roast 10 to 12 minutes until the fish flakes easily, 145°F (63°C).'
      ]
    },
    {
      id: 'pork-carnitas-tacos', name: 'Quick Pork Tenderloin Carnitas Tacos', cat: 'Dinner', tag: 'Taco night', serves: 4, mins: 40,
      blurb: 'Lean pork tenderloin seared, shredded and crisped with lime and spices. All the carnitas flavor, a fraction of the fat.',
      items: [
        { need: 'pork-tenderloin', txt: '1 1/2 lb (680 g) pork tenderloin', food: 'pork-tenderloin', g: 680 },
        { need: 'tortillas', or: ['flour-tortillas'], txt: '12 small corn tortillas', food: 'corn-tortilla', g: 312 },
        { need: 'onion', txt: '1/2 white onion, finely diced', food: 'onion', g: 75 },
        { need: 'lime', txt: '2 limes', food: 'lime-juice', g: 60 },
        { need: 'cilantro', optional: true, txt: 'Handful of cilantro', food: 'cilantro', g: 15 },
        { need: 'avocado', optional: true, txt: '1/2 avocado, sliced', food: 'avocado', g: 75 },
        { need: 'salsa', optional: true, txt: 'Salsa to serve', food: 'salsa', g: 130 },
        { staple: true, txt: '1 tbsp avocado oil; cumin, oregano, chili powder, garlic, salt', food: 'avocado-oil', g: 13.5 }
      ],
      steps: [
        'Cut the pork into 2-inch (5 cm) chunks and toss with the spices and salt.',
        'Sear in half the oil, then add 1 cup (240 ml) water and the juice of 1 lime. Cover and simmer 25 minutes until tender.',
        'Uncover, boil off the liquid, and shred the pork with two forks. Add the rest of the oil and fry until the edges crisp.',
        'Serve in warm tortillas with onion, cilantro, avocado, salsa and lime.'
      ]
    },
    {
      id: 'protein-pancakes', name: 'Banana Protein Pancakes', cat: 'Breakfast', tag: 'Weekend', serves: 2, mins: 15,
      blurb: 'Blender pancakes made from oats, banana, eggs and protein powder. No flour, no mix, still fluffy.',
      items: [
        { need: 'oats', txt: '1 cup (80 g) rolled oats', food: 'oats', g: 80 },
        { need: 'banana', txt: '1 ripe banana', food: 'banana', g: 118 },
        { need: 'eggs', txt: '2 large eggs', food: 'egg', g: 100 },
        { need: 'protein-powder', txt: '1 scoop (30 g) protein powder', food: 'protein-powder', g: 30 },
        { need: 'milk', txt: '1/2 cup (120 ml) milk', food: 'milk', g: 120 },
        { need: 'berries', optional: true, txt: 'Berries for the top', food: 'berries', g: 75 },
        { staple: true, txt: '1 tsp baking powder, cinnamon, avocado oil spray', food: 'none', g: 0 }
      ],
      steps: [
        'Blend everything except the berries until smooth. Let it sit 5 minutes to thicken.',
        'Heat a nonstick pan over medium-low and spray it.',
        'Pour 1/4 cup (60 ml) per pancake. Flip when bubbles form, about 2 minutes, then 1 more minute.',
        'Stack them up and top with berries.'
      ]
    },
    {
      id: 'breakfast-burritos', batch: true, name: 'Meal Prep Breakfast Burritos', cat: 'Breakfast', tag: 'Freezer friendly', serves: 6, mins: 40,
      blurb: 'Seasoned turkey, eggs, crispy potatoes and cheese, rolled and frozen. Microwave one and you are out the door.',
      items: [
        { need: 'ground-turkey', or: ['ground-beef'], txt: '1 lb (454 g) lean ground turkey', food: 'ground-turkey', g: 454 },
        { need: 'eggs', txt: '6 large eggs', food: 'egg', g: 300 },
        { need: 'egg-whites', optional: true, txt: '1 cup (240 ml) liquid egg whites', food: 'egg-whites', g: 243 },
        { need: 'potatoes', or: ['sweet-potatoes'], txt: '1 lb (454 g) potatoes, diced small', food: 'potato', g: 454 },
        { need: 'flour-tortillas', txt: '6 large (10-inch) flour tortillas', food: 'flour-tortilla', g: 430 },
        { need: 'cheese', optional: true, txt: '3/4 cup (85 g) shredded cheese', food: 'cheese', g: 85 },
        { need: 'salsa', optional: true, txt: '1/2 cup (130 g) salsa', food: 'salsa', g: 130 },
        { staple: true, txt: '1 tbsp avocado oil; chili powder, cumin, salt and pepper', food: 'avocado-oil', g: 13.5 }
      ],
      steps: [
        'Cook the potatoes in the oil over medium-high heat, 12 to 15 minutes, until crisp. Set aside.',
        'Brown the turkey in the same pan with the spices, breaking it up. Set aside.',
        'Scramble the eggs and egg whites low and slow until just set.',
        'Fill each tortilla with turkey, potatoes, eggs, cheese and salsa. Roll tight, wrap in foil and freeze. Reheat 2 to 3 minutes in the microwave, out of the foil.'
      ]
    },
    {
      id: 'lighter-chicken-alfredo', name: 'Lighter Chicken Alfredo', cat: 'Dinner', tag: 'Comfort food', serves: 4, mins: 30,
      blurb: 'Creamy alfredo without the heavy cream. Blended cottage cheese, milk and parmesan make a silky high-protein sauce.',
      items: [
        { need: 'pasta', txt: '8 oz (227 g) dry fettuccine or penne', food: 'pasta', g: 227 },
        { need: 'chicken-breast', or: ['chicken-thighs', 'shrimp'], txt: '1 lb (454 g) chicken breast', food: 'chicken-breast', g: 454 },
        { need: 'cottage-cheese', txt: '1 cup (226 g) cottage cheese', food: 'cottage-cheese', g: 226 },
        { need: 'milk', txt: '1/2 cup (120 ml) milk', food: 'milk', g: 120 },
        { need: 'parmesan', txt: '1/2 cup (50 g) grated parmesan', food: 'parmesan', g: 50 },
        { need: 'broccoli', optional: true, txt: '3 cups (270 g) broccoli florets', food: 'broccoli', g: 270 },
        { staple: true, txt: '1 tsp avocado oil; 3 cloves garlic; salt and lots of black pepper', food: 'avocado-oil', g: 4.5 }
      ],
      steps: [
        'Cook the pasta, adding the broccoli for the last 3 minutes. Save 1/2 cup (120 ml) of pasta water.',
        'Season and sear the chicken in the oil, 6 to 7 minutes a side, to 165°F (74°C). Slice.',
        'Blend the cottage cheese, milk, parmesan and garlic until completely smooth.',
        'Toss the pasta and broccoli with the sauce over low heat, loosening with pasta water. Top with chicken and black pepper.'
      ]
    },
    {
      id: 'cheeseburger-bowls', name: 'Cheeseburger Bowls', cat: 'Dinner', tag: 'Meal prep', serves: 4, mins: 35,
      blurb: 'Everything you love about a burger with fries: lean beef, crispy potatoes, lettuce, tomato, cheese and burger sauce.',
      items: [
        { need: 'ground-beef', or: ['ground-turkey'], txt: '1 1/2 lb (680 g) 93% lean ground beef', food: 'ground-beef', g: 680 },
        { need: 'potatoes', or: ['sweet-potatoes'], txt: '1 1/2 lb (680 g) potatoes, cubed', food: 'potato', g: 680 },
        { need: 'lettuce', txt: '1 head romaine, shredded', food: 'lettuce', g: 300 },
        { need: 'tomatoes', txt: '2 tomatoes, diced', food: 'tomato', g: 246 },
        { need: 'onion', optional: true, txt: '1/2 onion, diced', food: 'onion', g: 75 },
        { need: 'cheese', optional: true, txt: '1/2 cup (56 g) shredded cheddar', food: 'cheese', g: 56 },
        { need: 'greek-yogurt', optional: true, txt: '1/4 cup (57 g) Greek yogurt for the sauce', food: 'greek-yogurt', g: 57 },
        { staple: true, txt: '2 tsp avocado oil; ketchup, mustard, garlic powder, salt and pepper', food: 'avocado-oil', g: 9 }
      ],
      steps: [
        'Heat the oven to 425°F (220°C). Toss the potatoes in the oil, salt and garlic powder and roast 25 to 30 minutes.',
        'Brown the beef and onion, season well, and drain any fat.',
        'Stir the yogurt with 1 tbsp ketchup and 1 tsp mustard for the burger sauce.',
        'Build bowls: lettuce, potatoes, beef, tomato and cheese, then drizzle the sauce.'
      ]
    }
  ]
};
