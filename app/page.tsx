import GameDeals from "@/components/game-deals";
import HeroSection from "@/components/hero";
import PriceAlert from "@/components/price-alerts";
import StatsCardList from "@/components/stats-card-list";

export default function Home() {
  return (
    <div className="px-3 space-y-8 mt-8">
      <div className="grid grid-cols-1 gap-8 2xl:grid-cols-[1fr_20rem] md:gap-8 justify-between">
        <HeroSection />
        <PriceAlert />
      </div>

      <div className="mb-8">
        <StatsCardList />

        <GameDeals />
      </div>
    </div>
  );
}
