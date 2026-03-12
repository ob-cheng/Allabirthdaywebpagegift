import { motion } from "motion/react";
import { Crown, DollarSign, Dog, Drumstick, Sparkles, Laugh, Glasses, Heart } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const guestKeys = [
  { key: "alla", name: "Alla", icon: Crown, highlight: true },
  { key: "tianen", name: "Tianen", icon: DollarSign },
  { key: "dima", name: "Dima", icon: Glasses },
  { key: "alina", name: "Alina", icon: Sparkles },
  { key: "andrew", name: "Andrew", icon: Drumstick },
  { key: "evelina", name: "Evelina", icon: Heart },
  { key: "phill", name: "Phill", icon: Laugh },
  { key: "ori", name: "Ori", icon: Dog },
];

export function PersonsOfInterest() {
  const { t } = useLanguage();

  return (
    <section className="mb-8">
      <h3
        className="border-b-2 border-[#2a2a2a] pb-1 mb-4 uppercase tracking-[0.15em]"
        style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.8rem", fontWeight: 700, color: "#2a2a2a" }}
      >
        {t("poi.section")}
      </h3>

      <p
        className="italic mb-5"
        style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.85rem", color: "#666" }}
      >
        {t("poi.intro")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {guestKeys.map((guest, i) => {
          const Icon = guest.icon;
          return (
            <motion.div
              key={guest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`border p-4 ${
                guest.highlight
                  ? "border-[#c41e1e] bg-[#fdf5f0] border-2"
                  : "border-[#ddd] bg-[#faf8f4]"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon
                  className={`w-4 h-4 ${guest.highlight ? "text-[#c41e1e]" : "text-[#888]"}`}
                />
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: guest.highlight ? "#c41e1e" : "#2a2a2a",
                  }}
                >
                  {guest.name}
                </span>
              </div>
              <p
                className="uppercase tracking-[0.15em] mb-2"
                style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.7rem", color: "#999" }}
              >
                {t(`poi.${guest.key}.title`)}
              </p>
              <p
                style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.82rem", lineHeight: 1.7, color: "#555" }}
              >
                {t(`poi.${guest.key}.desc`)}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
