import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      Main Content Space
      <Image
        src="/nav_project.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={32}
        height={32}
        priority
      />
      <Image
        src="/nav_feed.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={32}
        height={32}
        priority
      />
      <Image
        src="/nav_news.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={32}
        height={32}
        priority
      />
      <Image
        src="/nav_profile.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={32}
        height={32}
        priority
      />
    </main>
  );
}
