import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageContext";

const ALLA_ORI_PHOTO = "https://images.unsplash.com/photo-1702337446616-b48157bfc165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGh1Z2dpbmclMjBnb2xkZW4lMjBkb2clMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMzMzgyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CAKE_IMG = "https://images.unsplash.com/photo-1594273255015-6d432e36e488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjZWxlYnJhdGlvbiUyMGNhbmRsZXN8ZW58MXx8fHwxNzczMzMxMjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function LeadStory() {
  const { t, lang } = useLanguage();
  const dropCap = lang === "en" ? "O" : "К";
  const firstParaRest = t("lead.p1");

  return (
    <article className="mb-8">
      <h3
        className="border-b-2 border-[#2a2a2a] pb-1 mb-4 uppercase tracking-[0.15em]"
        style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.8rem", fontWeight: 700, color: "#2a2a2a" }}
      >
        {t("lead.section")}
      </h3>

      <div className="sm:columns-2 gap-6" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.9rem", lineHeight: 1.8, color: "#333" }}>
        <p className="mb-4">
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.2rem", float: "left", lineHeight: 0.8, marginRight: "0.15em", marginTop: "0.1em", fontWeight: 700 }}>{dropCap}</span>
          {firstParaRest.slice(1)}
        </p>

        <div className="mb-4 break-inside-avoid">
          <ImageWithFallback
            src={ALLA_ORI_PHOTO}
            alt="Alla and Ori"
            className="w-full h-48 object-cover grayscale-[30%] contrast-[1.1]"
          />
          <p className="mt-1 text-center italic" style={{ fontSize: "0.625rem", color: "#888" }}>
            {t("lead.fig1")}
          </p>
        </div>

        <p className="mb-4">{t("lead.p2")}</p>
        <p className="mb-4">{t("lead.p3")}</p>
        <p className="mb-4">{t("lead.p4")}</p>
        <p className="mb-4">{t("lead.p5")}</p>
        <p className="mb-4">{t("lead.p6")}</p>

        <p className="italic" style={{ fontSize: "0.8rem", color: "#666" }}>
          {t("lead.byline")}
        </p>
      </div>
    </article>
  );
}