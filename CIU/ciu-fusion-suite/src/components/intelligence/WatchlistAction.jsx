import { Button } from "@mui/material";
import { addToWatchlist } from "../../services/watchlistApi";

export default function WatchlistAction({
  entityId,
  reason = "Linked Intelligence Report",
}) {
  const handleAdd = async () => {
    await addToWatchlist(
      entityId,
      reason
    );
  };

  return (
    <Button
      variant="outlined"
      color="warning"
      onClick={handleAdd}
    >
      Add to Watchlist
    </Button>
  );
}