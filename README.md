# Awesome In A Box

Website for [Awesome In A Box](https://www.awesomeinabox.com/), a custom cake and dessert studio in Aurora, ON. Built with React and Vite.

## Getting Started

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

- `src/components/` - Page sections (`Navbar`, `Hero`, `InstagramGrid`, `StorySection`, `MenuSection`, `FaqSection`, `ConnectSection`) and their CSS files
- `src/data/bakeryData.js` - Menu items, story copy, and FAQ entries
- `src/services/instagramService.js` - Instagram feed fetcher with local fallback data
- `public/` - Static images and cached Instagram post data
