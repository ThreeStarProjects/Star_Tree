import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Music2,
  Github,
  Youtube,
  Twitch,
  Mail,
  Link as LinkIcon,
  LucideIcon,
} from 'lucide-react';
import type { SocialLink } from '../types';

const ICONS: Record<string, LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  x: Twitter,
  tiktok: Music2,
  music: Music2,
  github: Github,
  youtube: Youtube,
  twitch: Twitch,
  mail: Mail,
  email: Mail,
};

export function SocialLinks({ links }: { links: SocialLink[] }) {
  if (!links?.length) return null;

  return (
    <nav aria-label="Social media" className="flex flex-wrap justify-center gap-4 mt-4">
      {links.map((link) => {
        const Icon = ICONS[link.platform.toLowerCase()] ?? LinkIcon;
        const label = link.label ?? link.platform;
        return (
          <a
            key={link.platform + link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2 rounded-full transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </nav>
  );
}
