import LocationMapPicker from "./LocationMapPicker";

export default function GisCapture({
  onChange,
}) {
  return (
    <div>
      <h4>Geospatial Intelligence Capture</h4>

      <LocationMapPicker onSelect={onChange} />
    </div>
  );
}