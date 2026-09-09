import { ArrowUpRight } from 'lucide-react';
import type { Post } from '../types';

const TILTS = ['-rotate-2', '-rotate-1', 'rotate-1', 'rotate-2', '-rotate-1', 'rotate-1'];

interface Props {
  post: Post;
  index: number;
  hero?: boolean;
}

export function PostCard({ post, index, hero = false }: Props) {
  const tilt = TILTS[index % TILTS.length];
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-full items-center justify-between gap-3 rounded-2xl border-[3px] border-[#1F4E79] bg-white text-[#1F4E79] px-4 py-4 shadow-[0_4px_0_#1F4E79] transform ${tilt} transition-all duration-300 ease-out hover:rotate-0 hover:-translate-y-1 hover:border-[#F47C2C] hover:shadow-[0_8px_0_#F47C2C] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${hero ? 'sm:min-h-[110px]' : ''}`}
    >
      <span className={`font-semibold leading-snug ${hero ? 'text-lg md:text-xl' : 'text-base'}`}>
        {post.emoji && <span aria-hidden className="mr-2">{post.emoji}</span>}
        {post.title}
      </span>
      <ArrowUpRight className="shrink-0 w-5 h-5 text-[#F47C2C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
