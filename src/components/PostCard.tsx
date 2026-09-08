import type { Post } from '../types';

export function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-white text-neutral-900 rounded-2xl border-[3px] border-neutral-900 px-4 py-3 shadow-[0_4px_0_rgb(23,23,23)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_6px_0_rgb(23,23,23)] active:translate-y-0 active:shadow-[0_2px_0_rgb(23,23,23)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      <div className="flex items-center gap-3">
        {post.emoji && (
          <span className="text-xl" aria-hidden>
            {post.emoji}
          </span>
        )}
        <span className="text-base font-semibold leading-snug">{post.title}</span>
      </div>
    </a>
  );
}
