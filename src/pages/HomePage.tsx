import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Database, 
  Globe, 
  Mic, 
  Layers, 
  ShieldCheck, 
  Zap,
  MousePointerClick
} from 'lucide-react';
import { EnergyOrbView } from '../components/EnergyOrbView';
import { DesktopAppPreview } from '../components/DesktopAppPreview';
import { SylvaLivingWorld } from '../components/SylvaLivingWorld';
import { ComingSoonBadge } from '../components/ComingSoonBadge';

export const HomePage: React.FC = () => {
  const previewRef = useRef<HTMLDivElement>(null);

  const scrollToPreview = () => {
    previewRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#050B16] text-[#EAF6FF] overflow-hidden bg-cyber-grid">
      {/* ── 1. CINEMATIC HERO SECTION ─────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#168BFF]/15 via-[#00D9FF]/5 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
          {/* Coming Soon notice badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081426]/90 border border-[#00D9FF]/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,217,255,0.15)] animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF]" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D9FF] font-semibold">
              COMING SOON
            </span>
            <span className="text-[#91A8BD] text-xs">•</span>
            <span className="text-xs text-[#EAF6FF]">Something intelligent is on the way.</span>
          </div>

          {/* Main Titles */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white font-['Lexend'] mb-4">
            Meet <span className="bg-gradient-to-r from-white via-[#EAF6FF] to-[#00D9FF] bg-clip-text text-transparent cyan-glow-text">TERVOX AI.</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#00D9FF] tracking-wide mb-4 font-['Lexend']">
            One Intelligent Space. Endless Possibilities.
          </p>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#91A8BD] leading-relaxed mb-8">
            Your AI companion for exploring ideas, solving problems, creating, and getting more done.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
            <button
              onClick={scrollToPreview}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-sm text-[#050B16] bg-gradient-to-r from-[#00D9FF] to-[#168BFF] hover:opacity-95 shadow-[0_0_35px_rgba(0,217,255,0.45)] hover:shadow-[0_0_50px_rgba(0,217,255,0.7)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore TERVOX AI</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/features"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-medium text-sm text-[#EAF6FF] bg-[#081426]/80 hover:bg-[#0B1D32] border border-[#00D9FF]/30 hover:border-[#00D9FF] shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>Discover Features</span>
            </Link>
          </div>

          {/* Signature 3D Energy Orb */}
          <div className="relative w-full max-w-xl h-72 sm:h-96 flex items-center justify-center my-4">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-[#00D9FF]/10 blur-3xl" />
            </div>
            <EnergyOrbView
              className="w-full h-full"
              speed={1.0}
              scale={1.0}
              smokeScale={1.0}
              smokeStrength={1.0}
              smokeSpeed={1.0}
              hue={0}
              saturation={1.0}
              glow={1.0}
              starDensity={1.0}
              starSpeed={1.0}
              starSize={1.0}
              brightness={1.0}
              opacity={1.0}
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-[#91A8BD]">
            <MousePointerClick className="w-3.5 h-3.5 text-[#00D9FF] animate-bounce" />
            <span>Interactive Neural Core • Built on WebGL</span>
          </div>
        </div>
      </section>

      {/* ── 2. INTRODUCTION SECTION ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#00D9FF]/10 bg-gradient-to-b from-[#050B16] via-[#081426]/60 to-[#050B16]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1D32] border border-[#00D9FF]/20 text-[#00D9FF] text-xs font-mono uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" /> Next-Gen Desktop Experience
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Lexend'] mb-4">
              Engineered for Focus, Fluidity, and Depth.
            </h2>
            <p className="text-[#91A8BD] text-base sm:text-lg leading-relaxed">
              TERVOX AI is designed from the ground up as a native desktop workspace. Rather than tab fatigue or disconnected chatbots, you get an unified intelligence station that understands your projects, workflows, and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[#081426]/70 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.4)] group">
              <div className="w-12 h-12 rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center text-[#00D9FF] mb-6 group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Native Workspace</h3>
              <p className="text-sm text-[#91A8BD] leading-relaxed">
                Seamless local file access, multi-window splits, and continuous project context without having to copy-paste between browser tabs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#081426]/70 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.4)] group">
              <div className="w-12 h-12 rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center text-[#00D9FF] mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Personal Memory</h3>
              <p className="text-sm text-[#91A8BD] leading-relaxed">
                Securely remembers your preferred coding libraries, architectural decisions, and working conventions without sharing them across users.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#081426]/70 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.4)] group">
              <div className="w-12 h-12 rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center text-[#00D9FF] mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Multi-Modal Core</h3>
              <p className="text-sm text-[#91A8BD] leading-relaxed">
                Effortlessly combines high-speed code generation, system architecture reasoning, visual analysis, and live web exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE APPLICATION PREVIEW ───────────────────────── */}
      <section ref={previewRef} className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ComingSoonBadge className="mb-4" />
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Lexend'] mb-4">
              Inside the TERVOX AI Desktop Environment.
            </h2>
            <p className="text-[#91A8BD] text-base sm:text-lg">
              Explore the interface below. Test preset workflows to experience how conversational reasoning, code synthesis, and multi-modal exploration integrate into one screen.
            </p>
          </div>

          {/* Desktop App Preview Component */}
          <DesktopAppPreview />

          <div className="mt-8 text-center">
            <Link
              to="/app"
              className="inline-flex items-center gap-2 text-sm text-[#00D9FF] hover:text-white font-medium transition-colors"
            >
              <span>Explore complete application walkthrough & tool specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. 3D LIVING BIOSPHERE SHOWCASE (SYLVAHERO ADAPTED) ────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#00D9FF]/15 bg-[#081426]/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1D32] border border-[#00D9FF]/20 text-[#00D9FF] text-xs font-mono uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" /> 3D Spatial Canvas
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Lexend'] mb-4">
              Intelligence in Motion.
            </h2>
            <p className="text-[#91A8BD] text-base sm:text-lg">
              Experience the organic synergy between biological balance and neural computing. Featuring real-time Three.js shaders, morpho butterfly dynamics, and interactive liquid-metal controls adapted to the TERVOX midnight palette.
            </p>
          </div>

          {/* SylvaLivingWorld Component */}
          <SylvaLivingWorld />
        </div>
      </section>

      {/* ── 5. CORE FEATURE HIGHLIGHTS ──────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#00D9FF] mb-2">Capability Matrix</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Lexend']">
                Comprehensive AI Assistance.
              </h2>
            </div>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D9FF] hover:text-white transition-colors"
            >
              <span>View all features</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'AI Conversations',
                desc: 'Deep multi-turn dialogues capable of following complex reasoning chains without forgetting previous points.',
                icon: Mic,
              },
              {
                title: 'Coding Assistance',
                desc: 'Generate, debug, and refactor code in TypeScript, Python, Rust, and 40+ programming languages.',
                icon: Terminal,
              },
              {
                title: 'Personal Memory',
                desc: 'Retains your project conventions, framework choices, and preferences between sessions.',
                icon: Database,
              },
              {
                title: 'Live Web Grounding',
                desc: 'Retrieve current documentation, API changes, and verified knowledge with real citations.',
                icon: Globe,
              },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#081426]/70 border border-[#00D9FF]/20 hover:border-[#00D9FF]/60 transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-xs text-[#91A8BD] leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL LAUNCH CTA ────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#00D9FF]/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[#168BFF]/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ComingSoonBadge className="mb-6" />
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Lexend'] mb-6 tracking-tight">
            TERVOX AI — Intelligence, Beyond the Ordinary.
          </h2>
          <p className="text-base sm:text-lg text-[#91A8BD] max-w-2xl mx-auto mb-10 leading-relaxed">
            The future of personal AI assistance is taking shape. Get ready for an interface that respects your attention, enhances your creativity, and elevates your engineering workflow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/download"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm text-[#050B16] bg-gradient-to-r from-[#00D9FF] to-[#168BFF] hover:opacity-90 shadow-[0_0_35px_rgba(0,217,255,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>Download Status</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/signup"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-sm text-[#EAF6FF] bg-[#081426] border border-[#00D9FF]/30 hover:border-[#00D9FF] transition-all flex items-center justify-center gap-2"
            >
              <span>Create Account</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
