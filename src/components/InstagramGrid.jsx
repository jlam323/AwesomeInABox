import React, { useState, useEffect } from 'react';
import {
  Heart,
  MessageCircle,
  ExternalLink,
  Plus,
  X,
  Sparkles,
} from 'lucide-react';
import Instagram from './InstagramIcon';
import { BRAND_INFO } from '../data/bakeryData';
import {
  fetchInstagramPosts,
  INSTAGRAM_PROFILE_URL,
} from '../services/instagramService';
import './InstagramGrid.css';

export default function InstagramGrid({ onInquireFromPost }) {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchInstagramPosts().then((loaded) => {
      setPosts(loaded);
    });
  }, []);

  const displayedPosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <section id="gallery" className="ig-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
        </div>

        {/* Live Instagram Feed Widget Container */}
        <div className="ig-live-embed-wrapper">
          <div className="ig-live-embed-header">
            <div className="ig-embed-profile-row">
              <img
                src="/ig/avatar.jpg"
                alt="@awesomeinabox"
                className="ig-embed-avatar"
              />
              <div>
                  <h5 className="ig-embed-title">
                      Some of Our Most Recent Creations
                  </h5>
                <p>
                  <a
                    href={INSTAGRAM_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ig-handle-link"
                  >
                    @awesomeinabox
                  </a> • {BRAND_INFO.instagramStats.posts} posts •{' '}
                  {BRAND_INFO.instagramStats.followers} followers
                </p>
              </div>
            </div>
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ig-gradient"
            >
              <Instagram size={16} />
              <span>Follow us!</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* 3-Column Instagram Feed Grid */}
          <div className="ig-feed-grid">
            {displayedPosts.map((post) => (
              <article
                key={post.id}
                className="ig-feed-tile"
                onClick={() => setSelectedPost(post)}
              >
                <img src={post.imageUrl} alt={post.caption || 'Awesome In A Box creation'} loading="lazy" />
                <div className="ig-feed-tile__overlay">
                  <div className="ig-feed-tile__stats">
                    <span>
                      <Heart size={18} fill="currentColor" /> {post.likes}
                    </span>
                    <span>
                      <MessageCircle size={18} fill="currentColor" /> {post.comments}
                    </span>
                  </div>
                  {post.caption && (
                    <p className="ig-feed-tile__caption">{post.caption}</p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Load More Pictures Footer */}
          <div className="ig-feed-footer">
            {hasMore ? (
              <button
                type="button"
                className="btn-primary"
                onClick={() => setVisibleCount((prev) => prev + 6)}
              >
                <Plus size={17} />
                <span>Load More Pictures ({posts.length - visibleCount} more)</span>
              </button>
            ) : (
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Instagram size={16} />
                <span>View All 708+ Posts on Instagram</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal when clicking an Instagram tile */}
      {selectedPost && (
        <div
          className="ig-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPost(null)}
        >
          <div className="ig-lightbox" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="ig-lightbox__close"
              onClick={() => setSelectedPost(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="ig-lightbox__image-col">
              <img src={selectedPost.imageUrl} alt="Awesome In A Box Instagram post" />
            </div>

            <div className="ig-lightbox__details-col">
              <div className="ig-lightbox__author">
                <img
                  src="/ig/avatar.jpg"
                  alt="@awesomeinabox"
                  className="ig-embed-avatar ig-embed-avatar--sm"
                />
                <div>
                  <strong>@awesomeinabox</strong>
                  <span>Aurora, Ontario</span>
                </div>
              </div>

              <div className="ig-lightbox__body">
                <p>{selectedPost.caption}</p>
              </div>

              <div className="ig-lightbox__metrics">
                <span>
                  <Heart size={16} fill="#e1306c" color="#e1306c" /> {selectedPost.likes} likes
                </span>
                <span>
                  <MessageCircle size={16} /> {selectedPost.comments} comments
                </span>
              </div>

              <div className="ig-lightbox__actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    const summary = (selectedPost.caption || 'Instagram Creation')
                      .split('\n')[0]
                      .slice(0, 60);
                    setSelectedPost(null);
                    if (onInquireFromPost) onInquireFromPost(`Instagram Post: ${summary}`);
                  }}
                >
                  <Sparkles size={16} />
                  <span>Request a Cake Like This</span>
                </button>
                <a
                  href={selectedPost.permalink || INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <Instagram size={16} />
                  <span>Open Post on Instagram</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
