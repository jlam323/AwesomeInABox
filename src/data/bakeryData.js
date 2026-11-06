export const BRAND_INFO = {
  instagramUrl: 'https://www.instagram.com/awesomeinabox/',
  instagramStats: {
    posts: '708+',
    followers: '2,074',
  },
  story: [
    'Baking started as a pure labor of love—until an unexpected accident derailed Sophia from pursuing a career in the film industry. Guided by creativity, storytelling, and an eye for cinematic detail, she turned her passion for baking into a thriving bespoke cake studio. In 2011, Awesome In A Box was born.',
    'Over the years, Awesome In A Box has crafted hundreds of showstopping wedding cakes, whimsical milestone birthday cakes, and Asian-inspired dessert tables for families and couples across the Greater Toronto Area.',
    "Our creations have been featured in Style Me Pretty and Catch My Party, showcased at the National Bridal Show and Night It Up!, and Sophia herself competed on CTV's Cross Country Cake Off (streaming on Crave TV).",
  ],
};

export const CAKE_CATEGORIES = [
  {
    id: 'vanilla',
    title: 'VANILLA CAKE',
    subtitle: 'cake options using our delicious vanilla cake',
    items: [
      {
        name: 'Simply Vanilla',
        description: 'with vanilla or chocolate buttercream',
      },
      {
        name: 'Lemon',
        description: 'with vanilla buttercream',
      },
      {
        name: 'Sweet Strawberry',
        description: 'with real strawberry buttercream',
      },
      {
        name: 'Cookies&Cream White',
        description: 'with crushed Oreo buttercream',
      },
      {
        name: 'Matcha',
        description: 'with Matcha buttercream',
      },
      {
        name: 'Strawberry Lemonade',
        description: 'lemon cake with real strawberry buttercream',
      },
      {
        name: 'Cookie B',
        description: 'with cookie butter buttercream',
      },
    ],
  },
  {
    id: 'specialty',
    title: 'SPECIALTY CAKE',
    subtitle: '',
    items: [
      {
        name: 'Red Velvet',
        description: 'with cream cheese frosting',
      },
      {
        name: 'Tea Time',
        description: 'green tea cake with green tea buttercream',
      },
      {
        name: 'Black & Yellow',
        description: 'Black sesame cake with salted egg yolk buttercream',
      },
      {
        name: 'Thai Tea',
        description: 'Thai Tea cake with condensed milk buttercream',
      },
    ],
  },
  {
    id: 'tropical',
    title: 'TROPICAL CAKE',
    subtitle: 'using real fruits in each recipe',
    items: [
      {
        name: 'Coco Vanil',
        description: 'coconut cake with coconut buttercream',
      },
      {
        name: 'Mango Madness',
        description: 'mango cake with mango buttercream',
      },
      {
        name: 'Durian Delight',
        description: 'durian cake with durian buttercream',
      },
      {
        name: 'Raspberry Yuzu',
        description: 'vanilla cake with raspberry buttercream and yuzu curd',
      },
    ],
  },
];

export const CUPCAKE_TIERS = [
  {
    tier: 'AWESOME CUPCAKES',
    pricing: '$40/dozen regular size | $45/two dozen minis (one flavour)',
    flavors: [
      {
        name: 'Celebrate',
        description: 'Vanilla or Chocolate cake with vanilla buttercream topped with rainbow sprinkles',
      },
      {
        name: 'Party',
        description: 'Vanilla or Chocolate cake with chocolate buttercream topped with rainbow sprinkles',
      },
    ],
  },
  {
    tier: 'EVEN MORE AWESOME CUPCAKES',
    pricing: '$45/dozen regular size | $50/two dozen minis (one flavour)',
    flavors: [
      { name: 'Classic Red', description: 'Red velvet cake with cream cheese buttercream' },
      { name: 'Cookies & Cream', description: 'Vanilla or chocolate cake topped with Oreo crumbled buttercream' },
      { name: 'Tea Time', description: 'Green tea cupcake with green tea buttercream' },
      { name: 'Coco', description: 'Coconut cake with coconut buttercream' },
      { name: 'Salted Caramel', description: 'Chocolate cake with salted homemade caramel buttercream' },
      { name: 'Caffè', description: 'Chocolate cake with coffee buttercream' },
      { name: 'Cookie B', description: 'Vanilla or chocolate cake with cookie butter buttercream' },
    ],
  },
  {
    tier: 'MOST AWESOME CUPCAKES',
    pricing: '$50/dozen regular size | $55/two dozen minis (one flavour)',
    flavors: [
      { name: 'Sweet Strawberry', description: 'Vanilla or chocolate cake with buttercream made with real strawberries' },
      { name: 'Mango Madness', description: 'Mango cake with mango buttercream (seasonal)' },
      { name: 'Durian Delight', description: 'Durian cake with durian buttercream' },
      { name: 'Lemonlicious', description: 'Lemon cake with vanilla buttercream and homemade lemon curd' },
      { name: 'Strawberry Lemonade', description: 'Lemon cake with real strawberry buttercream' },
      { name: 'Black & Yellow', description: 'Black sesame cake with salted egg yolk buttercream' },
      { name: 'Thai Tea', description: 'Thai Tea cake with condensed milk buttercream' },
      { name: 'Raspberry Yuzu', description: 'Yuzu cupcake with Raspberry buttercream' },
    ],
  },
];

