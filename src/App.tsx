import { ConfigProvider, useConfig } from './context/ConfigContext';
import { ProfileHeader } from './components/ProfileHeader';
import { SpotlightCard } from './components/SpotlightCard';
import { RecentPostsSection } from './components/RecentPostsSection';

function Page() {
  const { config, loading, error } = useConfig();

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-100 text-neutral-600">
        Loading…
      </main>
    );
  }

  if (error || !config) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 text-neutral-700 p-6 text-center">
        <h1 className="text-xl font-bold mb-2">Could not load profile</h1>
        <p className="text-sm opacity-80">{error ?? 'Missing config.json'}</p>
      </main>
    );
  }

  const { profile, socialLinks, spotlight, recentPosts } = config;
  const background =
    profile.backgroundGradient ?? profile.backgroundColor ?? '#FF6B5B';

  return (
    <main
      className="min-h-screen w-full py-6 px-4"
      style={{ background, color: profile.textColor ?? '#FFFFFF' }}
    >
      <div className="mx-auto w-full max-w-[500px]">
        <ProfileHeader profile={profile} socialLinks={socialLinks} />
        <SpotlightCard spotlight={spotlight} />
        <RecentPostsSection posts={recentPosts} />
        <footer className="mt-10 pb-4 text-center text-xs opacity-70">
          Built with Star Tree
        </footer>
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
