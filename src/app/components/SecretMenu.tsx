import { useState } from "react";
import { Lock, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageContext";

const FOOD_IMG = "https://images.unsplash.com/photo-1551851300-1fd39219a668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGRpbSUyMHN1bSUyMGR1bXBsaW5ncyUyMHRhYmxlfGVufDF8fHx8MTc3MzMzMTI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const menuItemKeys = [
  { nameKey: "menu.item1.name", commentKey: "menu.item1.comment", classified: false },
  { nameKey: "menu.item2.name", commentKey: "menu.item2.comment", classified: false },
  { nameKey: "menu.item3.name", commentKey: "menu.item3.comment", classified: false },
  { nameKey: "menu.item4.name", commentKey: "menu.item4.comment", classified: false },
  { nameKey: "menu.item5.name", commentKey: "menu.item5.comment", classified: false },
  { nameKey: "menu.item6.name", commentKey: "menu.item6.comment", classified: false },
  { nameKey: "menu.item7.name", commentKey: "menu.item7.comment", classified: false },
  { nameKey: "menu.item8.name", commentKey: "menu.item8.comment", classified: false },
  { nameKey: "menu.item9.name", commentKey: "menu.item9.comment", classified: false },
  { nameKey: "menu.item10.name", commentKey: "menu.item10.comment", classified: false },
  { nameKey: "menu.item11.name", commentKey: "menu.item11.comment", classified: false },
  { nameKey: "menu.item12.name", commentKey: "menu.item12.comment", classified: false },
  { nameKey: "menu.item13.name", commentKey: "menu.item13.comment", classified: false },
  { nameKey: "menu.item14.name", commentKey: "menu.item14.comment", classified: false },
];

export function SecretMenu() {
  const [revealed, setRevealed] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="mb-8">
      <h3
        className="border-b-2 border-[#2a2a2a] pb-1 mb-4 uppercase tracking-[0.15em]"
        style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.8rem", fontWeight: 700, color: "#2a2a2a" }}
      >
        {t("menu.section")}
      </h3>

      {/* Top Secret Header */}
      <div className="relative border-2 border-dashed border-[#c41e1e] p-4 sm:p-6 bg-[#fdf8f0]">
        {/* Stamps */}
        <div
          className="absolute top-3 right-3 rotate-[-12deg] border-2 border-[#c41e1e] px-2 py-1 opacity-40"
          style={{ fontFamily: "'Special Elite', monospace", fontSize: "0.9rem", color: "#c41e1e" }}
        >
          {t("menu.topsecret")}
        </div>
        <div
          className="absolute bottom-3 left-3 rotate-[8deg] border-2 border-[#c41e1e] px-2 py-1 opacity-30 hidden sm:block"
          style={{ fontFamily: "'Special Elite', monospace", fontSize: "0.75rem", color: "#c41e1e" }}
        >
          {t("menu.classified_stamp")}
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Lock className="w-4 h-4 text-[#c41e1e]" />
          <h4
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              fontWeight: 900,
              color: "#1a1a1a",
            }}
          >
            {t("menu.title")}
          </h4>
        </div>

        <p
          className="italic mb-4"
          style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.8rem", color: "#666" }}
        >
          {t("menu.intro")}
        </p>

        {/* Reveal button */}
        {!revealed && (
          <button
            onClick={() => setRevealed(true)}
            className="flex items-center gap-2 mx-auto mb-4 bg-[#2a2a2a] text-[#f5f0e1] px-5 py-2.5 hover:bg-[#444] transition-colors cursor-pointer"
            style={{ fontFamily: "'Special Elite', monospace", fontSize: "0.85rem" }}
          >
            <Eye className="w-4 h-4" />
            {t("menu.declassify")}
          </button>
        )}

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
            >
              <ImageWithFallback
                src={FOOD_IMG}
                alt="Chinese food spread"
                className="w-full h-52 object-cover grayscale-[20%] contrast-[1.1] mb-4"
              />
              <p className="mb-4 text-center italic" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.625rem", color: "#888" }}>
                {t("menu.fig3")}
              </p>

              <div className="space-y-0">
                {menuItemKeys.map((item, i) => (
                  <motion.div
                    key={item.nameKey}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`grid grid-cols-[2rem_1fr] gap-x-2 gap-y-1 py-3 ${
                      i < menuItemKeys.length - 1 ? "border-b border-dotted border-[#ccc]" : ""
                    }`}
                  >
                    {/* Number */}
                    <span
                      className="text-right pt-0.5"
                      style={{ fontFamily: "'Special Elite', monospace", fontSize: "0.75rem", color: "#aaa" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Dish name */}
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: item.classified ? "#c41e1e" : "#2a2a2a",
                      }}
                    >
                      {item.classified ? (
                        <span className="flex items-center gap-1">
                          <Lock className="w-3 h-3 inline" /> {t(item.nameKey)}
                        </span>
                      ) : (
                        t(item.nameKey)
                      )}
                    </span>

                    {/* Spacer for number column */}
                    <span />

                    {/* Comment */}
                    <span
                      className="italic"
                      style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.8rem", color: "#777", lineHeight: 1.5 }}
                    >
                      {t(item.commentKey)}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p
                className="mt-4 pt-3 border-t border-[#ddd] text-center"
                style={{ fontFamily: "'Special Elite', monospace", fontSize: "0.75rem", color: "#999" }}
              >
                {t("menu.notice")}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}