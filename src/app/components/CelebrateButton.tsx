import { useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { PartyPopper } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function CelebrateButton() {
  const [celebrating, setCelebrating] = useState(false);
  const { t } = useLanguage();

  const fireConfetti = useCallback(() => {
    if (celebrating) return;
    setCelebrating(true);

    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#c41e1e", "#FFD700", "#FF69B4", "#00CED1", "#FF8C00"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        setCelebrating(false);
      }
    };

    // Big initial burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors,
    });

    frame();
  }, [celebrating]);

  return (
    <div className="text-center mb-8">
      <div className="border-t-2 border-b-2 border-[#2a2a2a] py-4 bg-[#fdf5f0]">
        <button
          onClick={fireConfetti}
          disabled={celebrating}
          className="inline-flex items-center gap-2 bg-[#c41e1e] text-white px-6 py-3 hover:bg-[#a01818] transition-colors cursor-pointer disabled:opacity-70"
          style={{ fontFamily: "'Special Elite', monospace", fontSize: "1rem" }}
        >
          <PartyPopper className="w-5 h-5" />
          {celebrating ? t("celebrate.celebrating") : t("celebrate.click")}
          <PartyPopper className="w-5 h-5" />
        </button>
        <p
          className="italic mt-2"
          style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.7rem", color: "#999" }}
        >
          {t("celebrate.recommend")}
        </p>
      </div>
    </div>
  );
}
