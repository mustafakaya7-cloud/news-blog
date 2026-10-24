export default function HaberKarti({ haber }) {
  // Geriye dönük uyumluluk: eski "resim" alanı varsa da çalışsın
  const resimler = haber.resimler || (haber.resim ? [haber.resim] : []);
  const coklu = resimler.length > 1;

  return (
    <article className="bg-black border border-x-border rounded-2xl overflow-hidden hover:border-gray-600 transition-colors h-full flex flex-col">

      {/* İçerik: Başlık (büyük harf) + Özet */}
      <div className="px-4 pt-4 pb-3">
        <h2 className="text-white text-[17px] font-extrabold uppercase leading-tight tracking-tight mb-2">
          {haber.baslik}
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
          {haber.ozet}
        </p>
      </div>

      {/* Görseller: yatay kaydırma carousel */}
      <div className="px-3 pb-3">
        <div
          className={`flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide ${
            coklu ? "" : ""
          }`}
        >
          {resimler.map((src, i) => (
            <div
              key={i}
              className="relative snap-center flex-shrink-0 w-full rounded-xl overflow-hidden border border-x-border bg-x-hover"
            >
              <img
                src={src}
                alt={`${haber.baslik} — görsel ${i + 1}`}
                className="w-full aspect-video object-cover"
              />

              {/* Çoklu görselde sağ üstte sayaç */}
              {coklu && (
                <span className="absolute top-2 right-2 bg-black/70 backdrop-blur text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  {i + 1}/{resimler.length}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Alt Bilgi: Avatar + Kaynak + Kategori + Zaman */}
      <div className="flex items-center gap-2.5 px-4 pt-1 pb-2">
        <div className="w-7 h-7 rounded-full bg-x-red flex items-center justify-center flex-shrink-0 text-white font-bold text-[10px]">
          HM
        </div>
        <span className="text-white/90 font-semibold text-xs">HABERMUĞLA</span>
        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
        <span className="text-x-red font-bold uppercase tracking-wide text-xs">
          {haber.kategori}
        </span>
        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
        <span className="text-x-muted text-xs">{haber.zaman}</span>
      </div>

      {/* Aksiyon Satırı: Sadece Beğeni + Paylaş */}
      <div className="flex items-center justify-between px-4 py-2.5 border-t border-x-border mt-auto">

        <button
          className="flex items-center gap-1.5 text-x-muted hover:text-pink-500 transition-colors group"
          aria-label="Beğen"
        >
          <svg
            className="w-[18px] h-[18px] transition-transform group-active:scale-90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span className="text-xs font-medium">156</span>
        </button>

        <button
          className="text-x-muted hover:text-x-blue transition-colors group"
          aria-label="Paylaş"
        >
          <svg
            className="w-[18px] h-[18px] transition-transform group-active:scale-90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" x2="12" y1="2" y2="15" />
          </svg>
        </button>

      </div>
    </article>
  );
}