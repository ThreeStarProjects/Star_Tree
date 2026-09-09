import type { Profile, SocialLink } from '../types';
import { SocialLinks } from './SocialLinks';

interface Props {
  profile: Profile;
  socialLinks: SocialLink[];
}

export function ProfileHeader({ profile, socialLinks }: Props) {
  return (
    <header className="w-full flex flex-col items-center text-center px-2 pt-8 pb-4">
      <img
        src={profile.avatar}
        alt={`${profile.name} avatar`}
        className="w-28 h-28 rounded-full object-contain bg-white border-4 border-white shadow-md"
        loading="eager"
      />

      <h1 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight">
        {profile.name}
      </h1>

      <SocialLinks links={socialLinks} />
    </header>
  );
}
