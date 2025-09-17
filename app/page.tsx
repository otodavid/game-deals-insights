import GameDeals from "@/components/game-deals";
import HeroSection from "@/components/hero";
import InsightsSection from "@/components/insights-section";
import PriceAlert from "@/components/price-alerts";

export default function Home() {
  return (
    <div className="px-3 space-y-8 mt-8">
      <div className="@container">
        <div className="grid grid-cols-1 gap-8 @5xl:grid-cols-[1fr_.3fr] md:gap-8 justify-between items-stretch">
          <HeroSection />
          <PriceAlert />
        </div>
      </div>

      <div className="mb-8 space-y-8">
        <InsightsSection />

        <GameDeals />
      </div>
    </div>
  );
}
