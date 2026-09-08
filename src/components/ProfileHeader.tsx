import { MoreHorizontal } from 'lucide-react';
import type { Profile, SocialLink } from '../types';
import { SocialLinks } from './SocialLinks';

interface Props {
  profile: Profile;
  socialLinks: SocialLink[];
}

export function ProfileHeader({ profile, socialLinks }: Props) {
  return (
    <header className="w-full flex flex-col items-center text-center px-4 pt-8 pb-6 relative">
      <button
        type="button"
        aria-label="Options"
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
      >
        <MoreHorizontal className="w-6 h-6" />
      </button>

      <img
        src={profile.avatar}
        alt={`${profile.name} avatar`}
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        loading="eager"
      />

      <h1 className="mt-4 text-2xl md:text-3xl font-bold">{profile.name}</h1>
      {profile.handle && <p className="text-sm opacity-80">{profile.handle}</p>}
      {profile.bio && <p className="mt-2 max-w-sm text-sm md:text-base">{profile.bio}</p>}

      <SocialLinks links={socialLinks} />
    </header>
  );
}
