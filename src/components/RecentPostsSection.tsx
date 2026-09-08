import type { Post } from '../types';
import { PostCard } from './PostCard';

export function RecentPostsSection({ posts }: { posts: Post[] }) {
  if (!posts?.length) return null;
  return (
    <section aria-labelledby="recent-heading" className="w-full mt-6">
      <h2 id="recent-heading" className="text-lg font-bold mb-3">
        Recent Posts
      </h2>
      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
