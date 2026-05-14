import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Image as ThreeImage } from '@react-three/drei';
import type { Artwork } from '../data/artworks';

interface Gallery3DProps {
  artworks: Artwork[];
}

interface PaintingFrameProps {
  artwork: Artwork;
  position: [number, number, number];
  rotation: [number, number, number];
  onSelect: (artwork: Artwork) => void;
}

function PaintingFrame({ artwork, position, rotation, onSelect }: PaintingFrameProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group position={position} rotation={rotation}>
      {/* Marco exterior de caoba */}
      <mesh position={[0, 0, -0.02]}>
        <boxGeometry args={[1.8, 1.4, 0.08]} />
        <meshStandardMaterial 
          color="#6B4423" 
          roughness={0.75}
          metalness={0.1}
        />
      </mesh>
      
      {/* Marco interior relieve */}
      <mesh position={[0, 0, 0.015]}>
        <boxGeometry args={[1.7, 1.3, 0.02]} />
        <meshStandardMaterial 
          color="#5D3A1A" 
          roughness={0.8}
        />
      </mesh>
      
      {/* Borde dorado */}
      <mesh position={[0, 0, 0.035]}>
        <boxGeometry args={[1.55, 1.15, 0.01]} />
        <meshStandardMaterial 
          color="#B8860B" 
          roughness={0.3}
          metalness={0.4}
        />
      </mesh>
      
      {/* Miniatura de la obra usando Drei Image */}
      <ThreeImage
        url={encodeURI(artwork.image)}
        scale={[1.45, 1.05]}
        position={[0, 0, 0.045]}
        transparent
        opacity={1}
      />
      
      {/* Área de click invisible */}
      <mesh 
        position={[0, 0, 0.05]}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
        onPointerOut={() => setHovered(false)}
        onClick={(e) => { e.stopPropagation(); onSelect(artwork); }}
      >
        <planeGeometry args={[1.5, 1.1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      
      {/* Título al hover */}
      {hovered && (
        <Html position={[0, 0.9, 0]} center distanceFactor={5}>
          <div className="bg-black/90 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg pointer-events-none border-2 border-amber-600 font-serif">
            {artwork.title}
          </div>
        </Html>
      )}
      
      {/* Spotlight individual */}
      <spotLight
        position={[0, 2.5, 1]}
        angle={0.25}
        penumbra={0.9}
        intensity={hovered ? 2 : 1}
        color="#FFB347"
        castShadow={false}
        distance={6}
        decay={2}
      />
    </group>
  );
}

function GalleryRoom({ artworks, onSelectArtwork }: { artworks: Artwork[]; onSelectArtwork: (a: Artwork) => void }) {
  const wallColor = "#E8DCC8";
  const floorColor = "#8B7355";
  const ceilingColor = "#F5F0E6";

  const ARTWORK_WIDTH = 1.8;
  const SPACING = 0.4;
  const ROW_HEIGHT = 1.6;
  const FIRST_ROW_Y = 1.5;

  const calculateRows = (wallWidth: number, count: number) => {
    const itemsPerRow = Math.floor((wallWidth + SPACING) / (ARTWORK_WIDTH + SPACING));
    const rows: number[][] = [];
    for (let i = 0; i < count; i++) {
      const rowIndex = Math.floor(i / itemsPerRow);
      if (!rows[rowIndex]) rows[rowIndex] = [];
      rows[rowIndex].push(i);
    }
    return rows;
  };

  const FRONTAL_COUNT = 9;
  const LATERAL_COUNT = 8;
  const frontalRows = calculateRows(20, FRONTAL_COUNT);
  const leftRows = calculateRows(12, LATERAL_COUNT);
  const rightRows = calculateRows(12, LATERAL_COUNT);

  return (
    <group>
      {/* ===== PARED FRONTAL ===== */}
      {frontalRows.map((row, rowIndex) => 
        row.map((artworkIndex) => {
          const artwork = artworks[artworkIndex];
          const colIndex = row.indexOf(artworkIndex);
          const xPos = -((row.length - 1) * (ARTWORK_WIDTH + SPACING)) / 2 + colIndex * (ARTWORK_WIDTH + SPACING);
          return (
            <PaintingFrame
              key={artwork.id}
              artwork={artwork}
              position={[xPos, FIRST_ROW_Y + rowIndex * ROW_HEIGHT, -7.8]}
              rotation={[0, 0, 0]}
              onSelect={onSelectArtwork}
            />
          );
        })
      )}
      
      {/* Pared frontal fondo */}
      <mesh position={[0, 1.5, -8]} receiveShadow>
        <planeGeometry args={[20, 4]} />
        <meshStandardMaterial color={wallColor} roughness={0.95} />
      </mesh>
      
      {/* Zócalo pared frontal */}
      <mesh position={[0, 0.2, -7.95]}>
        <boxGeometry args={[20, 0.4, 0.1]} />
        <meshStandardMaterial color="#5D4E37" roughness={0.85} />
      </mesh>
      
      {/* ===== PARED IZQUIERDA ===== */}
      {leftRows.map((row, rowIndex) =>
        row.map((artworkIndex) => {
          const artwork = artworks[9 + artworkIndex];
          const colIndex = row.indexOf(artworkIndex);
          const zPos = -((row.length - 1) * (ARTWORK_WIDTH + SPACING)) / 2 + colIndex * (ARTWORK_WIDTH + SPACING);
          return (
            <PaintingFrame
              key={artwork.id}
              artwork={artwork}
              position={[-9.8, FIRST_ROW_Y + rowIndex * ROW_HEIGHT, zPos]}
              rotation={[0, Math.PI / 2, 0]}
              onSelect={onSelectArtwork}
            />
          );
        })
      )}
      
      {/* Pared izquierda */}
      <mesh position={[-10, 1.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[12, 4]} />
        <meshStandardMaterial color={wallColor} roughness={0.95} />
      </mesh>
      
      {/* Zócalo pared izquierda */}
      <mesh position={[-9.9, 0.2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[12, 0.4, 0.1]} />
        <meshStandardMaterial color="#5D4E37" roughness={0.85} />
      </mesh>
      
      {/* ===== PARED DERECHA ===== */}
      {rightRows.map((row, rowIndex) =>
        row.map((artworkIndex) => {
          const artwork = artworks[17 + artworkIndex];
          const colIndex = row.indexOf(artworkIndex);
          const zPos = -((row.length - 1) * (ARTWORK_WIDTH + SPACING)) / 2 + colIndex * (ARTWORK_WIDTH + SPACING);
          return (
            <PaintingFrame
              key={artwork.id}
              artwork={artwork}
              position={[9.8, FIRST_ROW_Y + rowIndex * ROW_HEIGHT, zPos]}
              rotation={[0, -Math.PI / 2, 0]}
              onSelect={onSelectArtwork}
            />
          );
        })
      )}
      
      {/* Pared derecha */}
      <mesh position={[10, 1.5, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[12, 4]} />
        <meshStandardMaterial color={wallColor} roughness={0.95} />
      </mesh>
      
      {/* Zócalo pared derecha */}
      <mesh position={[9.9, 0.2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[12, 0.4, 0.1]} />
        <meshStandardMaterial color="#5D4E37" roughness={0.85} />
      </mesh>
      
      {/* ===== PISO ===== */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 12]} />
        <meshStandardMaterial color={floorColor} roughness={0.9} />
      </mesh>
      
      {/* ===== TECHO ===== */}
      <mesh position={[0, 3.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 12]} />
        <meshStandardMaterial color={ceilingColor} />
      </mesh>
      
      {/* Molduras de techo */}
      <mesh position={[0, 3.45, -7.95]}>
        <boxGeometry args={[20, 0.1, 0.1]} />
        <meshStandardMaterial color="#E8DCC8" />
      </mesh>
      <mesh position={[-9.95, 3.45, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[12, 0.1, 0.1]} />
        <meshStandardMaterial color="#E8DCC8" />
      </mesh>
      <mesh position={[9.95, 3.45, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[12, 0.1, 0.1]} />
        <meshStandardMaterial color="#E8DCC8" />
      </mesh>
      
      {/* ===== ILUMINACIÓN VINTAGE ===== */}
      {/* Luz ambiente cálida */}
      <ambientLight intensity={0.3} color="#FFF5E6" />
      
      {/* Luz central tipo araña */}
      <spotLight
        position={[0, 3.2, -2]}
        angle={0.6}
        penumbra={0.5}
        intensity={1}
        color="#FFB347"
        castShadow={false}
      />
      
      {/* Luces de acento */}
      <pointLight position={[-6, 2.5, -6]} intensity={0.4} color="#FFA500" />
      <pointLight position={[6, 2.5, -6]} intensity={0.4} color="#FFA500" />
      <pointLight position={[-8, 2.5, 0]} intensity={0.3} color="#FFB347" />
      <pointLight position={[8, 2.5, 0]} intensity={0.3} color="#FFB347" />
      
      {/* Lampara de araña decorativa */}
      <mesh position={[0, 2.9, -2]}>
        <torusGeometry args={[0.25, 0.03, 8, 16]} />
        <meshStandardMaterial color="#B8860B" metalness={0.6} roughness={0.2} />
      </mesh>
      <pointLight position={[0, 2.8, -2]} intensity={0.4} color="#FFD700" />
    </group>
  );
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 bg-black/80 px-8 py-5 rounded-lg border-2 border-amber-600">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-amber-200 font-mono text-sm tracking-wider">CARGANDO GALERÍA...</span>
        <span className="text-amber-300/60 text-xs">Cargando obras...</span>
      </div>
    </Html>
  );
}

export default function Gallery3D({ artworks }: Gallery3DProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  
  console.log('Gallery3D - Total obras:', artworks.length);
  
  return (
    <div className="relative">
      <div className="h-[600px] w-full rounded-lg overflow-hidden border-4 border-[#6B4423] shadow-2xl bg-[#E8DCC8]">
        <Canvas
          camera={{ position: [0, 1.8, 6], fov: 50 }}
          gl={{ antialias: true }}
        >
          <Suspense fallback={<LoadingFallback />}>
            <GalleryRoom 
              artworks={artworks} 
              onSelectArtwork={(a) => {
                console.log('Obra seleccionada:', a.title);
                setSelectedArtwork(a);
              }}
            />
          </Suspense>
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={14}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.1}
            target={[0, 1.5, -2]}
          />
        </Canvas>
      </div>
      
      {/* Controles */}
      <div className="absolute bottom-4 left-4 bg-[#6B4423]/90 text-amber-100 px-4 py-2 rounded-lg text-sm backdrop-blur-sm font-mono border border-[#B8860B]/50">
        <span className="hidden md:inline">🖱️ ARRASTRAR = GIRAR</span>
        <span className="hidden md:inline mx-2">|</span>
        <span>🔍 SCROLL = ZOOM</span>
        <span className="hidden md:inline mx-2">|</span>
        <span className="hidden md:inline">👆 CLICK = VER OBRA</span>
      </div>
      
      {/* Modal */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <div 
            className="bg-[#E8DCC8] rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-4 border-[#6B4423]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-3 right-3 z-10 w-12 h-12 bg-[#6B4423] hover:bg-[#D4A574] text-white rounded-full flex items-center justify-center transition-colors text-xl font-bold"
              >
                ✕
              </button>
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="w-full h-[65vh] object-contain bg-[#8B7355]/20"
              />
            </div>
            <div className="p-6 text-center border-t-2 border-[#B8860B]/30 bg-[#F5F0E6]">
              <h3 className="text-3xl font-serif text-[#6B4423] mb-2">{selectedArtwork.title}</h3>
              <p className="text-[#8B7355] font-mono text-sm">
                ═══ CLICK FUERA PARA CERRAR ═══
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}