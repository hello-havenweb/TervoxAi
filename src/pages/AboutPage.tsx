import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Compass, 
  ArrowRight,
  Eye,
  Key,
  Flame
} from 'lucide-react';
import { EnergyOrbView } from '../components/EnergyOrbView';
import { ComingSoonBadge } from '../components/ComingSoonBadge';

export const AboutPage: React.FC = () => {
  const principles = [
    {
      title: 'Local Sovereignty',
      desc: 'Intelligence should serve the user without silently siphoning private context. Your workspace data, memory embeddings, and source files belong exclusively to you.',
      icon: ShieldCheck,
    },
    {
      title: 'Zero Friction Ergonomics',
      desc: 'We discard the clunky web-tab paradigms in favor of a responsive desktop environment engineered with sub-millisecond keyboard shortcuts and deep local integrations.',
      icon: Cpu,
    },
    {
      title: 'Honest Capabilities',
      desc: 'We do not invent fake claims, exaggerate benchmark scores, or pretend generative models are infallible. TERVOX provides transparent reasoning trails and live verification.',
      icon: Eye,
    },
    {
      title: 'Architectural Elegance',
      desc: 'Every element from dark midnight UI panels to WebGL energy visualizations is designed to foster unbroken concentration during intense intellectual tasks.',
      icon: Layers,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050B16] text-[#EAF6FF] py-16 px-4 sm:px-6 lg:px-8 bg-cyber-grid">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ComingSoonBadge className="mb-4" />
          <h1 className="text-4xl sm:text-6xl font-black text-white font-['Lexend'] mb-6 tracking-tight">
            Built to Make Intelligence <span className="bg-gradient-to-r from-white to-[#00D9FF] bg-clip-text text-transparent">More Accessible.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#91A8BD] leading-relaxed">
            TERVOX AI was conceived to bridge the gap between abstract artificial intelligence models and the tangible daily workflows of creators, engineers, and thinkers.
          </p>
        </div>

        {/* Brand Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081426] border border-[#00D9FF]/20 text-xs font-mono uppercase tracking-wider text-[#00D9FF]">
              <Compass className="w-3.5 h-3.5" /> Product Philosophy
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Lexend']">
              One Intelligent Space. Endless Possibilities.
            </h2>

            <p className="text-sm sm:text-base text-[#91A8BD] leading-relaxed">
              Modern knowledge work has fractured into dozens of disconnected browser tabs, fragmented notes, and isolated chat windows. When you switch between coding, writing, research, and data visualization, your context is lost every time.
            </p>

            <p className="text-sm sm:text-base text-[#91A8BD] leading-relaxed">
              TERVOX AI replaces that fragmentation with a unified desktop environment. Powered by our multi-modal neural engine and protected by sovereign local memory, TERVOX acts as a thinking partner that remains with you across hours of deep concentration.
            </p>

            <div className="p-4 rounded-2xl bg-[#081426] border border-[#00D9FF]/20 text-xs sm:text-sm text-[#00D9FF] font-mono">
              "We believe personal AI should feel like a fine instrument: responsive, transparent, and built to stand the test of complex real-world demands."
            </div>
          </div>

          {/* Energy Orb Showcase Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-3xl bg-[#081426]/70 border border-[#00D9FF]/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            <div className="w-full h-64 sm:h-72 flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 rounded-full bg-[#00D9FF]/15 blur-2xl animate-pulse" />
              </div>
              <EnergyOrbView
                className="w-full h-full"
                speed={1.0}
                scale={0.9}
                glow={1.2}
                starDensity={1.2}
              />
            </div>
            <div className="text-center mt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00D9FF]">
                TERVOX Core Dynamic Visual
              </span>
              <p className="text-[11px] text-[#91A8BD] mt-1">
                Visualizing continuous high-order reasoning & neural activity.
              </p>
            </div>
          </div>
        </div>

        {/* Design Principles */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Lexend'] mb-3">
              Design & Architectural Principles
            </h2>
            <p className="text-sm text-[#91A8BD]">
              The core foundations shaping every decision inside TERVOX AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#081426]/70 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-[#91A8BD] leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="p-10 rounded-3xl bg-gradient-to-r from-[#081426] via-[#0B1D32] to-[#081426] border border-[#00D9FF]/30 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <ComingSoonBadge className="mb-4" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Lexend'] mb-4">
              Be Part of the TERVOX Launch
            </h3>
            <p className="text-sm text-[#91A8BD] mb-8 leading-relaxed">
              We are finalizing the release candidate builds. Explore our capabilities or create an account to secure early workspace access.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#050B16] bg-gradient-to-r from-[#00D9FF] to-[#168BFF] hover:opacity-90 transition-all shadow-[0_0_25px_rgba(0,217,255,0.4)]"
              >
                Create Account
              </Link>
              <Link
                to="/features"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-[#EAF6FF] bg-[#050B16] border border-[#00D9FF]/30 hover:border-[#00D9FF] transition-all"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
