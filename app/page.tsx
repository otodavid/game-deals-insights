import GameDeals from "@/components/game-deals";
import HeroSection from "@/components/hero";
import PriceAlert from "@/components/price-alerts";
import StatsCard from "@/components/stats-card";

export default function Home() {
  const statsData = [
    {
      id: 1,
      title: "total Active Deals",
      value: 1493,
      description: "curated from 5 major stores",
      url: "#",
    },
    {
      id: 2,
      title: "average discount",
      value: "37",
      description: "Taken from 60 most discounted games ",
      url: "#",
    },
    {
      id: 3,
      title: "total Active Deals",
      value: 1.99,
      description: "cyberpunk on steam",
      url: "#",
    },
    {
      id: 4,
      title: "average savings",
      value: 12.99,
      description: "curated from 5 major stores",
      url: "#",
    },
  ];

  return (
    <div className="px-3 space-y-8 mt-8">
      <div className="grid grid-cols-1 gap-8 2xl:grid-cols-[1fr_20rem] md:gap-8 justify-between">
        <HeroSection />
        <PriceAlert />
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-8">
          {statsData.map((stats) => (
            <div key={stats.id}>
              <StatsCard
                id={stats.id}
                title={stats.title}
                url={stats.url}
                value={stats.value}
                description={stats.description}
              />
            </div>
          ))}
        </div>

        <GameDeals />
      </div>
    </div>
  );
}
