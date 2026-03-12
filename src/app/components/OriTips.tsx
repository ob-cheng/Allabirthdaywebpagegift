import { PawPrint } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const tipKeys = ["tips.1", "tips.2", "tips.3", "tips.4"];

export function OriTips() {
  const { t } = useLanguage();

  return (
    <aside className="mb-8 border-2 border-[#2a2a2a] bg-[#faf6ee]">
      <div className="p-4">
        <h4
          className="uppercase tracking-[0.15em] mb-4 flex items-center gap-2"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#2a2a2a",
          }}
        >
          <PawPrint className="w-3.5 h-3.5" />
          {t("tips.title")}
        </h4>
        <ul className="space-y-3">
          {tipKeys.map((key) => (
            <li
              key={key}
              className="flex gap-2"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "0.8rem",
                lineHeight: 1.7,
                color: "#555",
              }}
            >
              <span className="text-[#c41e1e] shrink-0" style={{ fontSize: "0.7rem", lineHeight: 2 }}>
                ■
              </span>
              <span className="italic">{t(key)}</span>
            </li>
          ))}
        </ul>
        <p
          className="mt-4 pt-3 border-t border-[#ddd] text-center italic"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "0.72rem",
            color: "#999",
          }}
        >
          — Ori, Editor-in-Chief & Very Good Boy 🐾
        </p>
      </div>
    </aside>
  );
}