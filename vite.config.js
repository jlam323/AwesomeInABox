import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function instagramLiveFeedPlugin() {
  const configureMiddleware = (server) => {
    server.middlewares.use('/api/ig-image', async (req, res) => {
      try {
        const urlObj = new URL(req.url, 'http://localhost');
        const targetUrl = urlObj.searchParams.get('url');
        if (!targetUrl || !targetUrl.startsWith('https://')) {
          res.statusCode = 400;
          res.end('Invalid URL');
          return;
        }
        const upstream = await fetch(targetUrl, {
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          },
        });
        if (!upstream.ok) {
          res.statusCode = upstream.status;
          res.end('Upstream error');
          return;
        }
        res.setHeader('Content-Type', upstream.headers.get('content-type') || 'image/jpeg');
        res.setHeader('Cache-Control', 'public, max-age=3600');
        const buf = Buffer.from(await upstream.arrayBuffer());
        res.end(buf);
      } catch (err) {
        res.statusCode = 500;
        res.end('Proxy error');
      }
    });

    server.middlewares.use('/api/instagram-live', async (req, res) => {
      try {
        const embedRes = await fetch('https://www.instagram.com/awesomeinabox/embed', {
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          },
        });
        const html = await embedRes.text();
        const match = html.match(/"contextJSON":"(\{\\"context\\".*?\})"\}\]/);
        if (!match) {
          res.statusCode = 404;
          res.end(JSON.stringify({ posts: [] }));
          return;
        }
        const parsed = JSON.parse(JSON.parse(`"${match[1]}"`));
        const media = parsed?.context?.graphql_media || [];
        const posts = media.map((item) => {
          const s = item.shortcode_media;
          const caption = s.edge_media_to_caption?.edges?.[0]?.node?.text || '';
          return {
            id: s.id || s.shortcode,
            shortcode: s.shortcode,
            permalink: `https://www.instagram.com/p/${s.shortcode}/`,
            imageUrl: `/api/ig-image?url=${encodeURIComponent(s.display_url)}`,
            caption,
            likes: s.edge_liked_by?.count ?? 0,
            comments: s.edge_media_to_comment?.count ?? 0,
            timestamp: s.taken_at_timestamp ? s.taken_at_timestamp * 1000 : Date.now(),
            isVideo: !!s.is_video,
          };
        });
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ posts }));
      } catch (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ posts: [] }));
      }
    });
  };

  return {
    name: 'instagram-live-feed-plugin',
    configureServer: configureMiddleware,
    configurePreviewServer: configureMiddleware,
  };
}

export default defineConfig({
  plugins: [react(), instagramLiveFeedPlugin()],
  server: {
    port: 5173,
    open: false,
  },
});
