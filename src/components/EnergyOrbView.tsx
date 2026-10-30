import React, { useState, useEffect } from 'react';
import { GlobeCollection } from '@designcodeio/threeui';

interface EnergyOrbViewProps {
  className?: string;
  speed?: number;
  scale?: number;
  smokeScale?: number;
  smokeStrength?: number;
  smokeSpeed?: number;
  hue?: number;
  saturation?: number;
  glow?: number;
  starDensity?: number;
  starSpeed?: number;
  starSize?: number;
  brightness?: number;
  opacity?: number;
}

export const EnergyOrbView: React.FC<EnergyOrbViewProps> = ({
  className = '',
  speed = 1.0,
  scale = 1.0,
  smokeScale = 1.0,
  smokeStrength = 1.0,
  smokeSpeed = 1.0,
  hue = 0,
  saturation = 1.0,
  glow = 1.0,
  starDensity = 1.0,
  starSpeed = 1.0,
  starSize = 1.0,
  brightness = 1.0,
  opacity = 1.0,
}) => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    // Beautiful graceful fallback if WebGL is disabled
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="w-64 h-64 rounded-full bg-radial from-[#00D9FF] via-[#168BFF]/40 to-transparent blur-xl animate-pulse" />
        <div className="absolute w-44 h-44 rounded-full border border-[#00D9FF]/40 bg-[#081426]/80 backdrop-blur-md shadow-[0_0_50px_#00D9FF]" />
        <div className="absolute text-xs tracking-widest text-[#00D9FF] uppercase font-mono">TERVOX Core</div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      <GlobeCollection
        variant="energy-orb"
        speed={speed}
        scale={scale}
        smokeScale={smokeScale}
        smokeStrength={smokeStrength}
        smokeSpeed={smokeSpeed}
        hue={hue}
        saturation={saturation}
        glow={glow}
        starDensity={starDensity}
        starSpeed={starSpeed}
        starSize={starSize}
        brightness={brightness}
        opacity={opacity}
      />
    </div>
  );
};
