import { PawPrint } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Masthead() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="border-b-[3px] border-double border-[#2a2a2a] pb-4 mb-6">
      {/* Language toggle + Top rule */}
      <div className="flex justify-center gap-1 mb-2">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 cursor-pointer transition-colors ${
            lang === "en"
              ? "bg-[#2a2a2a] text-[#f5f0e1]"
              : "bg-transparent text-[#888] hover:text-[#2a2a2a]"
          }`}
          style={{ fontFamily: "'Special Elite', monospace", fontSize: "0.75rem" }}
        >
          EN
        </button>
        <button
          onClick={() => setLang("ru")}
          className={`px-3 py-1 cursor-pointer transition-colors ${
            lang === "ru"
              ? "bg-[#2a2a2a] text-[#f5f0e1]"
              : "bg-transparent text-[#888] hover:text-[#2a2a2a]"
          }`}
          style={{ fontFamily: "'Special Elite', monospace", fontSize: "0.75rem" }}
        >
          RU
        </button>
      </div>

      {/* Top rule */}
      <div className="border-b border-[#2a2a2a] mb-2 pb-1 flex justify-between items-center px-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
        <span className="italic" style={{ fontSize: "0.6875rem", color: "#555" }}>{t("masthead.est")}</span>
        <span className="italic" style={{ fontSize: "0.6875rem", color: "#555" }}>{t("masthead.edition")}</span>
        <span className="italic hidden sm:inline" style={{ fontSize: "0.6875rem", color: "#555" }}>{t("masthead.price")}</span>
      </div>

      {/* Main masthead */}
      <div className="flex items-center justify-center gap-3 mt-3">
        <PawPrint className="w-8 h-8 text-[#2a2a2a] hidden sm:block" />
        <h1
          className="text-center"
          style={{
            fontFamily: lang === "ru" ? "'Playfair Display', serif" : "'UnifrakturMaguntia', cursive",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            lineHeight: 1.1,
            color: "#2a2a2a",
            fontWeight: lang === "ru" ? 900 : undefined,
          }}
        >
          {t("masthead.title")}
        </h1>
        <PawPrint className="w-8 h-8 text-[#2a2a2a] hidden sm:block" />
      </div>

      {/* Tagline */}
      <p
        className="text-center mt-1 tracking-[0.3em] uppercase"
        style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.7rem", color: "#666" }}
      >
        {t("masthead.tagline")}
      </p>

      {/* Date line */}
      <div className="border-t border-[#2a2a2a] mt-3 pt-2 flex justify-between items-center px-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
        <span style={{ fontSize: "0.6875rem", color: "#555" }}>{t("masthead.date")}</span>
        <span style={{ fontSize: "0.6875rem", color: "#555" }}>{t("masthead.vol")}</span>
        <span style={{ fontSize: "0.6875rem", color: "#555" }}>{t("masthead.location")}</span>
      </div>
    </header>
  );
}