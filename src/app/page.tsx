
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#090A10] px-6 py-20 text-white">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl">
          OZUM<span className="text-violet-400">.</span>
        </h1>

        <p className="mt-5 text-xl font-medium text-gray-300">
          Bir toxunuşla!
        </p>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-400">
          NFC texnologiyası ilə əlaqə məlumatlarını,
          sosial şəbəkələrini və rəqəmsal profilini
          rahat şəkildə paylaş.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/privacy"
            className="rounded-xl bg-violet-500 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-600"
          >
            Məxfilik siyasəti
          </Link>

          <Link
            href="/terms"
            className="rounded-xl border border-gray-600 px-6 py-3 font-medium text-gray-200 transition-colors hover:border-violet-400 hover:text-white"
          >
            İstifadə şərtləri
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-6 px-4 text-center text-sm text-gray-500">
        © 2026 OZUM ·{" "}
        <a
          href="https://orkhanasgarli.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-violet-400"
        >
          Orkhan Asgarli
        </a>
      </footer>
    </main>
  );
}
