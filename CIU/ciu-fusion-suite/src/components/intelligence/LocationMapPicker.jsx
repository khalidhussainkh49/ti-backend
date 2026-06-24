import { useState } from "react";
import { Button } from "@mui/material";

export default function LocationMapPicker({
  onSelect,
}) {
  const [coords, setCoords] =
    useState(null);

  const pickLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const data = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };

        setCoords(data);
        onSelect(data);
      }
    );
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={pickLocation}
      >
        Capture Current Location
      </Button>

      {coords && (
        <p>
          Lat: {coords.lat} | Lng:{" "}
          {coords.lng}
        </p>
      )}
    </div>
  );
}