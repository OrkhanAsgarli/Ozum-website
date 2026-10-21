import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090A10] text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          OZUM<span className="text-violet-400">.</span>
        </h1>

        <p className="mt-5 text-xl text-gray-300">
         bir toxunuşla !
        </p>

        <p className="mt-4 text-gray-400">
          NFC texnologiyası ilə əlaqə məlumatlarını,
          sosial şəbəkələrini və rəqəmsal profilini
          rahat şəkildə paylaş.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/privacy"
            className="rounded-xl bg-violet-500 px-6 py-3 font-medium"
          >
            Məxfilik siyasəti
          </Link>

          <Link
            href="/terms"
            className="rounded-xl border border-gray-600 px-6 py-3"
          >
            İstifadə şərtləri
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-6 text-sm text-gray-500">
        © {new Date().getFullYear()} OZUM ·  <a href="https://orkhanasgarli.vercel.app/">Orkhan Asgarli</a> 
      </footer>
    </main>
  );
}