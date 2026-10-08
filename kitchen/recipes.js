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
    'american-2pct':  { kcal: 237, p: 15.8, f: 13.2, c: 10.5 },  // Kraft Singles 2% Milk: 45 kcal per 19 g slice
    'teriyaki-sf':    { kcal: 33,  p: 6.7,  f: 0,    c: 6.7 },   // G Hughes Sugar Free Sesame Teriyaki: 10 kcal per 2 tbsp (30 g)
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
    'ramen-millet':   { kcal: 343, p: 11.4, f: 4.3,  c: 65.7 },   // Lotus Foods Millet and Brown Rice Ramen: 240 kcal per 70 g cake
    'tonkotsu-broth': { kcal: 58,  p: 2.9,  f: 4.6,  c: 2.1 },    // Kirkland Signature Tonkotsu Pork Ramen Broth: 140 kcal per 240 g portion
    'top-sirloin':    { kcal: 201, p: 20.6, f: 12.9, c: 0 },
    'shallot':        { kcal: 72,  p: 2.5,  f: 0.1,  c: 16.8 },
    'nori':           { kcal: 133, p: 0,    f: 0,    c: 33 },
    'sesame-oil':     { kcal: 884, p: 0,    f: 100,  c: 0 },
    'realgood-tortilla': { kcal: 180, p: 20, f: 8,    c: 32 },
    'beef-bacon':     { kcal: 321, p: 28.6, f: 17.9, c: 0 },
    'potato-bake':    { kcal: 105, p: 3.5,  f: 5.5,  c: 10.5 },
    'tater-tots':     { kcal: 188, p: 2.4,  f: 9.4,  c: 24.7 },   // frozen tots (Ore-Ida: 160 kcal per 9 pieces / 85 g)
    'lm-mozzarella':  { kcal: 286, p: 21.4, f: 21.4, c: 7.1 },
    'whey-isolate':   { kcal: 333, p: 83.3, f: 0,    c: 0 },
    'egg-pasture':    { kcal: 140, p: 12,   f: 10,   c: 0 },
    'wild-blueberries':{ kcal: 57, p: 0,    f: 0,    c: 14 },
    'berry-cream-cheese':{ kcal: 250, p: 5, f: 15,   c: 25 },
    'english-muffin': { kcal: 175, p: 8.8,  f: 1.8,  c: 45.6 },
    'rf-cheese':      { kcal: 238, p: 21.4, f: 14.3, c: 7.1 },
    'chicken-sausage':{ kcal: 188, p: 16.5, f: 11.8, c: 3.5 },
    'fresh-mozzarella': {"kcal": 300, "p": 22.2, "f": 22.4, "c": 2.2},
    'basil': {"kcal": 23, "p": 3.2, "f": 0.6, "c": 2.7},
    'chickpeas': {"kcal": 139, "p": 7.0, "f": 2.5, "c": 22.5},
    'quinoa': {"kcal": 368, "p": 14.1, "f": 6.1, "c": 64.2},
    'lentils': {"kcal": 352, "p": 24.6, "f": 1.1, "c": 63.4},
    'tofu-extra-firm': {"kcal": 91, "p": 10.0, "f": 5.3, "c": 2.2},
    'carrot': {"kcal": 41, "p": 0.9, "f": 0.2, "c": 9.6},
    'tomato-paste': {"kcal": 82, "p": 4.3, "f": 0.5, "c": 18.9},
    'vegetable-broth': {"kcal": 5, "p": 0.1, "f": 0.1, "c": 1.0},
    'cornstarch': {"kcal": 381, "p": 0.3, "f": 0.1, "c": 91.3},
    'cream-cheese': {"kcal": 342, "p": 5.9, "f": 34.2, "c": 4.1},
    'heavy-cream': {"kcal": 340, "p": 2.8, "f": 36.1, "c": 2.7},
    'sun-dried-tomatoes': {"kcal": 213, "p": 5.1, "f": 14.1, "c": 23.3},
    'cauliflower': {"kcal": 25, "p": 1.9, "f": 0.3, "c": 5},
    'provolone': {"kcal": 351, "p": 25.6, "f": 26.6, "c": 2.1},
    'marinara-no-sugar': {"kcal": 80, "p": 1.6, "f": 5.6, "c": 4.8},
    'chicken-broth': {"kcal": 15, "p": 2, "f": 0.5, "c": 0.4},
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
    {"id": "tofu", "name": "Extra-firm tofu", "group": "Plant protein", "alias": ["tofu", "firm tofu"]},
    {"id": "chickpeas", "name": "Chickpeas", "group": "Plant protein", "alias": ["garbanzo beans"]},
    {"id": "lentils", "name": "Lentils", "group": "Plant protein", "alias": ["red lentils", "brown lentils", "green lentils"]},
    {"id": "fresh-mozzarella", "name": "Fresh mozzarella", "group": "Eggs and dairy", "alias": ["mozzarella pearls", "ciliegine", "bocconcini"]},
    {"id": "heavy-cream", "name": "Heavy cream", "group": "Eggs and dairy", "alias": ["heavy whipping cream", "whipping cream"]},
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
    {"id": "quinoa", "name": "Quinoa", "group": "Carbs", "alias": []},
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
    {"id": "carrots", "name": "Carrots", "group": "Vegetables", "alias": ["carrot"]},
    {"id": "cauliflower-rice", "name": "Riced cauliflower", "group": "Vegetables", "alias": ["cauliflower rice", "cauliflower"]},
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
    {"id": "basil", "name": "Fresh basil", "group": "Fruit and fresh", "alias": ["basil"]},
    {"id": "dill", "name": "Fresh dill", "group": "Fruit and fresh", "alias": ["dill"]},
    { id: 'green-onions', name: 'Green onions', group: 'Fruit and fresh', alias: ['scallions', 'scallion', 'green onion', 'onion'] },
    { id: 'ginger', name: 'Fresh ginger', group: 'Fruit and fresh', alias: ['ginger root'] },
    { id: 'cilantro', name: 'Cilantro', group: 'Fruit and fresh', alias: [] },
    { id: 'lime', name: 'Limes', group: 'Fruit and fresh', alias: ['lime'] },
    { id: 'lemon', name: 'Lemons', group: 'Fruit and fresh', alias: ['lemon'] },
    { id: 'avocado', name: 'Avocado', group: 'Fruit and fresh', alias: ['avocados'] },
    { id: 'banana', name: 'Bananas', group: 'Fruit and fresh', alias: ['banana'] },
    { id: 'berries', name: 'Berries', group: 'Fruit and fresh', alias: ['blueberries', 'strawberries', 'raspberries'] },
    {"id": "tomato-paste", "name": "Tomato paste", "group": "Sauces and pantry", "alias": []},
    {"id": "sun-dried-tomatoes", "name": "Sun-dried tomatoes", "group": "Sauces and pantry", "alias": ["sundried tomatoes", "sun dried tomatoes"]},
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
      id: 'protein-blueberry-pancakes', lvl: 4, veg: true, name: 'Protein Blueberry Pancakes', by: 'bryan', cat: 'Breakfast', tag: 'Weekend', serves: 1, mins: 20,
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
      id: 'steak-breakfast-burrito', lvl: 4, name: 'Steak Breakfast Burrito', by: 'bryan', cat: 'Breakfast', tag: 'Big breakfast', serves: 1, mins: 25,
      photos: ['/kitchen/img/steak-breakfast-burrito.jpg'],
      blurb: 'Seared top sirloin, beef bacon, a scrambled egg, crispy air-fried tater tots and melted mozzarella, wrapped in a high-protein tortilla and crisped in the pan. About 40 grams of protein before 9 a.m.',
      items: [
        { need: 'flour-tortillas', txt: '1 Real Good burrito tortilla', food: 'realgood-tortilla', g: 50 },
        { need: 'steak', txt: '2 3/4 oz (78 g) top sirloin steak', food: 'top-sirloin', g: 78 },
        { need: 'eggs', txt: '1 large organic egg', food: 'egg', g: 50 },
        { need: 'bacon', optional: true, txt: '2 slices beef bacon', food: 'beef-bacon', g: 28 },
        { need: 'potatoes', txt: '8 frozen tater tots (about 2 3/4 oz / 76 g), air fried', food: 'tater-tots', g: 76 },
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
      id: 'steak-tonkotsu-ramen', lvl: 5, name: 'Steak Tonkotsu Ramen', by: 'bryan', cat: 'Dinner', tag: 'Ramen night', serves: 1, mins: 30,
      photos: ['/kitchen/img/steak-tonkotsu-ramen.jpg', '/kitchen/img/steak-tonkotsu-ramen-side.jpg'],
      blurb: 'Rich, creamy tonkotsu broth over millet and brown rice ramen, loaded with seared top sirloin, a jammy soft egg, charred corn, roasted mushrooms, crispy shallots and nori. A real ramen-shop bowl with 52 grams of protein.',
      items: [
        { need: 'steak', txt: '6 oz (170 g) beef top sirloin steak', food: 'top-sirloin', g: 170 },
        { need: 'ramen-noodles', or: ['pasta'], txt: '1/2 cake (about 1 1/4 oz / 35 g) Lotus Foods Millet and Brown Rice Ramen noodles', food: 'ramen-millet', g: 35 },
        { need: 'broth', txt: '1 portion Kirkland Signature Tonkotsu Pork Ramen Broth (Costco), about 1 cup (240 ml)', food: 'tonkotsu-broth', g: 240 },
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
      id: 'tropic-fire-chicken', lvl: 4, keto: true, batch: true, name: 'Tropic Fire Grilled Chicken', by: 'bryan', cat: 'Dinner', tag: '24-hour marinade', serves: 4, mins: 30,
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
      id: 'power-protein-bowl', lvl: 2, name: 'Power Protein Bowl', by: 'bryan', cat: 'Dinner', tag: 'Meal prep', serves: 1, mins: 35,
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
      id: 'carne-asada-tacos', lvl: 3, name: 'Carne Asada Tacos', by: 'bryan', cat: 'Dinner', tag: 'Taco night', serves: 1, mins: 25,
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
      id: 'cheeseburger-rice-paper-rolls', lvl: 4, name: 'Air-Fried Cheeseburger Rice Paper Rolls', by: 'bryan', cat: 'Dinner', tag: 'Air fryer', serves: 1, mins: 30,
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
      id: 'teriyaki-chicken-bowl', lvl: 3, name: 'Teriyaki Chicken and Rice Bowl', by: 'bryan', cat: 'Lunch', tag: 'High protein', serves: 1, mins: 30,
      photos: ['/kitchen/img/teriyaki-chicken-bowl.jpg'],
      blurb: 'A big bowl of charred, sticky sesame teriyaki chicken over white rice with a pile of green onions. Nearly 100 grams of protein. Split it in two for a pair of 380-calorie lunches.',
      items: [
        { need: 'chicken-breast', or: ['chicken-thighs'], txt: '11 oz (308 g) grilled chicken breast, cooked weight (about 15 oz / 425 g raw)', food: 'chicken-breast-grilled', g: 308 },
        { need: 'rice', txt: '8 oz (225 g) cooked white rice, about 1 1/4 cups', food: 'white-rice-cooked', g: 225 },
        { need: 'teriyaki-sauce', or: ['soy-sauce'], txt: '2 tbsp G Hughes Sugar Free Sesame Teriyaki (or any sugar-free teriyaki)', food: 'teriyaki-sf', g: 30 },
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
      id: 'cabbage-enchiladas', lvl: 4, keto: true, batch: true, name: 'Cabbage-Wrapped Shredded Chicken Enchiladas', by: 'bryan', cat: 'Dinner', tag: 'Low carb', serves: 8, mins: 60,
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
      id: 'double-cheeseburger', lvl: 4, name: 'Macro-Friendly Double Cheeseburger and Fries', by: 'bryan', cat: 'Dinner', tag: 'Burger night', serves: 1, mins: 20,
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
      id: 'cajun-cacio-pasta', lvl: 3, name: 'Grilled Cajun Chicken Cacio e Pepe Protein Pasta', by: 'bryan', cat: 'Dinner', tag: 'High protein', serves: 2, mins: 30,
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
      id: 'chicken-crust-pizza', lvl: 5, name: "Deluxe Chicken Crust Pizza", by: 'bryan', cat: 'Dinner', tag: 'High protein', serves: 4, mins: 45,
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
    {"id": "turkey-sausage-mcmuffins", "lvl": 2, "photos": ["/kitchen/img/turkey-sausage-mcmuffins.jpg"], "name": "High-Protein Turkey Sausage Egg McMuffins", "cat": "Breakfast", "tag": "Freezer friendly", "serves": 8, "mins": 40, "blurb": "The drive-thru classic, rebuilt lean. Homemade sage turkey sausage, a fluffy egg white round and a melty slice of 2% American on a toasted light English muffin. Make 8 on Sunday, grab one every morning. About 320 calories and 34 grams of protein each.", "items": [{"need": "ground-turkey", "or": ["chicken-sausage"], "txt": "1 1/2 lb (680 g) 93% lean ground turkey", "food": "ground-turkey", "g": 680}, {"need": "egg-whites", "or": ["eggs"], "txt": "3 cups (720 ml) Egg Beaters 100% Egg Whites (about 6 tbsp per sandwich)", "food": "egg-whites", "g": 735}, {"need": "english-muffins", "txt": "8 light multigrain English muffins (about 100 calories each)", "food": "english-muffin", "g": 456}, {"need": "cheese", "txt": "8 slices Kraft Singles 2% Milk American cheese", "food": "american-2pct", "g": 152}, {"staple": true, "txt": "Sausage seasoning: 1 tsp dried sage, 1 tsp salt, 1/2 tsp each black pepper, garlic powder and crushed fennel seed, 1/4 tsp each smoked paprika and red pepper flakes", "food": "none", "g": 0}, {"staple": true, "txt": "Avocado oil spray", "food": "none", "g": 0}], "batch": true},
    {"id": "shredded-salsa-chicken", "lvl": 1, "photos": ["/kitchen/img/shredded-salsa-chicken.jpg"], "name": "Shredded Salsa Chicken", "cat": "Lunch", "tag": "Set it and forget it", "serves": 8, "mins": 20, "blurb": "Three pounds of chicken and a jar of salsa, cooked low and slow until it shreds with a fork. One batch covers bowls, tacos, wraps and salads all week. About 40 grams of protein per serving for around 230 calories.", "items": [{"need": "chicken-breast", "or": ["chicken-thighs"], "txt": "3 lb (1.36 kg) boneless, skinless chicken breasts", "food": "chicken-breast", "g": 1360}, {"need": "salsa", "or": ["salsa-verde"], "txt": "2 cups (16 oz / 520 g) salsa, any heat level", "food": "salsa", "g": 520}, {"need": "taco-seasoning", "optional": true, "txt": "1 tbsp taco seasoning (or 1 tsp each chili powder and cumin)", "food": "taco-seasoning", "g": 8}, {"need": "lime", "optional": true, "txt": "1 lime, juiced", "food": "none", "g": 0}, {"staple": true, "txt": "1/2 tsp salt", "food": "none", "g": 0}], "batch": true},
    {"id": "egg-roll-in-a-bowl", "lvl": 2, "photos": ["/kitchen/img/egg-roll-in-a-bowl.jpg"], "keto": true, "name": "Egg Roll in a Bowl", "cat": "Dinner", "tag": "20 minutes", "serves": 4, "mins": 20, "blurb": "Everything you love about an egg roll without the wrapper. Ground turkey, crunchy cabbage slaw, ginger, garlic and soy, all in one skillet in 20 minutes. Low carb, high protein, and it reheats perfectly.", "items": [{"need": "ground-turkey", "or": ["ground-beef", "ground-chicken"], "txt": "1 1/2 lb (680 g) 93% lean ground turkey", "food": "ground-turkey", "g": 680}, {"need": "coleslaw-mix", "or": ["cabbage"], "txt": "1 bag (14 oz / 400 g) coleslaw mix", "food": "cabbage", "g": 400}, {"need": "soy-sauce", "txt": "3 tbsp (45 ml) low-sodium soy sauce", "food": "soy-sauce", "g": 48}, {"need": "green-onions", "optional": true, "txt": "4 green onions, sliced, whites and greens kept separate", "food": "green-onion", "g": 30}, {"need": "ginger", "optional": true, "txt": "1 tbsp fresh ginger, grated (or 1/2 tsp ground)", "food": "none", "g": 0}, {"need": "sesame-oil", "optional": true, "txt": "1 tsp toasted sesame oil", "food": "sesame-oil", "g": 4.5}, {"need": "hot-sauce", "optional": true, "txt": "Sriracha to finish", "food": "none", "g": 0}, {"staple": true, "txt": "1 tsp avocado oil; 3 cloves garlic, minced", "food": "avocado-oil", "g": 4.5}], "batch": true},
    {"id": "sheet-pan-chicken-sausage", "lvl": 2, "photos": ["/kitchen/img/sheet-pan-chicken-sausage.jpg"], "name": "Sheet Pan Chicken Sausage, Peppers and Potatoes", "cat": "Dinner", "tag": "Sheet pan", "serves": 4, "mins": 40, "blurb": "Browned chicken sausage, crispy potatoes and sweet roasted peppers and onions, all on one pan. Minimal chopping, one pan to wash, and four containers ready for the week.", "items": [{"need": "chicken-sausage", "txt": "1 lb (454 g) fully cooked chicken sausage, 5 to 6 links", "food": "chicken-sausage", "g": 454}, {"need": "potatoes", "or": ["sweet-potatoes"], "txt": "1 lb (454 g) baby potatoes", "food": "potato", "g": 454}, {"need": "bell-pepper", "txt": "2 bell peppers, any color", "food": "bell-pepper", "g": 300}, {"need": "onion", "txt": "1 red onion", "food": "onion", "g": 150}, {"staple": true, "txt": "1 tbsp avocado oil; 1 tsp each Italian seasoning or oregano, garlic powder and paprika; 1/2 tsp salt; black pepper", "food": "avocado-oil", "g": 13.5}], "batch": true},
    {"id": "protein-breakfast-casserole", "lvl": 2, "photos": ["/kitchen/img/breakfast-casserole.jpg"], "name": "High-Protein Breakfast Casserole", "cat": "Breakfast", "tag": "Meal prep", "serves": 8, "mins": 55, "blurb": "A whole week of breakfast in one 9 x 13 dish. Homemade turkey sausage, eggs, egg whites, cottage cheese, crispy potatoes, spinach and peppers under a layer of reduced-fat cheddar. Cut, box and reheat in a minute.", "items": [{"need": "ground-turkey", "or": ["chicken-sausage"], "txt": "1 lb (454 g) 93% lean ground turkey", "food": "ground-turkey", "g": 454}, {"need": "eggs", "txt": "10 large eggs", "food": "egg", "g": 500}, {"need": "egg-whites", "optional": true, "txt": "2 cups (480 ml) liquid egg whites", "food": "egg-whites", "g": 486}, {"need": "cottage-cheese", "or": ["greek-yogurt"], "txt": "1 cup (8 oz / 226 g) low-fat cottage cheese", "food": "cottage-cheese", "g": 226}, {"need": "potatoes", "or": ["sweet-potatoes"], "txt": "1 lb (454 g) potatoes, diced small (or frozen diced hash browns, thawed)", "food": "potato", "g": 454}, {"need": "spinach", "optional": true, "txt": "2 packed cups (60 g) baby spinach, roughly chopped", "food": "spinach", "g": 60}, {"need": "bell-pepper", "optional": true, "txt": "1 bell pepper, diced", "food": "bell-pepper", "g": 150}, {"need": "cheese", "txt": "1 cup (4 oz / 113 g) reduced-fat shredded cheddar", "food": "rf-cheese", "g": 113}, {"staple": true, "txt": "Sausage seasoning: 1 tsp dried sage, 1 tsp salt, 1/2 tsp each black pepper, garlic powder and crushed fennel seed, 1/4 tsp each smoked paprika and red pepper flakes", "food": "none", "g": 0}, {"staple": true, "txt": "Avocado oil spray; salt and pepper", "food": "none", "g": 0}], "batch": true},
    {"id": "caprese-egg-bites", "lvl": 2, "photos": ["/kitchen/img/caprese-egg-bites.jpg"], "name": "Caprese Egg Bites", "cat": "Breakfast", "tag": "Grab and go", "serves": 4, "mins": 30, "veg": true, "batch": true, "blurb": "Silky, cafe-style egg bites loaded with sweet cherry tomatoes, fresh basil and melty pockets of mozzarella. Bake a dozen on Sunday and grab three on the way out the door for about 29 g of protein.", "items": [{"need": "eggs", "txt": "8 large eggs", "food": "egg", "g": 400}, {"need": "egg-whites", "txt": "1 cup (240 ml) liquid egg whites", "food": "egg-whites", "g": 240}, {"need": "cottage-cheese", "or": ["greek-yogurt"], "txt": "1/2 cup (113 g) low-fat cottage cheese", "food": "cottage-cheese", "g": 113}, {"need": "fresh-mozzarella", "or": ["cheese"], "txt": "4 oz (113 g) fresh mozzarella pearls, or a ball cut into 1/2 inch (1 cm) cubes", "food": "fresh-mozzarella", "g": 113}, {"need": "tomatoes", "txt": "1 cup (150 g) cherry tomatoes, quartered", "food": "tomato", "g": 150}, {"need": "basil", "optional": true, "txt": "1 small handful (10 g) fresh basil, sliced thin, plus extra leaves to finish", "food": "basil", "g": 10}, {"staple": true, "txt": "Avocado oil spray for the tin; 1/2 tsp salt, 1/4 tsp pepper, 1/2 tsp garlic powder", "food": "avocado-oil", "g": 2}], "steps": ["Set an oven rack in the middle and preheat the oven to 350°F (175°C). Quarter the cherry tomatoes and pat them dry with a paper towel so they do not water down the eggs. Slice the basil into thin ribbons and cut a mozzarella ball into 1/2 inch (1 cm) cubes if you are not using pearls. Spray every cup of a standard 12-cup muffin tin generously with avocado oil spray, sides included.", "Add the 8 eggs, 1 cup (240 ml) egg whites, 1/2 cup (113 g) cottage cheese, salt, pepper and garlic powder to a blender. Blend on high for 20 to 30 seconds until completely smooth and slightly foamy, with no curds left. This is what gives you the soft, velvety coffee-shop texture.", "Divide the tomatoes, mozzarella and sliced basil evenly among the 12 cups. Pour the egg mixture over the top, filling each cup about three quarters full; a large measuring cup with a spout makes this easy.", "Bake on the middle rack for 20 to 22 minutes, until the edges are set and the centers no longer jiggle when you nudge the pan but still look soft, not browned or cracked. They will puff up in the oven and settle as they cool.", "Let the tin rest on the counter for 5 minutes. Run a thin knife or butter knife around each bite and lift it out. Top with a fresh basil leaf if you like.", "Serve 3 bites per person warm. Cool completely, then store in a sealed container lined with a paper towel for up to 4 days in the fridge, or freeze on a tray and bag them for up to 2 months. Reheat 30 to 45 seconds in the microwave from the fridge, or 60 to 90 seconds from frozen."]},
    {"id": "black-bean-sweet-potato-chili", "lvl": 2, "photos": ["/kitchen/img/black-bean-sweet-potato-chili.jpg"], "name": "Black Bean and Sweet Potato Chili", "cat": "Dinner", "tag": "Freezer friendly", "serves": 6, "mins": 50, "veg": true, "batch": true, "blurb": "A thick, smoky, one-pot chili built on black beans, red lentils and tender sweet potato, finished with a cool Greek yogurt topping and sharp cheddar. Big batch, freezes like a dream, and each bowl lands around 29 g of protein.", "items": [{"need": "black-beans", "or": ["kidney-beans"], "txt": "3 cans (15 oz / 425 g each) black beans, drained and rinsed", "food": "black-beans", "g": 720}, {"need": "lentils", "txt": "1 cup (190 g) dry red lentils, rinsed", "food": "lentils", "g": 190}, {"need": "sweet-potatoes", "txt": "1 large sweet potato (1 lb / 450 g), peeled and cut into 1/2 inch (1 cm) cubes", "food": "sweet-potato", "g": 450}, {"need": "canned-tomatoes", "txt": "1 can (28 oz / 794 g) crushed or diced tomatoes", "food": "canned-tomatoes", "g": 794}, {"need": "onion", "txt": "1 medium onion, diced", "food": "onion", "g": 150}, {"need": "bell-pepper", "txt": "1 bell pepper, diced", "food": "bell-pepper", "g": 150}, {"need": "broth", "txt": "3 cups (720 ml) vegetable broth", "food": "vegetable-broth", "g": 720}, {"need": "greek-yogurt", "txt": "1 1/2 cups (360 g) plain nonfat Greek yogurt, for topping", "food": "greek-yogurt", "g": 360}, {"need": "cheese", "txt": "3 oz (85 g) shredded cheddar, for topping", "food": "cheese", "g": 85}, {"need": "cilantro", "optional": true, "txt": "Chopped cilantro to finish", "food": "none", "g": 0}, {"need": "lime", "optional": true, "txt": "1 lime, cut into wedges", "food": "none", "g": 0}, {"staple": true, "txt": "1 tbsp (15 ml) avocado oil; 4 cloves garlic, minced; 2 tbsp chili powder, 2 tsp cumin, 1 tsp smoked paprika, 1 tsp oregano; 1 1/2 tsp salt", "food": "avocado-oil", "g": 14}], "steps": ["Dice the onion and bell pepper into 1/2 inch (1 cm) pieces, and peel and cube the sweet potato the same size so it cooks evenly. Mince the 4 garlic cloves. Drain and rinse the black beans, and rinse the red lentils in a strainer until the water runs mostly clear. Measure the spices into a small bowl.", "Heat the 1 tbsp (15 ml) avocado oil in a large Dutch oven or 6 quart (5.7 L) heavy pot over medium heat until it shimmers. Add the onion and bell pepper with a pinch of salt and cook 5 to 6 minutes, stirring now and then, until soft and the onion looks translucent (see-through at the edges).", "Add the garlic and all the spices and stir constantly for 45 to 60 seconds. Blooming means toasting spices in the hot oil so their flavor wakes up; you will smell it get deep and smoky. Do not walk away or the spices can scorch.", "Add the sweet potato, lentils, black beans, tomatoes, broth and the remaining salt and stir, scraping up anything stuck to the bottom. Bring to a boil over high heat, then lower to medium-low so it simmers, meaning small, lazy bubbles break the surface. Cover partway and cook 25 to 30 minutes, stirring every 5 to 10 minutes, until the sweet potato is fork-tender and the lentils have melted into a thick base.", "If it is too thick, splash in more broth or water; if too thin, simmer uncovered 5 more minutes. Taste and add more salt or chili powder as needed. A squeeze of lime brightens it up.", "Ladle into 6 bowls, about 1 1/2 cups each, and top each with 1/4 cup (60 g) Greek yogurt, 1/2 oz (14 g) cheddar and cilantro. Keep the chili in sealed containers for up to 5 days in the fridge, or freeze in portions for up to 3 months. Thaw overnight in the fridge and reheat in a pot over medium heat or 2 to 3 minutes in the microwave, stirring halfway; add the toppings after reheating."]},
    {"id": "cottage-cheese-protein-pizza", "lvl": 4, "name": "Cottage Cheese Protein Pizza", "cat": "Dinner", "tag": "Pizza night", "serves": 2, "mins": 50, "veg": true, "batch": false, "blurb": "A thin, crispy, golden crust made from just blended cottage cheese, eggs and a little cheese, loaded with marinara, mozzarella and roasted veggies. Real pizza-night energy with about 34 g of protein per half.", "items": [{"need": "cottage-cheese", "txt": "1 cup (226 g) cottage cheese", "food": "cottage-cheese", "g": 226}, {"need": "eggs", "txt": "2 large eggs", "food": "egg", "g": 100}, {"need": "parmesan", "txt": "2 tbsp (10 g) grated parmesan", "food": "parmesan", "g": 10}, {"need": "cheese", "txt": "1 cup (112 g) shredded low-moisture mozzarella, divided (1/2 cup crust, 1/2 cup topping)", "food": "lm-mozzarella", "g": 112}, {"need": "marinara", "txt": "1/4 cup (62 g) marinara or pizza sauce", "food": "marinara", "g": 62}, {"need": "bell-pepper", "txt": "1/3 bell pepper, thinly sliced", "food": "bell-pepper", "g": 50}, {"need": "mushrooms", "optional": true, "txt": "3 to 4 mushrooms (50 g), thinly sliced", "food": "mushrooms", "g": 50}, {"need": "onion", "optional": true, "txt": "1/4 small onion (30 g), thinly sliced", "food": "onion", "g": 30}, {"need": "spinach", "optional": true, "txt": "1 handful (30 g) baby spinach", "food": "spinach", "g": 30}, {"need": "basil", "optional": true, "txt": "Fresh basil leaves to finish", "food": "none", "g": 0}, {"staple": true, "txt": "Avocado oil spray; 1 tsp oregano, 1/2 tsp garlic powder, pinch of salt, red pepper flakes optional", "food": "avocado-oil", "g": 2}], "steps": ["Preheat the oven to 375°F (190°C) with a rack in the middle. Line a large rimmed baking sheet, about 13x18 inch (33x46 cm), with parchment paper and spray the parchment well with avocado oil spray. Thinly slice the bell pepper, mushrooms and onion, and measure out the sauce and cheeses.", "Add the 1 cup (226 g) cottage cheese, 2 eggs, 2 tbsp (10 g) parmesan, 1/2 cup (56 g) of the mozzarella, the oregano, garlic powder and salt to a blender. Blend 20 to 30 seconds until completely smooth, like a thick pancake batter.", "Pour the batter onto the parchment and spread it with a spatula into a thin, even 11 to 12 inch (28 to 30 cm) circle or rectangle, about 1/4 inch (6 mm) thick. Bake 30 to 35 minutes, until the whole surface is deep golden, dry to the touch and the edges are browned. If the center is still pale or tacky, give it 5 more minutes; this is what makes it crispy instead of eggy.", "While the crust bakes, spray a small skillet with avocado oil and set it over medium-high heat. Cook the pepper, mushrooms and onion for 4 to 5 minutes until softened and lightly browned and the mushrooms have released their water, then toss in the spinach for 30 seconds until just wilted.", "Spread the 1/4 cup (62 g) sauce over the baked crust, leaving a thin border. Scatter the cooked veggies and the remaining 1/2 cup (56 g) mozzarella on top. Bake 8 to 10 more minutes until the cheese is melted and bubbling in spots; switch to broil (top heating element on high) for the last 1 to 2 minutes for browned cheese, watching it closely.", "Let it rest 3 to 5 minutes so the crust firms up, then slide it onto a cutting board, top with basil and red pepper flakes, and cut into 6 slices. Each person gets half. Leftovers keep 2 days in the fridge and re-crisp best in an air fryer or oven at 375°F (190°C) for 4 to 5 minutes."]},
    {"id": "veggie-egg-white-frittata", "lvl": 2, "photos": ["/kitchen/img/veggie-egg-white-frittata.jpg"], "name": "Veggie Egg White Frittata", "cat": "Breakfast", "tag": "Sheet pan", "serves": 6, "mins": 40, "veg": true, "batch": true, "blurb": "A fluffy, sliceable sheet pan frittata packed with spinach, sweet peppers, salty feta and creamy cottage cheese. One pan makes a week of breakfasts at roughly 30 g of protein and under 250 calories a square.", "items": [{"need": "egg-whites", "txt": "4 cups (960 ml) liquid egg whites", "food": "egg-whites", "g": 960}, {"need": "eggs", "txt": "4 large eggs", "food": "egg", "g": 200}, {"need": "cottage-cheese", "txt": "1 cup (226 g) low-fat cottage cheese", "food": "cottage-cheese", "g": 226}, {"need": "feta", "txt": "4 oz (113 g) crumbled feta", "food": "feta", "g": 113}, {"need": "spinach", "txt": "5 oz (142 g) baby spinach, roughly chopped", "food": "spinach", "g": 142}, {"need": "bell-pepper", "txt": "2 bell peppers, diced", "food": "bell-pepper", "g": 300}, {"need": "onion", "txt": "1/2 medium onion, diced", "food": "onion", "g": 75}, {"need": "green-onions", "optional": true, "txt": "2 green onions, sliced, to finish", "food": "none", "g": 0}, {"need": "hot-sauce", "optional": true, "txt": "Hot sauce to serve", "food": "none", "g": 0}, {"staple": true, "txt": "1 tsp avocado oil plus avocado oil spray; 2 cloves garlic, minced; 1 tsp salt, 1/2 tsp pepper, 1/2 tsp oregano, 1/2 tsp paprika", "food": "avocado-oil", "g": 7}], "steps": ["Preheat the oven to 375°F (190°C) with a rack in the middle. Dice the bell peppers and onion into 1/4 inch (6 mm) pieces, mince the garlic and roughly chop the spinach. Line a 9x13 inch (23x33 cm) rimmed baking pan or quarter sheet pan with parchment, letting it hang over the long sides, and spray it with avocado oil spray.", "Heat the 1 tsp avocado oil in a 12 inch (30 cm) skillet over medium-high heat. Saute (cook while stirring often) the peppers and onion 4 to 5 minutes until softened, then add the garlic and spinach and stir 1 to 2 minutes until the spinach wilts and any liquid cooks off. Spread the veggies evenly in the lined pan.", "In a large bowl, whisk the 4 cups (960 ml) egg whites, 4 eggs, 1 cup (226 g) cottage cheese, salt, pepper, oregano and paprika for 30 seconds until well combined; a few small curds are fine. Pour it over the veggies and scatter the feta evenly over the top.", "Bake 22 to 28 minutes, until the center is set and springs back when lightly pressed and a knife poked in the middle comes out clean, with no wet egg. The edges will be lightly golden and pulling away from the pan.", "Let it cool in the pan for 10 minutes, then use the parchment to lift it onto a cutting board. Cut into 6 large squares and sprinkle with green onions.", "Serve warm with hot sauce, or pack each square into a container. It keeps 4 days in the fridge, or wrap squares individually and freeze up to 2 months. Reheat 45 to 60 seconds in the microwave from the fridge, or 1 1/2 to 2 minutes from frozen, covered with a damp paper towel."]},
    {"id": "greek-chickpea-feta-bowls", "lvl": 3, "photos": ["/kitchen/img/greek-chickpea-feta-bowls.jpg"], "name": "Greek Chickpea and Feta Bowls", "cat": "Lunch", "tag": "Meal prep", "serves": 4, "mins": 40, "veg": true, "batch": true, "blurb": "Crunchy oven-roasted chickpeas over fluffy quinoa with cucumber, tomato, feta and a thick, garlicky homemade Greek yogurt tzatziki. Fresh, filling and built for meal prep at about 27 g of protein a bowl.", "items": [{"need": "chickpeas", "txt": "2 cans (15 oz / 425 g each) chickpeas, drained, rinsed and patted dry", "food": "chickpeas", "g": 480}, {"need": "quinoa", "or": ["rice"], "txt": "3/4 cup (128 g) dry quinoa, rinsed", "food": "quinoa", "g": 128}, {"need": "greek-yogurt", "txt": "1 1/2 cups (340 g) plain nonfat Greek yogurt", "food": "greek-yogurt", "g": 340}, {"need": "cucumber", "txt": "1 large cucumber, half grated, half diced", "food": "cucumber", "g": 300}, {"need": "tomatoes", "txt": "2 cups (300 g) cherry tomatoes, halved", "food": "tomato", "g": 300}, {"need": "feta", "txt": "4 oz (113 g) crumbled feta", "food": "feta", "g": 113}, {"need": "lemon", "txt": "1 lemon, juiced (about 2 tbsp / 30 ml)", "food": "lemon-juice", "g": 30}, {"need": "onion", "optional": true, "txt": "1/4 red onion, thinly sliced", "food": "onion", "g": 50}, {"need": "olives", "optional": true, "txt": "1/4 cup (40 g) sliced olives", "food": "olives", "g": 40}, {"staple": true, "txt": "1 tbsp (15 ml) avocado oil; 2 cloves garlic, grated; 1 tsp oregano, 1 tsp paprika, 1/2 tsp cumin; 1 1/4 tsp salt, pepper", "food": "avocado-oil", "g": 14}], "steps": ["Preheat the oven to 425°F (220°C) and line a large rimmed baking sheet with parchment. Drain and rinse the chickpeas, then roll them in a clean kitchen towel to dry them well and let any loose skins fall off. Halve the tomatoes, thinly slice the red onion, and juice the lemon. Grate half the cucumber on the large holes of a box grater and dice the other half into 1/2 inch (1 cm) pieces.", "Toss the dry chickpeas on the baking sheet with the 1 tbsp (15 ml) avocado oil, paprika, cumin, half the oregano and 1/2 tsp salt, and spread them in a single layer. Roast 25 to 30 minutes, shaking the pan halfway, until golden brown and crisp on the outside.", "While the chickpeas roast, rinse the quinoa in a fine strainer to remove its bitter coating. Add it to a small saucepan with 1 1/2 cups (360 ml) water and a pinch of salt, bring to a boil, then cover, lower the heat to low and cook 15 minutes until the water is absorbed. Take it off the heat, keep covered 5 minutes, then fluff with a fork.", "Squeeze the grated cucumber hard in your hands or a towel to remove as much water as possible. Stir it into the 1 1/2 cups (340 g) Greek yogurt with the grated garlic, half the lemon juice, the rest of the oregano, 1/2 tsp salt and some pepper. Tzatziki is a cool Greek yogurt and cucumber sauce; it should be thick enough to hold its shape on a spoon.", "Toss the diced cucumber, tomatoes and red onion with the remaining lemon juice and a pinch of salt. Divide the quinoa among 4 bowls or containers and top each with the chopped salad, a quarter of the chickpeas, feta, olives and a big scoop of tzatziki.", "Eat right away for the crunchiest chickpeas. For meal prep, keep the tzatziki and chickpeas in separate small containers and the bowls in the fridge for up to 4 days. Do not freeze; to re-crisp the chickpeas, air fry or bake at 400°F (205°C) for 3 to 4 minutes."]},
    {"id": "lentil-bolognese", "lvl": 2, "photos": ["/kitchen/img/lentil-bolognese.jpg"], "name": "Lentil Bolognese over Protein Pasta", "cat": "Dinner", "tag": "Comfort food", "serves": 6, "mins": 50, "veg": true, "batch": true, "blurb": "A rich, slow-simmered tasting bolognese where hearty lentils and mushrooms stand in for the meat, served over high-protein pasta with a shower of parmesan. Pure comfort food that delivers about 25 g of protein a plate.", "items": [{"need": "lentils", "txt": "1 1/4 cups (240 g) dry brown or green lentils, rinsed", "food": "lentils", "g": 240}, {"need": "pasta", "txt": "12 oz (340 g) high-protein pasta, such as Barilla Protein+", "food": "protein-pasta", "g": 340}, {"need": "canned-tomatoes", "or": ["marinara"], "txt": "1 can (28 oz / 794 g) crushed tomatoes", "food": "canned-tomatoes", "g": 794}, {"need": "tomato-paste", "txt": "2 tbsp (32 g) tomato paste", "food": "tomato-paste", "g": 32}, {"need": "mushrooms", "txt": "8 oz (227 g) cremini or white mushrooms, finely chopped", "food": "mushrooms", "g": 227}, {"need": "onion", "txt": "1 medium onion, finely diced", "food": "onion", "g": 150}, {"need": "carrots", "txt": "2 medium carrots, finely diced", "food": "carrot", "g": 120}, {"need": "celery", "optional": true, "txt": "2 celery stalks, finely diced", "food": "celery", "g": 100}, {"need": "broth", "txt": "3 cups (720 ml) vegetable broth, plus more as needed", "food": "vegetable-broth", "g": 720}, {"need": "parmesan", "txt": "1 1/2 oz (42 g) grated parmesan, to serve", "food": "parmesan", "g": 42}, {"need": "basil", "optional": true, "txt": "Fresh basil to finish", "food": "none", "g": 0}, {"staple": true, "txt": "1 tbsp (15 ml) avocado oil; 4 cloves garlic, minced; 2 tsp oregano, pinch of cinnamon, red pepper flakes optional; 1 1/2 tsp salt, 1/2 tsp pepper", "food": "avocado-oil", "g": 14}], "steps": ["Finely dice the onion, carrots and celery into 1/4 inch (6 mm) pieces; this mix is called a soffritto and it is the flavor base of a classic bolognese. Finely chop the mushrooms to about the size of the lentils so they mimic ground meat. Mince the garlic, and rinse the lentils in a strainer, picking out any small stones. Bring a large pot of salted water to a boil for the pasta.", "Heat the 1 tbsp (15 ml) avocado oil in a large Dutch oven or 5 quart (4.7 L) pot over medium heat. Add the onion, carrot, celery and mushrooms with 1/2 tsp salt and cook 8 to 10 minutes, stirring now and then, until the mushrooms have released their water, the pan looks dry again and the veggies are soft and lightly browned.", "Stir in the garlic, tomato paste, oregano, cinnamon and pepper flakes and cook 1 to 2 minutes, stirring constantly, until the paste darkens from bright red to a brick color. This caramelizes it and adds deep, meaty flavor.", "Add the lentils, crushed tomatoes, 3 cups (720 ml) broth and the remaining salt and pepper. Bring to a boil, then lower to medium-low for a gentle simmer, partly covered. Cook 25 to 30 minutes, stirring every 5 minutes and adding a splash of broth if it gets too thick, until the lentils are tender but still hold their shape and the sauce is thick enough to cling to a spoon.", "About 12 minutes before the sauce is done, cook the 12 oz (340 g) pasta in the boiling salted water according to the package, usually 9 to 11 minutes, until al dente, meaning tender with a slight bite in the center. Scoop out 1/2 cup (120 ml) of the starchy pasta water, then drain.", "Toss the pasta with the sauce, loosening with pasta water as needed, or spoon the sauce over each portion. Divide into 6 bowls and top each with 1/4 oz (7 g) parmesan and basil. The sauce keeps 5 days in the fridge or 3 months in the freezer; store pasta and sauce separately if you can, and reheat in a pot over medium heat or 2 to 3 minutes in the microwave with a splash of water."]},
    {"id": "crispy-tofu-teriyaki-bowl", "lvl": 3, "name": "Crispy Tofu Teriyaki Bowl", "cat": "Dinner", "tag": "Air fryer", "serves": 4, "mins": 35, "veg": true, "batch": false, "blurb": "Golden, crackly air-fried tofu tossed in sticky teriyaki and piled over rice with crisp-tender broccoli. Better than takeout, on the table in 35 minutes, with about 26 g of protein a bowl.", "items": [{"need": "tofu", "txt": "2 blocks (14 oz / 397 g each) extra-firm tofu", "food": "tofu-extra-firm", "g": 794}, {"need": "rice", "txt": "3/4 cup (140 g) dry white rice", "food": "white-rice", "g": 140}, {"need": "broccoli", "or": ["broccolini"], "txt": "1 lb (450 g) broccoli florets", "food": "broccoli", "g": 450}, {"need": "teriyaki-sauce", "or": ["soy-sauce"], "txt": "1/3 cup (96 g) store-bought teriyaki sauce", "food": "teriyaki-sauce", "g": 96}, {"need": "green-onions", "optional": true, "txt": "2 green onions, sliced", "food": "green-onion", "g": 20}, {"need": "ginger", "optional": true, "txt": "1 tsp fresh ginger, grated", "food": "none", "g": 0}, {"need": "sesame-oil", "optional": true, "txt": "1/2 tsp toasted sesame oil", "food": "none", "g": 0}, {"staple": true, "txt": "2 tbsp (16 g) cornstarch", "food": "cornstarch", "g": 16}, {"staple": true, "txt": "1 tbsp (15 ml) avocado oil plus avocado oil spray; 1 clove garlic, grated; 1/2 tsp salt, 1/4 tsp pepper", "food": "avocado-oil", "g": 16}], "steps": ["Drain the tofu and press it: wrap each block in a clean kitchen towel, set a cutting board or heavy pan on top with a few cans for weight, and leave it 15 minutes to squeeze out water. Meanwhile, cut the broccoli into bite-size florets, slice the green onions and grate the garlic and ginger. Rinse the rice in a strainer until the water runs mostly clear.", "Add the 3/4 cup (140 g) rice, 1 1/2 cups (360 ml) water and a pinch of salt to a small saucepan. Bring to a boil, cover, turn the heat to low and cook 15 minutes, then take it off the heat and let it sit covered 10 minutes before fluffing with a fork.", "Cut the pressed tofu into 3/4 inch (2 cm) cubes. In a large bowl, toss them gently with 2 tsp of the avocado oil, then sprinkle with the 2 tbsp (16 g) cornstarch, salt and pepper and toss again until every cube has a thin, dry, powdery coat with no wet spots.", "Preheat the air fryer to 400°F (205°C). Spray the basket, add the tofu in a single layer (work in 2 batches if needed) and air fry 14 to 18 minutes, shaking the basket every 5 minutes, until deep golden and crisp on all sides. No air fryer: bake on a parchment-lined sheet at 425°F (220°C) for 25 to 30 minutes, flipping halfway.", "Heat the remaining 1 tsp avocado oil in a 12 inch (30 cm) skillet over medium-high heat. Add the broccoli and 2 tbsp (30 ml) water and cook 4 to 5 minutes, stirring, until bright green and crisp-tender (a fork goes in with a little resistance). Push it to the side, add the garlic and ginger for 30 seconds, then pour in the 1/3 cup (96 g) teriyaki and let it bubble 1 minute until glossy.", "Turn off the heat, add the crispy tofu and toss quickly to coat everything in the sauce. Divide the rice among 4 bowls, top with tofu and broccoli, and finish with green onions and a few drops of sesame oil. Eat right away for the crispiest tofu; leftovers keep 3 days in the fridge and re-crisp in the air fryer at 375°F (190°C) for 4 to 5 minutes."]},
    {"id": "garlic-butter-steak-bites", "lvl": 2, "photos": ["/kitchen/img/garlic-butter-steak-bites.jpg"], "name": "Garlic Butter Steak Bites and Zucchini", "cat": "Dinner", "tag": "20 minutes", "serves": 4, "mins": 20, "keto": true, "batch": false, "blurb": "Seared sirloin cubes and golden zucchini tossed in sizzling garlic butter, done in one skillet in 20 minutes. About 37 g protein and 5 g carbs per serving, and it tastes like a steakhouse night at home.", "items": [{"need": "steak", "txt": "1 1/2 lb (680 g) sirloin steak, cut into 1-inch (2.5 cm) cubes", "food": "sirloin", "g": 680}, {"need": "zucchini", "txt": "2 medium zucchini (1 lb / 454 g), cut into 1/2-inch (1 cm) half moons", "food": "zucchini", "g": 454}, {"need": "butter", "txt": "3 tbsp (42 g) butter", "food": "butter", "g": 42}, {"need": "lemon", "optional": true, "txt": "1/2 lemon, for squeezing over at the end", "food": "lemon-juice", "g": 15}, {"staple": true, "txt": "1 tbsp (15 ml) avocado oil", "food": "avocado-oil", "g": 14}, {"staple": true, "txt": "6 cloves garlic, minced", "food": "garlic", "g": 18}, {"staple": true, "txt": "1 tsp salt, 1/2 tsp black pepper, 1/2 tsp paprika, pinch of chili flakes (optional)", "food": "none", "g": 0}], "steps": ["Pat the steak very dry with paper towels and cut it into 1-inch (2.5 cm) cubes. Cut the zucchini into 1/2-inch (1 cm) half moons. Mince the 6 garlic cloves and season the steak with the salt, pepper and paprika.", "Heat 1 tsp of the avocado oil in a large 12-inch (30 cm) skillet over medium-high heat until it shimmers. Add the zucchini in a single layer and cook 3 to 4 minutes, flipping once, until browned on the edges but still a little firm. Move it to a plate and sprinkle with a pinch of salt.", "Add the rest of the oil to the same skillet and turn the heat to high. Add the steak in a single layer, in two batches if needed so the pieces are not touching, and leave them alone for 2 minutes to build a brown crust (searing). Flip and cook 1 to 2 minutes more: 130°F (54°C) is medium-rare and USDA recommends 145°F (63°C).", "Turn the heat down to medium-low and add the butter and garlic to the pan with the steak. Stir for 30 to 60 seconds, until the butter foams and the garlic smells fragrant but is not brown.", "Return the zucchini to the skillet and toss everything in the garlic butter for 30 seconds. Squeeze the lemon over the top and serve right away with any pan butter spooned over. Leftovers keep 3 days in the fridge; reheat briefly in a skillet so the steak does not overcook."]},
    {"id": "smash-burger-lettuce-wraps", "lvl": 4, "photos": ["/kitchen/img/smash-burger-lettuce-wraps.jpg"], "name": "Bunless Smash Burger Lettuce Wraps", "cat": "Dinner", "tag": "25 minutes", "serves": 4, "mins": 25, "keto": true, "batch": false, "blurb": "Crispy-edged smashed patties with melty cheese, pickles and a tangy Greek yogurt burger sauce, all wrapped in cold, crunchy lettuce. You get about 44 g protein and only 8 g carbs per serving, and you won't miss the bun.", "items": [{"need": "ground-beef", "or": ["ground-turkey"], "txt": "1 1/2 lb (680 g) 93% lean ground beef", "food": "ground-beef", "g": 680}, {"need": "cheese", "txt": "4 slices American or cheddar cheese (3 oz / 84 g)", "food": "american-cheese", "g": 84}, {"need": "lettuce", "txt": "1 head iceberg or butter lettuce (about 10 oz / 300 g), leaves separated", "food": "lettuce", "g": 300}, {"need": "pickles", "txt": "1/2 cup (60 g) dill pickle chips, plus 1 tbsp pickle juice for the sauce", "food": "pickles", "g": 60}, {"need": "onion", "txt": "1/2 small onion (2 oz / 60 g), sliced paper thin", "food": "onion", "g": 60}, {"need": "greek-yogurt", "txt": "1/2 cup (120 g) plain nonfat Greek yogurt", "food": "greek-yogurt", "g": 120}, {"need": "tomatoes", "optional": true, "txt": "1 tomato, sliced", "food": "tomato", "g": 120}, {"staple": true, "txt": "1 tbsp (15 g) yellow mustard (or 1 tbsp sugar-free ketchup; regular ketchup adds sugar)", "food": "mustard", "g": 15}, {"staple": true, "txt": "Avocado oil spray for the skillet", "food": "avocado-oil", "g": 1}, {"staple": true, "txt": "1 tsp salt, 1/2 tsp pepper, 1/2 tsp paprika, 1/2 tsp garlic powder", "food": "none", "g": 0}], "steps": ["Separate the lettuce into large cup-shaped leaves, rinse and pat dry. Slice the onion paper thin and the tomato into rounds. Divide the beef into 8 loose 3-oz (85 g) balls without packing them tight, and keep them in the fridge until the pan is hot.", "In a small bowl stir together the Greek yogurt, mustard, 1 tbsp pickle juice, the paprika and garlic powder, and a pinch of salt. Taste and add more mustard or pickle juice until it is tangy enough for you.", "Set a large cast iron or heavy 12-inch (30 cm) skillet over high heat for 3 to 4 minutes, until a drop of water sizzles away instantly. Mist it lightly with avocado oil spray.", "Place 3 or 4 beef balls in the pan, lay a square of parchment on top and press each one flat with a sturdy spatula to about 1/4 inch (6 mm) thick. That is the smash: it gives you lacy, crispy brown edges. Sprinkle with salt and pepper and cook 2 minutes without moving them until the edges are deep brown.", "Scrape under each patty with the spatula, flip, and lay a half slice of cheese on top. Cook 1 minute more until the cheese melts and the beef reaches 160°F (71°C). Repeat with the remaining beef.", "Stack two patties in a double layer of lettuce leaves, then add pickles, onion, tomato and a big spoonful of burger sauce. Wrap it up like a taco and eat right away; the patties are best fresh, but cooked patties keep 3 days in the fridge."]},
    {"id": "creamy-tuscan-chicken", "lvl": 2, "photos": ["/kitchen/img/creamy-tuscan-chicken.jpg"], "name": "Creamy Tuscan Chicken", "cat": "Dinner", "tag": "Meal prep", "serves": 4, "mins": 30, "keto": true, "batch": true, "blurb": "Golden seared chicken simmered in a rich parmesan cream sauce with sun-dried tomatoes and spinach, no pasta needed. Each serving has about 44 g protein and 7 g carbs and reheats like a dream.", "items": [{"need": "chicken-breast", "or": ["chicken-thighs"], "txt": "1 1/2 lb (680 g) boneless skinless chicken breast (2 large breasts)", "food": "chicken-breast", "g": 680}, {"need": "heavy-cream", "txt": "1/2 cup (120 ml) heavy cream", "food": "heavy-cream", "g": 120}, {"need": "broth", "txt": "1/2 cup (120 ml) chicken broth", "food": "chicken-broth", "g": 120}, {"need": "parmesan", "txt": "1/2 cup (1.75 oz / 50 g) grated parmesan", "food": "parmesan", "g": 50}, {"need": "sun-dried-tomatoes", "txt": "1/3 cup (1.4 oz / 40 g) sun-dried tomatoes in oil, drained and chopped", "food": "sun-dried-tomatoes", "g": 40}, {"need": "spinach", "txt": "4 packed cups (4 oz / 120 g) fresh baby spinach", "food": "spinach", "g": 120}, {"staple": true, "txt": "1 tbsp (15 ml) avocado oil", "food": "avocado-oil", "g": 14}, {"staple": true, "txt": "4 cloves garlic, minced", "food": "garlic", "g": 12}, {"staple": true, "txt": "1 tsp salt, 1/2 tsp pepper, 1 tsp oregano, 1/2 tsp paprika, pinch of chili flakes (optional)", "food": "none", "g": 0}], "steps": ["Slice each chicken breast in half horizontally to make 4 thin cutlets about 1/2 inch (1 cm) thick, so they cook evenly. Pat dry and season both sides with the salt, pepper, oregano and paprika. Mince the garlic, chop the sun-dried tomatoes and grate the parmesan.", "Heat the avocado oil in a large 12-inch (30 cm) skillet over medium-high heat until it shimmers. Add the cutlets and cook 4 to 5 minutes per side without moving them, until deep golden and 165°F (74°C) inside. Move them to a plate.", "Lower the heat to medium, add the garlic and sun-dried tomatoes and stir for 1 minute until fragrant. Pour in the broth and scrape up the brown bits on the bottom of the pan with a wooden spoon (that is deglazing, and it is where the flavor lives). Stir in the cream and simmer 2 to 3 minutes until it lightly coats the spoon.", "Turn the heat to low and stir in the parmesan a little at a time until smooth. Add the spinach by handfuls and stir for 1 to 2 minutes until just wilted.", "Return the chicken and any juices to the pan and spoon the sauce over it for 1 minute to rewarm. Serve with extra parmesan, or over cauliflower rice or zucchini noodles. Portion into 4 containers; it keeps 4 days in the fridge or 2 months frozen, and reheats in the microwave at 50% power for 2 to 3 minutes, stirring halfway."]},
    {"id": "cauliflower-shrimp-fried-rice", "lvl": 2, "photos": ["/kitchen/img/cauliflower-shrimp-fried-rice.jpg"], "name": "Cauliflower Fried Rice with Shrimp", "cat": "Dinner", "tag": "20 minutes", "serves": 4, "mins": 20, "keto": true, "batch": false, "blurb": "All the takeout flavor of shrimp fried rice with riced cauliflower standing in for the rice, plenty of egg, soy and garlic. Roughly 44 g protein and 9 g carbs per serving, on the table in 20 minutes.", "items": [{"need": "shrimp", "txt": "1 1/2 lb (680 g) raw shrimp, peeled and deveined", "food": "shrimp", "g": 680}, {"need": "cauliflower-rice", "txt": "1 1/4 lb (20 oz / 567 g) riced cauliflower, fresh or frozen", "food": "cauliflower", "g": 567}, {"need": "eggs", "txt": "4 large eggs, beaten", "food": "egg", "g": 200}, {"need": "soy-sauce", "txt": "3 tbsp (45 ml) low-sodium soy sauce", "food": "soy-sauce", "g": 48}, {"need": "butter", "txt": "1 tbsp (14 g) butter", "food": "butter", "g": 14}, {"need": "green-onions", "txt": "4 green onions, sliced, whites and greens kept separate", "food": "green-onion", "g": 30}, {"need": "sesame-oil", "optional": true, "txt": "1 tsp toasted sesame oil", "food": "sesame-oil", "g": 4.5}, {"need": "ginger", "optional": true, "txt": "1 tsp fresh ginger, grated", "food": "none", "g": 0}, {"need": "hot-sauce", "optional": true, "txt": "Sriracha to finish", "food": "none", "g": 0}, {"staple": true, "txt": "2 tbsp (30 ml) avocado oil, divided", "food": "avocado-oil", "g": 28}, {"staple": true, "txt": "3 cloves garlic, minced", "food": "garlic", "g": 9}, {"staple": true, "txt": "1/2 tsp salt, 1/4 tsp pepper", "food": "none", "g": 0}], "steps": ["Pat the shrimp dry and season with the salt and pepper. Beat the 4 eggs in a bowl, mince the garlic, grate the ginger and slice the green onions, keeping whites and greens apart. If the riced cauliflower is frozen, microwave it 4 minutes, then squeeze it hard in a clean towel to remove the water.", "Heat 1 tbsp avocado oil in a large 12-inch (30 cm) skillet or wok over high heat until it shimmers. Add the shrimp in one layer and cook 1 to 2 minutes per side, until pink, curled into a C shape and 145°F (63°C). Move them to a plate.", "Add the butter to the pan over medium heat, pour in the eggs and stir gently for 1 to 2 minutes until just set in soft curds. Move them to the plate with the shrimp.", "Turn the heat back to high, add the remaining 1 tbsp oil, the garlic, ginger and green onion whites and stir for 30 seconds. Add the cauliflower, spread it flat and let it sit 2 minutes to brown, then stir and cook 3 to 4 minutes more until tender with some golden bits.", "Add the soy sauce, shrimp and eggs and toss for 1 minute until hot and evenly coated. Turn off the heat, drizzle with sesame oil and top with green onion greens and sriracha. Leftovers keep 3 days in the fridge; reheat in a hot skillet for best texture."]},
    {"id": "salmon-lemon-dill-asparagus", "lvl": 3, "photos": ["/kitchen/img/salmon-lemon-dill-asparagus.jpg"], "name": "Salmon with Lemon Dill Cream and Asparagus", "cat": "Dinner", "tag": "One pan", "serves": 4, "mins": 25, "keto": true, "batch": false, "blurb": "Crispy-skinned salmon with tender asparagus and a silky lemon dill cream sauce made in the same pan. About 38 g protein and 6 g carbs per serving, loaded with healthy fats.", "items": [{"need": "salmon", "txt": "4 salmon fillets, 6 oz (170 g) each, skin on or off", "food": "salmon", "g": 680}, {"need": "asparagus", "txt": "1 lb (454 g) asparagus, woody ends snapped off", "food": "asparagus", "g": 454}, {"need": "heavy-cream", "txt": "1/2 cup (120 ml) heavy cream", "food": "heavy-cream", "g": 120}, {"need": "lemon", "txt": "1 lemon, zested and juiced (about 2 tbsp / 30 ml juice)", "food": "lemon-juice", "g": 30}, {"need": "dill", "or": ["green-onions"], "txt": "2 tbsp fresh dill, chopped (or 2 tsp dried)", "food": "none", "g": 0}, {"staple": true, "txt": "1 tbsp (15 ml) avocado oil, divided", "food": "avocado-oil", "g": 14}, {"staple": true, "txt": "2 cloves garlic, minced", "food": "garlic", "g": 6}, {"staple": true, "txt": "1 tsp salt, 1/2 tsp pepper", "food": "none", "g": 0}], "steps": ["Pat the salmon dry and season both sides with most of the salt and pepper. Snap the woody ends off the asparagus. Zest and juice the lemon, mince the garlic and chop the dill.", "Heat 2 tsp avocado oil in a large 12-inch (30 cm) nonstick or cast iron skillet over medium-high heat until it shimmers. Lay the salmon in skin side (or presentation side) down and cook 4 minutes without moving it, until the bottom is crisp and golden. Flip and cook 2 to 4 minutes more until it flakes easily and reaches 145°F (63°C), then move to a plate.", "Add the remaining 1 tsp oil and the asparagus to the same skillet with a pinch of salt. Cook 4 to 5 minutes over medium-high, tossing a few times, until bright green, spotted brown and just tender when pierced with a knife. Move it to the plates.", "Lower the heat to medium, add the garlic and stir for 30 seconds. Pour in the cream and simmer 2 to 3 minutes, until it thickens enough to coat a spoon. Turn off the heat, then stir in the lemon zest, lemon juice and dill and season with a pinch of salt.", "Set each salmon fillet next to the asparagus and spoon the lemon dill cream over the top. Eat right away; leftovers keep 2 days in the fridge and are great cold or gently rewarmed at 50% power in the microwave."]},
    {"id": "philly-cheesesteak-peppers", "lvl": 3, "photos": ["/kitchen/img/philly-cheesesteak-peppers.jpg"], "name": "Philly Cheesesteak Stuffed Peppers", "cat": "Dinner", "tag": "Meal prep", "serves": 4, "mins": 40, "keto": true, "batch": true, "blurb": "Thin-sliced sirloin and sweet onions piled into tender bell pepper boats and smothered in melted provolone. Every serving packs about 50 g protein with around 10 g carbs, and they reheat perfectly.", "items": [{"need": "steak", "txt": "1 1/2 lb (680 g) sirloin steak, sliced very thin", "food": "sirloin", "g": 680}, {"need": "bell-pepper", "txt": "4 medium green or red bell peppers (1 lb / 450 g), halved and seeded", "food": "bell-pepper", "g": 450}, {"need": "onion", "txt": "1/2 medium onion (2.5 oz / 75 g), thinly sliced", "food": "onion", "g": 75}, {"need": "cheese", "txt": "8 slices provolone (5.6 oz / 160 g)", "food": "provolone", "g": 160}, {"need": "soy-sauce", "optional": true, "txt": "1 tbsp (15 ml) low-sodium soy sauce", "food": "soy-sauce", "g": 16}, {"staple": true, "txt": "1 tbsp (15 ml) avocado oil, plus spray for the peppers", "food": "avocado-oil", "g": 16}, {"staple": true, "txt": "2 cloves garlic, minced", "food": "garlic", "g": 6}, {"staple": true, "txt": "1 tsp salt, 1/2 tsp pepper, 1/2 tsp garlic powder", "food": "none", "g": 0}], "steps": ["Preheat the oven to 400°F (200°C). Put the steak in the freezer for 15 minutes, then slice it as thin as you can against the grain (across the lines of muscle), and cut the slices into 2-inch (5 cm) pieces. Halve the peppers lengthwise, remove seeds and ribs, and thinly slice the onion and mince the garlic.", "Set the pepper halves cut side up in a 9 x 13-inch (23 x 33 cm) baking dish, mist with avocado oil spray and sprinkle with a pinch of salt. Bake 10 minutes, until they just start to soften.", "While the peppers bake, heat 1 tsp avocado oil in a large 12-inch (30 cm) skillet over medium heat. Add the onion and cook 6 to 7 minutes, stirring now and then, until soft and golden. Move it to a bowl.", "Turn the heat to high, add the remaining oil and the steak in a single layer, and season with the salt, pepper and garlic powder. Cook 2 to 3 minutes, stirring once, until browned with no pink, then stir in the garlic, soy sauce and onion mixture for 30 seconds.", "Lay half a provolone slice inside each pepper, pack in the steak filling, and top each with another half slice. Bake 12 to 15 minutes, until the peppers are tender and the cheese is bubbly and browned in spots.", "Serve 2 halves per person. Pack into containers; they keep 4 days in the fridge or 2 months frozen (thaw overnight first). Reheat covered in the microwave for 2 to 3 minutes, or at 350°F (175°C) in the oven for 15 minutes."]},
    {"id": "chicken-parm-zoodle-bake", "lvl": 3, "photos": ["/kitchen/img/chicken-parm-zoodle-bake.jpg"], "name": "Chicken Parm Zoodle Bake", "cat": "Dinner", "tag": "Meal prep", "serves": 4, "mins": 45, "keto": true, "batch": true, "blurb": "Seared chicken, zucchini noodles and no-sugar-added marinara baked under a bubbling blanket of mozzarella and parmesan. All the comfort of chicken parm with about 50 g protein and 10 g carbs per serving.", "items": [{"need": "chicken-breast", "txt": "1 1/2 lb (680 g) boneless skinless chicken breast", "food": "chicken-breast", "g": 680}, {"need": "zucchini", "txt": "3 medium zucchini (1 1/4 lb / 600 g), spiralized, or store-bought zucchini noodles", "food": "zucchini", "g": 600}, {"need": "marinara", "txt": "1 cup (250 g) no-sugar-added marinara (like Rao's); check for 6 g carbs or less per 1/2 cup", "food": "marinara-no-sugar", "g": 250}, {"need": "cheese", "txt": "1 cup (4 oz / 113 g) shredded part-skim mozzarella", "food": "cheese", "g": 113}, {"need": "parmesan", "txt": "1/4 cup (25 g) grated parmesan", "food": "parmesan", "g": 25}, {"staple": true, "txt": "1 tbsp (15 ml) avocado oil", "food": "avocado-oil", "g": 14}, {"staple": true, "txt": "2 cloves garlic, minced", "food": "garlic", "g": 6}, {"staple": true, "txt": "1 1/2 tsp salt (1/2 tsp for the zucchini), 1/2 tsp pepper, 1 tsp oregano, pinch of chili flakes", "food": "none", "g": 0}], "steps": ["Preheat the oven to 400°F (200°C). Spiralize the zucchini, toss it with 1/2 tsp salt in a colander and let it sit 15 minutes to draw out water. Cut the chicken into 1-inch (2.5 cm) pieces, season with salt, pepper and oregano, and mince the garlic.", "Heat the avocado oil in a large 12-inch (30 cm) oven-safe skillet over medium-high heat until it shimmers. Add the chicken in one layer and cook 5 to 6 minutes, turning once, until golden on the outside. It will finish cooking in the oven.", "Stir the garlic into the chicken for 30 seconds, then add the marinara and chili flakes. Simmer 2 minutes, stirring, until the sauce is bubbling.", "Squeeze the salted zucchini firmly in a clean kitchen towel to remove as much water as you can. Fold the zoodles into the skillet (or move everything into a 9 x 9-inch / 23 x 23 cm baking dish) and spread it level.", "Scatter the mozzarella and parmesan over the top. Bake 15 to 18 minutes, until the cheese is bubbling and spotted golden and the chicken reaches 165°F (74°C). For extra browning, broil 1 to 2 minutes at the end, watching closely.", "Let it rest 5 minutes so the sauce settles, then cut into 4 portions. It keeps 4 days in the fridge or 2 months frozen. Reheat in the microwave for 2 minutes, then pour off any liquid that collects."]},
    {"id": "keto-sausage-egg-cups", "lvl": 3, "name": "Keto Breakfast Sausage and Egg Cups", "cat": "Breakfast", "tag": "Meal prep", "serves": 6, "mins": 40, "keto": true, "batch": true, "blurb": "Homemade breakfast sausage pressed into muffin cups, each cradling a baked egg under a layer of melted cheese. Two cups give you about 38 g protein and just 2 g carbs, and a week of grab-and-go breakfasts.", "items": [{"need": "ground-turkey", "or": ["ground-chicken"], "txt": "1 1/2 lb (680 g) 93% lean ground turkey", "food": "ground-turkey", "g": 680}, {"need": "eggs", "txt": "12 large eggs", "food": "egg", "g": 600}, {"need": "cheese", "txt": "1 cup (4 oz / 113 g) shredded cheddar", "food": "cheese", "g": 113}, {"need": "spinach", "optional": true, "txt": "1 cup (1 oz / 30 g) baby spinach, chopped", "food": "spinach", "g": 30}, {"need": "green-onions", "optional": true, "txt": "2 green onions, sliced, for garnish", "food": "green-onion", "g": 15}, {"staple": true, "txt": "Avocado oil spray for the muffin tin", "food": "avocado-oil", "g": 1}, {"staple": true, "txt": "2 cloves garlic, finely minced (or 1 tsp garlic powder)", "food": "garlic", "g": 6}, {"staple": true, "txt": "Sausage seasoning: 1 1/2 tsp salt, 1 tsp paprika, 1 tsp oregano (or dried sage), 1/2 tsp black pepper, pinch each of cinnamon and chili flakes", "food": "none", "g": 0}], "steps": ["Preheat the oven to 400°F (200°C) and spray a standard 12-cup muffin tin well with avocado oil spray. Mince the garlic, chop the spinach and shred the cheese if needed. Mix all the sausage seasoning in a small bowl.", "In a large bowl, mix the ground turkey, garlic, spinach and sausage seasoning with your hands until evenly combined, about 1 minute. Don't overwork it or it gets tough.", "Divide the turkey into 12 balls (about 2 oz / 57 g each). Press each ball into a muffin cup and up the sides with your fingers to make a thin cup about 1/4 inch (6 mm) thick, leaving a well in the middle.", "Bake 10 minutes, until the turkey is set and pale. Carefully tip or blot out any liquid that pooled in the cups with a paper towel, and press the centers back down with a spoon if they puffed up.", "Sprinkle a pinch of cheese into each cup, crack 1 egg into each, then top with the rest of the cheese and a pinch of salt and pepper. If a cup looks too full, spoon off a little egg white so it does not overflow.", "Bake 12 to 15 minutes, until the whites are fully set and the yolks are cooked how you like them (15 minutes for firm, best for meal prep). The turkey should read 165°F (74°C). Cool 5 minutes, then run a butter knife around each cup to lift it out.", "Serve 2 cups per person, topped with green onions and hot sauce if you like. They keep 4 days in the fridge or 2 months frozen. Reheat 45 to 60 seconds in the microwave from the fridge, or 1 1/2 to 2 minutes from frozen, wrapped in a damp paper towel."]},
    {"id": "buffalo-chicken-dip-plate", "lvl": 2, "photos": ["/kitchen/img/buffalo-chicken-dip-plate.jpg"], "name": "Buffalo Chicken Dip Stuffed Celery and Peppers", "cat": "Lunch", "tag": "Meal prep", "serves": 4, "mins": 30, "keto": true, "batch": true, "blurb": "Creamy, tangy buffalo chicken dip made lighter with Greek yogurt, then piled into crunchy celery and mini sweet peppers. Big game-day flavor with about 50 g protein and 8 g carbs per serving.", "items": [{"need": "chicken-breast", "txt": "3 cups (1 lb / 454 g) cooked shredded chicken breast (rotisserie works)", "food": "chicken-breast-cooked", "g": 454}, {"need": "greek-yogurt", "txt": "3/4 cup (170 g) plain nonfat Greek yogurt", "food": "greek-yogurt", "g": 170}, {"need": "cream-cheese", "txt": "2 oz (56 g) cream cheese, softened", "food": "cream-cheese", "g": 56}, {"need": "hot-sauce", "txt": "1/2 cup (120 ml) buffalo hot sauce (like Frank's RedHot)", "food": "hot-sauce", "g": 120}, {"need": "cheese", "txt": "1 cup (4 oz / 113 g) shredded cheddar or mozzarella", "food": "cheese", "g": 113}, {"need": "celery", "txt": "6 celery stalks (8 oz / 240 g), cut into 3-inch (7.5 cm) pieces", "food": "celery", "g": 240}, {"need": "bell-pepper", "txt": "8 mini sweet peppers (7 oz / 200 g), halved and seeded", "food": "bell-pepper", "g": 200}, {"need": "green-onions", "optional": true, "txt": "2 green onions, sliced", "food": "green-onion", "g": 15}, {"staple": true, "txt": "1/2 tsp garlic powder, 1/2 tsp paprika, pinch of salt", "food": "none", "g": 0}], "steps": ["Preheat the oven to 375°F (190°C). Shred the chicken with two forks into bite-size strands. Cut the celery into 3-inch (7.5 cm) pieces, halve and seed the mini peppers, slice the green onions, and set the cream cheese out to soften for 10 minutes.", "In a large bowl, stir the softened cream cheese until smooth, then mix in the Greek yogurt, hot sauce, garlic powder and paprika until no lumps remain. Fold in the chicken and half the shredded cheese.", "Spread the dip in a small 8 x 8-inch (20 x 20 cm) baking dish and top with the rest of the cheese. Bake 15 to 20 minutes, until bubbling at the edges and hot in the center, 165°F (74°C).", "Let the dip cool 5 minutes so it firms up a little. Spoon it generously into the celery pieces and pepper halves, and top with green onions.", "Serve warm or cold, about a quarter of the dip with a mix of celery and peppers per person. For meal prep, store the dip and the cut veggies in separate containers and fill right before eating; the dip keeps 4 days in the fridge and reheats in 60 to 90 seconds in the microwave. Freezing is not recommended since the yogurt turns grainy."]},
    {"id": "carnitas-lettuce-wraps", "lvl": 3, "name": "Pork Carnitas Lettuce Wraps with Avocado Crema", "cat": "Dinner", "tag": "35 minutes", "serves": 4, "mins": 35, "keto": true, "batch": false, "blurb": "Juicy, crispy-edged carnitas-style pork tenderloin tucked into lettuce cups and topped with a cool avocado lime crema. Around 40 g protein and 10 g carbs per serving, with taco night flavor in half the time.", "items": [{"need": "pork-tenderloin", "txt": "1 1/2 lb (680 g) pork tenderloin, cut into 3/4-inch (2 cm) cubes", "food": "pork-tenderloin", "g": 680}, {"need": "avocado", "txt": "1 large ripe avocado (about 5 oz / 150 g flesh)", "food": "avocado", "g": 150}, {"need": "greek-yogurt", "txt": "1/2 cup (120 g) plain nonfat Greek yogurt", "food": "greek-yogurt", "g": 120}, {"need": "lime", "txt": "2 limes, juiced (about 3 tbsp / 45 ml)", "food": "lime-juice", "g": 45}, {"need": "onion", "txt": "1/2 medium onion (2.5 oz / 75 g), half finely diced for topping, half sliced", "food": "onion", "g": 75}, {"need": "broth", "or": ["lime"], "txt": "1/4 cup (60 ml) chicken broth or water", "food": "chicken-broth", "g": 60}, {"need": "lettuce", "txt": "1 head butter or romaine lettuce (about 7 oz / 200 g), leaves separated", "food": "lettuce", "g": 200}, {"need": "cilantro", "optional": true, "txt": "1/4 cup (10 g) cilantro, chopped", "food": "cilantro", "g": 10}, {"need": "jalapenos", "optional": true, "txt": "1 jalapeño, thinly sliced", "food": "jalapeno", "g": 14}, {"staple": true, "txt": "1 1/2 tbsp (22 ml) avocado oil, divided", "food": "avocado-oil", "g": 21}, {"staple": true, "txt": "4 cloves garlic, minced", "food": "garlic", "g": 12}, {"staple": true, "txt": "1 1/2 tsp cumin, 1 tsp oregano, 1 tsp chili powder, 1 tsp salt, 1/2 tsp pepper, pinch of cinnamon", "food": "none", "g": 0}], "steps": ["Trim the thin silver skin off the pork, cut it into 3/4-inch (2 cm) cubes, and toss with the cumin, oregano, chili powder, salt, pepper and cinnamon. Mince the garlic, juice the limes, finely dice half the onion and slice the other half. Separate and dry the lettuce leaves.", "Mash or blend the avocado with the Greek yogurt, 2 tbsp of the lime juice, a pinch of salt and a splash of water until smooth and spoonable. Cover and chill.", "Heat 1 tbsp avocado oil in a large 12-inch (30 cm) skillet over medium-high heat until it shimmers. Add the pork and sliced onion in one layer and cook 5 to 6 minutes, turning a few times, until browned on most sides.", "Add the garlic, broth and remaining lime juice, cover, and simmer on medium-low for 6 to 8 minutes. Braising like this (cooking covered in a little liquid) keeps the lean tenderloin juicy. The pork is done at 145°F (63°C).", "Uncover, turn the heat to high and add the remaining 1/2 tbsp oil. Press the pork into the pan and cook 3 to 4 minutes without stirring much, until the liquid is gone and the edges are crispy and caramelized, just like real carnitas.", "Spoon the pork into lettuce cups and top with avocado crema, diced onion, cilantro and jalapeño. Eat right away; leftover pork keeps 3 days in the fridge (re-crisp it in a hot skillet), and the crema keeps 1 day with plastic pressed onto its surface."]},
    {
      id: 'chili-lime-bowls', lvl: 3, photos: ['/kitchen/img/chili-lime-bowls.jpg'], batch: true, cat: 'Lunch',
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
      id: 'street-tacos', lvl: 3, photos: ['/kitchen/img/chicken-street-tacos.jpg'], cat: 'Dinner',
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
      id: 'steak-potatoes', lvl: 3, cat: 'Dinner',
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
      id: 'shrimp-skewers', lvl: 3, cat: 'Dinner',
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
      id: 'steak-eggs', lvl: 3, photos: ['/kitchen/img/steak-and-eggs.jpg'], cat: 'Breakfast',
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
      id: 'chicken-meal-prep', lvl: 2, photos: ['/kitchen/img/chicken-meal-prep.jpg', '/kitchen/img/chicken-meal-prep-pan.jpg'], batch: true, cat: 'Lunch',
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
      id: 'protein-overnight-oats', lvl: 1, photos: ['/kitchen/img/protein-overnight-oats.jpg'], veg: true, batch: true, name: 'Protein Overnight Oats', cat: 'Breakfast', tag: 'Make ahead', serves: 2, mins: 5,
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
      id: 'egg-bites', lvl: 2, keto: true, veg: true, batch: true, name: 'Veggie Egg Bites', cat: 'Breakfast', tag: 'Meal prep', serves: 4, mins: 30,
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
      id: 'yogurt-bowl', lvl: 1, veg: true, name: 'Greek Yogurt Power Bowl', cat: 'Breakfast', tag: '5 minutes', serves: 1, mins: 5,
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
      id: 'greek-chicken-bowls', lvl: 3, photos: ['/kitchen/img/greek-chicken-bowls.jpg'], batch: true, name: 'Greek Chicken Bowls', cat: 'Lunch', tag: 'Meal prep', serves: 4, mins: 35,
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
      id: 'burrito-skillet', lvl: 2, photos: ['/kitchen/img/burrito-skillet.jpg'], batch: true, name: 'One-Pan Chicken Burrito Skillet', cat: 'Dinner', tag: 'One pan', serves: 4, mins: 30,
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
      id: 'turkey-taco-lettuce-wraps', lvl: 2, keto: true, name: 'Turkey Taco Lettuce Wraps', cat: 'Lunch', tag: 'Low carb', serves: 4, mins: 20,
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
      id: 'greek-yogurt-chicken-salad', lvl: 1, photos: ['/kitchen/img/greek-yogurt-chicken-salad.jpg'], keto: true, batch: true, name: 'Greek Yogurt Chicken Salad', cat: 'Lunch', tag: 'No cook option', serves: 4, mins: 15,
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
      id: 'tuna-cucumber', lvl: 1, photos: ['/kitchen/img/tuna-cucumber.jpg'], keto: true, name: 'Tuna Salad Cucumber Boats', cat: 'Lunch', tag: '10 minutes', serves: 2, mins: 10,
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
      id: 'chicken-caesar-wraps', lvl: 3, name: 'Chicken Caesar Wraps', cat: 'Lunch', tag: 'Wraps', serves: 4, mins: 25,
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
      id: 'korean-beef-bowls', lvl: 2, photos: ['/kitchen/img/korean-beef-bowls.jpg'], batch: true, name: 'Korean-Style Beef Bowls', cat: 'Dinner', tag: '20 minutes', serves: 4, mins: 20,
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
      id: 'buffalo-chicken-wraps', lvl: 3, name: 'Buffalo Chicken Wraps', cat: 'Lunch', tag: 'Wraps', serves: 4, mins: 25,
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
      id: 'sheet-pan-fajitas', lvl: 2, photos: ['/kitchen/img/sheet-pan-fajitas.jpg'], batch: true, name: 'Sheet Pan Chicken Fajitas', cat: 'Dinner', tag: 'Sheet pan', serves: 4, mins: 30,
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
      id: 'shrimp-fried-rice', lvl: 3, name: 'Shrimp Fried Rice', cat: 'Dinner', tag: '20 minutes', serves: 4, mins: 20,
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
      id: 'turkey-chili', lvl: 2, photos: ['/kitchen/img/turkey-chili.jpg'], batch: true, name: 'Big Batch Turkey Chili', cat: 'Dinner', tag: 'Meal prep', serves: 6, mins: 45,
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
      id: 'beef-broccoli', lvl: 3, photos: ['/kitchen/img/beef-and-broccoli.jpg'], name: 'Beef and Broccoli', cat: 'Dinner', tag: 'Takeout swap', serves: 4, mins: 25,
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
      id: 'honey-garlic-salmon', lvl: 2, photos: ['/kitchen/img/honey-garlic-salmon.jpg'], name: 'Honey Garlic Salmon and Asparagus', cat: 'Dinner', tag: 'Sheet pan', serves: 4, mins: 25,
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
      id: 'turkey-meatballs-pasta', lvl: 4, photos: ['/kitchen/img/turkey-meatballs-pasta.jpg'], batch: true, name: 'Turkey Meatballs and Marinara Pasta', cat: 'Dinner', tag: 'Family', serves: 4, mins: 35,
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
      id: 'stuffed-peppers', lvl: 3, photos: ['/kitchen/img/stuffed-peppers.jpg'], batch: true, name: 'Turkey Stuffed Peppers', cat: 'Dinner', tag: 'Oven', serves: 4, mins: 50,
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
      id: 'spaghetti-squash-marinara', lvl: 3, photos: ['/kitchen/img/spaghetti-squash-marinara.jpg'], batch: true, name: 'Spaghetti Squash with Turkey Marinara', cat: 'Dinner', tag: 'Low carb', serves: 4, mins: 55,
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
      id: 'lemon-butter-cod', lvl: 2, photos: ['/kitchen/img/lemon-butter-cod.jpg'], name: 'Lemon Butter Cod with Potatoes and Green Beans', cat: 'Dinner', tag: 'Lean', serves: 4, mins: 35,
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
      id: 'pork-carnitas-tacos', lvl: 3, photos: ['/kitchen/img/pork-carnitas-tacos.jpg'], name: 'Quick Pork Tenderloin Carnitas Tacos', cat: 'Dinner', tag: 'Taco night', serves: 4, mins: 40,
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
      id: 'protein-pancakes', lvl: 3, photos: ['/kitchen/img/banana-protein-pancakes.jpg'], veg: true, name: 'Banana Protein Pancakes', cat: 'Breakfast', tag: 'Weekend', serves: 2, mins: 15,
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
      id: 'breakfast-burritos', lvl: 3, photos: ['/kitchen/img/breakfast-burritos.jpg'], batch: true, name: 'Meal Prep Breakfast Burritos', cat: 'Breakfast', tag: 'Freezer friendly', serves: 6, mins: 40,
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
      id: 'lighter-chicken-alfredo', lvl: 3, photos: ['/kitchen/img/lighter-chicken-alfredo.jpg'], name: 'Lighter Chicken Alfredo', cat: 'Dinner', tag: 'Comfort food', serves: 4, mins: 30,
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
      id: 'cheeseburger-bowls', lvl: 3, photos: ['/kitchen/img/cheeseburger-bowls.jpg'], name: 'Cheeseburger Bowls', cat: 'Dinner', tag: 'Meal prep', serves: 4, mins: 35,
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
