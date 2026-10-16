import InterstellarArtwork from "./artworks/InterstellarArtwork";
import DuneArtwork from "./artworks/DuneArtwork";

export default function CinematicArtwork() {
  return (
    <div className="cinematic-artwork" aria-hidden="true">
      <InterstellarArtwork />
      <DuneArtwork />
    </div>
  );
}
