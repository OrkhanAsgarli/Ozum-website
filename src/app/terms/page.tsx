import Link from "next/link";
import {
  LEGAL_UPDATED_AT,
  TERMS_OF_USE,
} from "../constants/legal";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#090A10] px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-violet-400">
          ← OZUM
        </Link>

        <h1 className="mt-8 text-3xl font-bold">
          İstifadə şərtləri
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Son yenilənmə: {LEGAL_UPDATED_AT}
        </p>

        <div className="mt-8 whitespace-pre-wrap leading-8 text-gray-300">
          {TERMS_OF_USE.trim()}
        </div>
      </article>
    </main>
  );
}