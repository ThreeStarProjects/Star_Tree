import type { Spotlight } from '../types';
import { PostCard } from './PostCard';

export function SpotlightCard({ spotlight }: { spotlight: Spotlight }) {
  if (!spotlight?.card) return null;
  return (
    <section aria-labelledby="spotlight-heading" className="w-full mt-6">
      <h2 id="spotlight-heading" className="text-lg font-bold mb-3">
        {spotlight.title} <span aria-hidden>✨</span>
      </h2>
      <PostCard post={{ id: 'spotlight', ...spotlight.card }} />
    </section>
  );
}
