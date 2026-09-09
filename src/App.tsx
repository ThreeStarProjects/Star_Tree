import { ConfigProvider, useConfig } from './context/ConfigContext';
import { ProfileHeader } from './components/ProfileHeader';
import { LinksList } from './components/LinksList';

function Page() {
  const { config, loading, error } = useConfig();

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#1F4E79] text-white/80">
        Loading…
      </main>
    );
  }

  if (error || !config) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#1F4E79] text-white p-6 text-center">
        <h1 className="text-xl font-bold mb-2">Could not load profile</h1>
        <p className="text-sm opacity-80">{error ?? 'Missing config.json'}</p>
      </main>
    );
  }

  const { profile, socialLinks, recentPosts } = config;
  const background =
    profile.backgroundGradient ?? profile.backgroundColor ?? '#1F4E79';

  return (
    <main
      className="min-h-screen w-full py-6 px-4"
      style={{ background, color: profile.textColor ?? '#FFFFFF' }}
    >
      <div className="mx-auto w-full max-w-[560px]">
        <ProfileHeader profile={profile} socialLinks={socialLinks} />
        <LinksList posts={recentPosts} />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <ConfigProvider>
      <Page />
    </ConfigProvider>
  );
}
