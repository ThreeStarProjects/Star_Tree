export type SocialPlatform =
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'twitter'
  | 'tiktok'
  | 'github'
  | 'youtube'
  | 'twitch'
  | 'mail';

export interface SocialLink {
  platform: SocialPlatform | string;
  url: string;
  label?: string;
}

export interface Profile {
  name: string;
  handle: string;
  bio: string;
  avatar: string;
  backgroundColor: string;
  backgroundGradient?: string;
  textColor: string;
}

export interface Post {
  id: number | string;
  title: string;
  url: string;
  emoji?: string;
}

export interface Config {
  profile: Profile;
  socialLinks: SocialLink[];
  recentPosts: Post[];
}
