import { PawPrint, Heart } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function NewspaperFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t-[3px] border-double border-[#2a2a2a] pt-6 mt-8 text-center">
      {/* Big sign-off */}
      <div className="mb-4">
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 900,
            color: "#2a2a2a",
            lineHeight: 1.3,
          }}
        >
          {t("footer.helwoof")}<span style={{ color: "#c41e1e" }}>{t("footer.woof")}</span> <PawPrint className="inline w-6 h-6 sm:w-8 sm:h-8" style={{ color: "#c41e1e" }} />
        </p>
        <p
          className="mt-1"
          style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.85rem", fontStyle: "italic", color: "#888" }}
        >
          {t("footer.happy")}
        </p>
      </div>

      {/* Credits */}
      <div
        className="border-t border-[#ddd] pt-3 pb-6 space-y-1"
        style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.7rem", color: "#aaa" }}
      >
        <p>{t("footer.copyright")}</p>
        <p className="flex items-center justify-center gap-1">
          {t("footer.madewith")} <Heart className="w-3 h-3 inline" style={{ color: "#c41e1e" }} /> {t("footer.madeby")}
        </p>
        <p>{t("footer.prohibited")}</p>
      </div>
    </footer>
  );
}
