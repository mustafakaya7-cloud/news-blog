import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "latin-ext"], // latin-ext → Türkçe karakterler (ğ, ş, ı, İ, ç, ö, ü)
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "HaberMuğla",
  description: "Muğla ve bölgesinden son dakika haberleri",
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${rubik.variable} antialiased min-h-screen bg-black text-[#e7e9ea]`}
      >
        {/* Header — X/Twitter tarzı sticky */}
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-x-border">
          <div className="max-w-2xl mx-auto flex items-center justify-between px-4 h-14">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-x-red flex items-center justify-center text-white font-bold text-xs">
                HM
              </div>
              <span className="text-white font-bold text-[15px] tracking-tight">
                HaberMuğla
              </span>
            </div>

            <div className="flex items-center gap-3 text-x-muted">
              <button className="hover:text-white transition-colors" aria-label="Ara">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              <button className="hover:text-white transition-colors" aria-label="Bildirimler">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}