export const COOKIES_AND_MACARONS = {
  cookies: {
    title: 'COOKIES',
    pricing: '$25/dozen (one flavour)',
    flavors: [
      'Chocolate Chip',
      'Mint Chocolate',
      'Snickerdoodle',
      'Red Velvet',
      'Funfetti',
      'White Chocolate Chip',
      'Toffee Chocolate Oatmeal',
    ],
    platter: 'The Awesome Cookie Platter - $75 for 40 cookies',
    platterNote: '*any 3 flavours',
  },
  macarons: {
    title: 'MACARONS',
    pricing: '$35/dozen (one flavour)',
    flavors: [
      'Vanilla',
      'Lemon',
      'Coconut',
      'Durian',
      'Green Tea',
      'Hazelnut',
      'Red Velvet',
      'Black Sesame',
      'Mint Chocolate',
      'Chocolate ganache',
      'Salted Caramel',
      'White Rabbit',
      'Thai Milk Tea',
      'Vietnamese Coffee',
    ],
  },
  customSugarCookies: {
    title: 'CUSTOM SUGAR COOKIES',
    pricing: 'Min. 12 cookies per order',
    lines: [
      'Available in vanilla or chocolate flavour. We have a large variety of shapes.',
      'These are great for showers, birthdays, and weddings.',
      'Each cookie starts at $5.',
      'Individual packaging is available starting at $0.75 each.',
      'Please give 2 weeks notice.',
    ],
  },
};

export const FAQ_ITEMS = [
  {
    question: 'Where are you located and where is the pick up location?',
    answer:
      'We serve the York Region and Greater Toronto Area! Our pick-up location is in Aurora, Ontario.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Send us a message about what you would like to order. The more detailed the better. To prevent disappointment, orders should be placed at least two weeks in advance. A rush fee may apply on some orders.',
  },
  {
    question: 'Can I customize my cake or cookie design?',
    answer:
      'Yes, of course! Every single creation is baked and decorated to order. Share your color palette, theme, invitation, or inspiration photos and we will design something uniquely yours.',
  },
  {
    question: 'How do payments and deposits work?',
    answer:
      'All orders are paid through e-transfers. Orders under $200 must be paid in full at the time of confirmation to secure your date and order. Orders above $200 require a 50% non-refundable deposit with the remaining balance to be paid 14 days before delivery/pick up date. Please keep in mind, orders can be withdrawn if payment is not made within the appropriate time.',
  },
  {
    question: 'If there isn\'t a flavour I see on your menu, can I request it?',
    answer:
      'Depending on your request we may be able to do it.',
  },
  {
    question: 'Do you offer cake tastings?',
    answer:
      'We only offer cake tasting for wedding cakes if you have already booked and paid a deposit with us.',
  },
  {
    question: 'Are you a nut-free, gluten-free, or dairy-free bakery?',
    answer:
      'We do not operate in a nut-free facility, though we take every precaution to prevent cross-contamination. At this moment, we do not offer gluten-free or dairy-free baked goods.',
  },
  {
    question: 'Do you offer delivery?',
    answer:
      'Yes, we do. Delivery fee depends on the location.',
  },
];
