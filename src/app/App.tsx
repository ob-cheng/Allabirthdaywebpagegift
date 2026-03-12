import { Masthead } from "./components/Masthead";
import { HeroHeadline } from "./components/HeroHeadline";
import { LeadStory } from "./components/LeadStory";
import { DinnerBriefing } from "./components/DinnerBriefing";
import { SecretMenu } from "./components/SecretMenu";
import { PersonsOfInterest } from "./components/PersonsOfInterest";
import { WeatherSidebar } from "./components/WeatherSidebar";
import { CelebrateButton } from "./components/CelebrateButton";
import { NewspaperFooter } from "./components/NewspaperFooter";
import { LanguageProvider } from "./components/LanguageContext";
import { OriTips } from "./components/OriTips";

export default function App() {
  return (
    <LanguageProvider>
      <div
        className="min-h-screen"
        style={{
          backgroundColor: "#f5f0e1",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <Masthead />
          <HeroHeadline />

          {/* Main content area */}
          <div className="lg:flex lg:gap-6">
            <div className="lg:flex-1">
              <LeadStory />
              <DinnerBriefing />
              <SecretMenu />
            </div>
          </div>

          <CelebrateButton />

          {/* Two column: Persons + Weather */}
          <div className="lg:flex lg:gap-6">
            <div className="lg:flex-[2]">
              <PersonsOfInterest />
            </div>
            <div className="lg:flex-1">
              <WeatherSidebar />
              <OriTips />
            </div>
          </div>

          <NewspaperFooter />
        </div>
      </div>
    </LanguageProvider>
  );
}