import React from 'react';
import { SylvaHero } from '@designcodeio/threeui';

interface SylvaLivingWorldProps {
  className?: string;
  headingSize?: number;
  bodySize?: number;
}

export const SylvaLivingWorld: React.FC<SylvaLivingWorldProps> = ({
  className = '',
  headingSize = 63,
  bodySize = 16.5,
}) => {
  return (
    <div className={`relative w-full rounded-3xl overflow-hidden border border-[#00D9FF]/20 shadow-[0_0_50px_rgba(0,217,255,0.08)] bg-[#050B16] ${className}`}>
      {/* Ambient lighting badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-[#081426]/80 backdrop-blur-md border border-[#00D9FF]/30 text-xs text-[#00D9FF] font-mono tracking-wider">
        <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping" />
        3D Neural Biosphere • Interactive Living Space
      </div>

      <div className="w-full h-[580px] md:h-[680px]">
        <SylvaHero
          // @ts-expect-error ThreeUI variant property
          variant="living-green"
          headingFont="lexend"
          bodyFont="lexend"
          headingWeight="300"
          bodyWeight="300"
          primaryColor="#ffffff"
          headingSize={headingSize}
          bodySize={bodySize}
          headingLetterSpacing={-0.006}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};
