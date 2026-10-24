import HaberKarti from "./components/HaberKarti";
import { haberler } from "./data/haberler";

export default function AnaSayfa() {
  return (
    <div className="min-h-screen bg-black pb-10">

      {/* Kategori Sekmeleri */}
      <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-x-border flex gap-2 px-4 py-2.5 overflow-x-auto scrollbar-hide">
        {["Tümü", "Gündem", "Teknoloji", "Spor", "Ekonomi", "Kültür", "Dünya", "Sağlık"].map(
          (kategori, index) => (
            <button
              key={kategori}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition ${
                index === 0
                  ? "bg-white text-black"
                  : "bg-x-hover text-x-muted hover:bg-gray-800 hover:text-white"
              }`}
            >
              {kategori}
            </button>
          )
        )}
      </nav>

      {/* Haber Akışı */}
      <main className="max-w-2xl mx-auto px-4 py-4 grid grid-cols-1 gap-3.5">
        {haberler.map((haber) => (
          <HaberKarti key={haber.id} haber={haber} />
        ))}
      </main>

      <p className="text-center text-sm text-x-muted py-6">
        — Tüm haberleri gördünüz —
      </p>
    </div>
  );
}