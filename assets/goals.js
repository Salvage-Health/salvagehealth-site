// Shared goal logic: targets (same formulas as the companion app and the book) and goal-matched content.
(function () {
  var G = {
    lose: {
      label: 'Lose fat', short: 'Fat loss',
      sub: 'About 20% below maintenance. Fast enough to see results, slow enough to keep your muscle and your sanity.',
      hello: 'Fat loss is a hunger game more than a willpower game. Win the hunger and the rest gets easier.',
      tips: [
        ['Eat protein first', 'Start every meal with the protein. It is the most filling thing on your plate and it protects your muscle while you lose fat.'],
        ['Volume beats willpower', 'Fill half the plate with vegetables. Big plates of low-calorie food keep you full for a fraction of the calories.'],
        ['Hungry? Check these first', 'Drink a full glass of water, then wait 15 minutes. Hunger is often thirst, boredom or short sleep in disguise.'],
        ['Plan for the hard hour', 'Most diets break at night. Keep a high-protein snack ready (Greek yogurt, egg bites, jerky) for the hour you usually cave.'],
        ['The scale will lie to you', 'Water and sodium swing your weight 2 to 5 lb (1 to 2 kg) day to day. Watch the weekly average, not one morning.']
      ],
      articles: ['say-what-you-do', '75-hard'],
      fits: function (r) { return r.m.kcal <= 520 && r.m.p * 4 / Math.max(r.m.kcal, 1) >= 0.3; }
    },
    recomp: {
      label: 'Recomp', short: 'Recomp',
      sub: 'Eat at maintenance, lift hard and keep protein high. Lose fat and build muscle at the same time, slowly.',
      hello: 'A recomp is the long game. The mirror and your lifts will change before the scale does.',
      tips: [
        ['Lift like it matters', 'Recomp only works with real resistance training. Aim for 3 to 4 sessions a week and try to add a rep or a little weight every week.'],
        ['Protein every meal', 'Spread your protein across 3 to 4 meals of about 30 to 50 g each. That keeps muscle building all day.'],
        ['Ignore the scale, track the tape', 'Your weight may barely move. Measure your waist and take progress photos every 2 weeks instead.'],
        ['Time your carbs', 'Put more of your carbs around your workouts. You will train harder and recover better.'],
        ['Sleep is the multiplier', 'Muscle is built while you sleep. Seven to nine hours makes everything else work better.']
      ],
      articles: ['power-of-a-coach', 'supplements-whats-worth-it'],
      fits: function (r) { return r.m.kcal >= 300 && r.m.kcal <= 650 && r.m.p >= 35; }
    },
    gain: {
      label: 'Build muscle', short: 'Muscle gain',
      sub: 'A small surplus of about 250 calories. Enough fuel to grow, without piling on extra fat.',
      hello: 'Building muscle is simple, not easy: lift heavy, eat enough, sleep, and repeat for months.',
      tips: [
        ['Get strong on the big lifts', 'Build around squats, deadlifts, bench and rows. Add weight or reps every week. Strength first, size follows.'],
        ['A small surplus is enough', 'About 250 extra calories a day. Bigger surpluses mostly add fat, not muscle.'],
        ['Struggling to eat enough?', 'Drink some of your calories (a protein shake with milk, oats and peanut butter), and add rice, potatoes or pasta to every meal.'],
        ['Gain slowly on purpose', 'Aim for about 0.25 to 0.5 lb (0.1 to 0.25 kg) a week. Faster than that is mostly fat.'],
        ['Recovery is training too', 'Rest days, sleep and food are when you actually grow. Don\'t skip them.']
      ],
      articles: ['power-of-a-coach', 'supplements-whats-worth-it'],
      fits: function (r) { return r.m.kcal >= 480 && r.m.p >= 40; }
    },
    maintain: {
      label: 'Maintain', short: 'Maintenance',
      sub: 'Eat at maintenance and build habits you can keep for life. This is where most people should spend more time than they do.',
      hello: 'Maintenance is a skill. Learning to hold your weight is what makes every future goal easier.',
      tips: [
        ['Keep your anchors', 'Pick 2 or 3 habits you never skip (protein at breakfast, a daily walk, a set bedtime). Everything else can flex.'],
        ['Use a weight range, not a number', 'Pick a 4 to 5 lb (2 kg) range. As long as your weekly average stays inside it, you are winning.'],
        ['80/20 for real', 'Eat well about 80% of the time and enjoy the rest without guilt. That is what makes it last.'],
        ['Keep training', 'Strength training is what keeps your metabolism and your body where you want them as you age.'],
        ['Check in monthly', 'Weigh in and measure once a month. Small drifts are easy to fix. Big ones aren\'t.']
      ],
      articles: ['say-what-you-do', 'power-of-a-coach'],
      fits: function (r) { return r.m.kcal >= 300 && r.m.kcal <= 650; }
    }
  };
  var ACT = [['1.2', 'Mostly sitting'], ['1.375', 'Light', '1 to 3 workouts a week'], ['1.55', 'Active', '4 to 5 workouts a week'], ['1.725', 'Very active', 'Daily training or physical job']];

  function bmr(sex, lb, cm, age) { return 10 * lb * 0.45359237 + 6.25 * cm - 5 * age + (sex === 'm' ? 5 : -161); }
  function targets(p) {
    var cm = (p.ft * 12 + p.inch) * 2.54, b = bmr(p.sex, p.lb, cm, p.age), tdee = b * p.act, floor = p.sex === 'm' ? 1500 : 1200;
    var hIn = p.ft * 12 + p.inch, bmi27 = 27 * hIn * hIn / 703, ref = p.lb;
    var cal, perLb;
    if (p.goal === 'lose') { cal = Math.max(tdee * 0.8, floor); perLb = 0.9; ref = Math.min(p.lb, Math.max(bmi27, p.lb * 0.75)); }
    else if (p.goal === 'gain') { cal = tdee + 250; perLb = 0.8; }
    else if (p.goal === 'recomp') { cal = tdee; perLb = 1.0; ref = Math.min(p.lb, Math.max(bmi27, p.lb * 0.75)); }
    else { cal = tdee; perLb = 0.8; ref = Math.min(p.lb, Math.max(bmi27, p.lb * 0.8)); }
    cal = Math.round(cal / 10) * 10;
    var pr = Math.round(ref * perLb), f = Math.round(Math.max(cal * 0.25 / 9, ref * 0.3)), c = Math.max(50, Math.round((cal - pr * 4 - f * 9) / 4));
    return { bmr: Math.round(b), tdee: Math.round(tdee / 10) * 10, cal: cal, p: pr, f: f, c: c, floor: cal === floor };
  }
  function load() { try { return JSON.parse(localStorage.getItem('sh-plan') || 'null'); } catch (e) { return null; } }
  function save(p) { try { localStorage.setItem('sh-plan', JSON.stringify(p)); } catch (e) {} }
  window.SH_GOALS = { G: G, ACT: ACT, targets: targets, load: load, save: save };
})();
