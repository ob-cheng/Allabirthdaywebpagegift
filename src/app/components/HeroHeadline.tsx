import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";

export function HeroHeadline() {
  const [ageRevealed, setAgeRevealed] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="mb-8">
      {/* Breaking banner */}
      <div className="bg-[#c41e1e] text-white px-3 py-1 inline-block mb-3">
        <span
          className="tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.7rem", fontWeight: 700 }}
        >
          {t("hero.breaking")}
        </span>
      </div>

      {/* Main headline */}
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
          lineHeight: 1.15,
          fontWeight: 900,
          color: "#1a1a1a",
        }}
      >
        {t("hero.headline_pre")}
        <motion.span
          className="relative cursor-pointer inline-block"
          onClick={() => setAgeRevealed(!ageRevealed)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={ageRevealed ? t("hero.reclassify") : t("hero.declassify")}
        >
          {ageRevealed ? (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: "#c41e1e" }}
            >
              26
            </motion.span>
          ) : (
            <span
              className="inline-block border-2 border-[#c41e1e] px-3 py-0 uppercase tracking-[0.15em]"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "0.45em",
                fontWeight: 700,
                color: "#c41e1e",
                verticalAlign: "middle",
                transform: "rotate(-2deg)",
                position: "relative",
                top: "-0.15em",
              }}
            >
              {t("hero.classified")}
            </span>
          )}
        </motion.span>
        {t("hero.headline_post")}
      </h2>

      {/* Age reveal tooltip */}
      {ageRevealed && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="italic mt-1"
          style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.6875rem", color: "#888" }}
        >
          {t("hero.leaked")}
        </motion.p>
      )}

      {/* Sub headline */}
      <p
        className="mt-3 border-b border-[#ccc] pb-4"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
          fontStyle: "italic",
          lineHeight: 1.4,
          color: "#444",
        }}
      >
        {t("hero.sub")}
      </p>
    </section>
  );
}
