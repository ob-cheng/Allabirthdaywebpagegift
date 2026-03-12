import { Cloud, ThermometerSun, Cake, Star, PawPrint } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function WeatherSidebar() {
  const { t } = useLanguage();

  return (
    <aside className="mb-8 border-2 border-[#2a2a2a] bg-[#faf6ee] divide-y divide-[#ddd]">
      {/* Weather */}
      <div className="p-4">
        <h4
          className="uppercase tracking-[0.15em] mb-3 flex items-center gap-2"
          style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.75rem", fontWeight: 700, color: "#2a2a2a" }}
        >
          <Cloud className="w-3.5 h-3.5" />
          {t("weather.forecast")}
        </h4>
        <div className="space-y-2" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.82rem", color: "#555" }}>
          <div className="flex items-center gap-2">
            <Cake className="w-4 h-4 text-[#c41e1e] shrink-0" />
            <span>{t("weather.cake")}</span>
          </div>
          <div className="flex items-center gap-2">
            <ThermometerSun className="w-4 h-4 text-[#c41e1e] shrink-0" />
            <span>{t("weather.compliments")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#c41e1e] shrink-0" />
            <span>{t("weather.funindex")}</span>
          </div>
        </div>
      </div>

      {/* Ori's Horoscope */}
      <div className="p-4">
        <h4
          className="uppercase tracking-[0.15em] mb-3 flex items-center gap-2"
          style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.75rem", fontWeight: 700, color: "#2a2a2a" }}
        >
          <PawPrint className="w-3.5 h-3.5" />
          {t("weather.horoscope")}
        </h4>
        <p
          className="italic"
          style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.82rem", lineHeight: 1.7, color: "#555" }}
          dangerouslySetInnerHTML={{ __html: t("weather.horoscope_text") }}
        />
      </div>

      {/* Important Notices */}
      <div className="p-4">
        <h4
          className="uppercase tracking-[0.15em] mb-3"
          style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.75rem", fontWeight: 700, color: "#2a2a2a" }}
        >
          {t("weather.classifieds")}
        </h4>
        <div
          className="space-y-3"
          style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.78rem", lineHeight: 1.7, color: "#555" }}
        >
          <p dangerouslySetInnerHTML={{ __html: t("weather.lost") }} />
          <p dangerouslySetInnerHTML={{ __html: t("weather.wanted") }} />
          <p dangerouslySetInnerHTML={{ __html: t("weather.forsale") }} />
          <p dangerouslySetInnerHTML={{ __html: t("weather.reminder") }} />
        </div>
      </div>
    </aside>
  );
}
