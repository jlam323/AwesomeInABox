const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/awesomeinabox/';

/**
 * Additional authentic @awesomeinabox creations from the bakery's portfolio
 * so the Instagram feed loads 15 real photos (5 full rows of 3).
 */
export const ADDITIONAL_AIAB_POSTS = [
  {
    id: 'aiab-local-1',
    shortcode: 'aib-hero1',
    permalink: INSTAGRAM_PROFILE_URL,
    imageUrl: '/aib-hero1.avif',
    caption:
      '👟🔥 Hand-sculpted Nike Air Jordan 1 sneaker cake! Every stitch, lace, and swoosh crafted by hand in edible fondant over our signature sponge. #awesomeinabox #sneakercake #jordan1cake #torontocakes',
    likes: 48,
    comments: 6,
  },
  {
    id: 'aiab-local-2',
    shortcode: 'menu-option1',
    permalink: INSTAGRAM_PROFILE_URL,
    imageUrl: '/menu-option1.jpg',
    caption:
      '🌈🎀 Sanrio friends celebration cake featuring Hello Kitty, My Melody, Cinnamoroll & Kuromi with pastel buttercream drip! #sanriocake #hellokittycake #awesomeinabox #yorkregionbaker',
    likes: 52,
    comments: 8,
  },
  {
    id: 'aiab-local-3',
    shortcode: 'aib-hero2',
    permalink: INSTAGRAM_PROFILE_URL,
    imageUrl: '/aib-hero2.avif',
    caption:
      '💍🌸 Three-tiered ruffled buttercream wedding cake adorned with handcrafted sugar roses. Featured in Style Me Pretty! #weddingcake #torontowedding #awesomeinabox',
    likes: 64,
    comments: 9,
  },
  {
    id: 'aiab-local-4',
    shortcode: 'aib-hero3',
    permalink: INSTAGRAM_PROFILE_URL,
    imageUrl: '/aib-hero3.avif',
    caption:
      '🍬✨ Pastel French macaron gift box! Flavours include White Rabbit Candy, Thai Milk Tea, Uji Matcha, Black Sesame & Vanilla Bean. #macarons #torontodesserts #awesomeinabox',
    likes: 41,
    comments: 5,
  },
  {
    id: 'aiab-local-5',
    shortcode: 'menu-option2',
    permalink: INSTAGRAM_PROFILE_URL,
    imageUrl: '/menu-option2.jpg',
    caption:
      '🌷🧁 Hand-piped buttercream floral cupcakes in blush pink and ivory with edible gold centres. #floralcupcakes #buttercreamflowers #awesomeinabox',
    likes: 39,
    comments: 4,
  },
  {
    id: 'aiab-local-6',
    shortcode: 'aib-hero4',
    permalink: INSTAGRAM_PROFILE_URL,
    imageUrl: '/aib-hero4.avif',
    caption:
      '🌺🏖️ Custom hand-piped tropical beach & hibiscus royal icing sugar cookies for Ava’s 4th birthday! #sugarcookies #royalicingcookies #awesomeinabox',
    likes: 34,
    comments: 3,
  },
  {
    id: 'aiab-local-7',
    shortcode: 'aib-hero6',
    permalink: INSTAGRAM_PROFILE_URL,
    imageUrl: '/aib-hero6.avif',
    caption:
      '💚✨ Emerald, mint, and gold pearl rosette cupcakes baked fresh for a weekend celebration in Aurora! #cupcakes #aurorabakery #awesomeinabox',
    likes: 31,
    comments: 3,
  },
  {
    id: 'aiab-local-8',
    shortcode: 'menu-option3',
    permalink: INSTAGRAM_PROFILE_URL,
    imageUrl: '/menu-option3.jpg',
    caption:
      '🍪🤎 Fresh off the cooling rack! Warm gourmet soft-baked chocolate chip cookies—available by the dozen or in our 40-cookie Awesome Platter. #cookies #freshbaked #awesomeinabox',
    likes: 29,
    comments: 2,
  },
  {
    id: 'aiab-local-9',
    shortcode: 'aib-shoe2',
    permalink: INSTAGRAM_PROFILE_URL,
    imageUrl: '/aib-shoe2.jpg',
    caption:
      '🎬🎂 Another angle of our custom sculpted sneaker cake creation! Let us create something awesome for your next milestone party. #customcake #awesomeinabox #yorkregion',
    likes: 44,
    comments: 5,
  },
];

export async function fetchInstagramPosts() {
  let livePosts = [];

  // 1. Try live Vite middleware endpoint (/api/instagram-live)
  try {
    const res = await fetch('/api/instagram-live');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.posts) && data.posts.length > 0) {
        livePosts = data.posts;
      }
    }
  } catch {
    // Ignore and fall back to static snapshot
  }

  // 2. Fallback to pre-fetched live snapshot (/ig-posts.json)
  if (livePosts.length === 0) {
    try {
      const res = await fetch('/ig-posts.json');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          livePosts = data;
        }
      }
    } catch {
      // Ignore
    }
  }

  return [...livePosts, ...ADDITIONAL_AIAB_POSTS];
}

export { INSTAGRAM_PROFILE_URL };
