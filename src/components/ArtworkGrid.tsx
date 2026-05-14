import { useState } from 'react';
import type { Artwork } from '../data/artworks';

interface ArtworkGridProps {
  artworks: Artwork[];
}

export default function ArtworkGrid({ artworks }: ArtworkGridProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <div className="artwork-grid">
      {artworks.map((artwork, index) => (
        <button
          key={artwork.id}
          onClick={() => setSelectedArtwork(artwork)}
          className="artwork-card group relative overflow-hidden rounded-lg cursor-pointer bg-[#F5F3EF]"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="gallery-image w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Overlay con título */}
          <div className="artwork-overlay absolute inset-x-0 bottom-0 p-4 flex items-end">
            <span className="text-white font-body text-sm font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              {artwork.title}
            </span>
          </div>

          {/* Borde en hover */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#A67B5B] rounded-lg transition-colors duration-300 pointer-events-none" />
        </button>
      ))}
    </div>
  );
}