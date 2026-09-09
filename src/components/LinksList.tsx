import type { Post } from '../types';
import { PostCard } from './PostCard';

export function LinksList({ posts }: { posts: Post[] }) {
  if (!posts?.length) return null;
  const [hero, ...rest] = posts;
  return (
    <div className="w-full mt-8 grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <PostCard post={hero} index={0} hero />
      </div>
      {rest.map((post, i) => (
        <PostCard key={post.id} post={post} index={i + 1} />
      ))}
    </div>
  );
}
