import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, ArrowLeft } from 'lucide-react';
import { EnergyOrbView } from '../components/EnergyOrbView';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] bg-[#050B16] text-[#EAF6FF] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-cyber-grid">
      <div className="max-w-md w-full text-center">
        {/* Animated 3D Energy Orb */}
        <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-36 h-36 rounded-full bg-[#00D9FF]/20 blur-2xl animate-pulse" />
          </div>
          <EnergyOrbView className="w-full h-full" speed={1.3} scale={0.8} glow={1.4} />
        </div>

        <span className="inline-block px-3 py-1 rounded-full bg-[#081426] border border-[#00D9FF]/30 text-xs font-mono text-[#00D9FF] mb-4">
          Error 404 • Coordinate Unreachable
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Lexend'] mb-3">
          Lost in Another Dimension?
        </h1>

        <p className="text-sm text-[#91A8BD] mb-8 leading-relaxed">
          The page you're looking for doesn't seem to exist or has moved to an unindexed quadrant.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#050B16] bg-gradient-to-r from-[#00D9FF] to-[#168BFF] hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,217,255,0.4)]"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            to="/features"
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-xs sm:text-sm text-[#EAF6FF] bg-[#081426] border border-[#00D9FF]/30 hover:border-[#00D9FF] transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#00D9FF]" />
            <span>Explore Features</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
