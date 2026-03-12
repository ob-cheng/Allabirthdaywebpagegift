import { MapPin, Clock, CalendarDays, Utensils, AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageContext";

const RESTAURANT_IMG = "https://images.unsplash.com/photo-1759893497863-c90a6dfa7a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwd2FybSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3MzMzMTI1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function DinnerBriefing() {
  const { t } = useLanguage();

  return (
    <section className="mb-8 border-2 border-[#2a2a2a] p-4 sm:p-6 bg-[#faf6ee]">
      {/* Banner */}
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-4 h-4 text-[#c41e1e]" />
        <span
          className="bg-[#c41e1e] text-white px-2 py-0.5 uppercase tracking-[0.2em]"
          style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.65rem", fontWeight: 700 }}
        >
          {t("dinner.developing")}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
          fontWeight: 900,
          color: "#1a1a1a",
          lineHeight: 1.2,
        }}
      >
        {t("dinner.headline")}
      </h3>
      <p
        className="italic mt-1 mb-4"
        style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.85rem", color: "#666" }}
      >
        {t("dinner.sub")}
      </p>

      <ImageWithFallback
        src={RESTAURANT_IMG}
        alt="Restaurant interior"
        className="w-full h-48 object-cover grayscale-[30%] contrast-[1.1] mb-4"
      />
      <p className="mb-4 text-center italic" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.625rem", color: "#888" }}>
        {t("dinner.fig2")}
      </p>

      {/* Details grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
        <div className="flex items-start gap-3">
          <Utensils className="w-5 h-5 text-[#c41e1e] mt-0.5 shrink-0" />
          <div>
            <p className="uppercase tracking-wider" style={{ fontSize: "0.75rem", color: "#888" }}>{t("dinner.venue_label")}</p>
            <p style={{ fontSize: "0.95rem", color: "#2a2a2a", fontWeight: 700 }}>{t("dinner.venue")}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#c41e1e] mt-0.5 shrink-0" />
          <div>
            <p className="uppercase tracking-wider" style={{ fontSize: "0.75rem", color: "#888" }}>{t("dinner.location_label")}</p>
            <p style={{ fontSize: "0.95rem", color: "#2a2a2a" }}>{t("dinner.location")}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CalendarDays className="w-5 h-5 text-[#c41e1e] mt-0.5 shrink-0" />
          <div>
            <p className="uppercase tracking-wider" style={{ fontSize: "0.75rem", color: "#888" }}>{t("dinner.date_label")}</p>
            <p style={{ fontSize: "0.95rem", color: "#2a2a2a" }}>{t("dinner.date")}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-[#c41e1e] mt-0.5 shrink-0" />
          <div>
            <p className="uppercase tracking-wider" style={{ fontSize: "0.75rem", color: "#888" }}>{t("dinner.time_label")}</p>
            <p style={{ fontSize: "0.95rem", color: "#2a2a2a" }}>{t("dinner.time")}</p>
          </div>
        </div>
      </div>

      {/* Dress code */}
      <div className="mt-4 pt-3 border-t border-dashed border-[#ccc]">
      </div>
    </section>
  );
}