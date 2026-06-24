import AlertsFeed from "./widgets/AlertsFeed";
import RiskRadar from "./widgets/RiskRadar";
import KPIWidget from "./widgets/KPIWidget";
import HeatmapWidget from "./widgets/HeatmapWidget";
import IntelligenceScoreCard from "./widgets/IntelligenceScoreCard";

export default function NationalDashboard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(2, 1fr)",
        gap: 20,
        padding: 20,
      }}
    >
      <AlertsFeed />
      <RiskRadar />

      <KPIWidget />
      <HeatmapWidget />

      <IntelligenceScoreCard />
    </div>
  );
}