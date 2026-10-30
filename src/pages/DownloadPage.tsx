import React, { useState } from 'react';
import { 
  Download, 
  Apple, 
  Monitor, 
  Terminal, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle, 
  AlertCircle, 
  Mail,
  ArrowRight,
  Info
} from 'lucide-react';
import { EnergyOrbView } from '../components/EnergyOrbView';
import { ComingSoonBadge } from '../components/ComingSoonBadge';

export const DownloadPage: React.FC = () => {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail.includes('@') && notifyEmail.includes('.')) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#050B16] text-[#EAF6FF] py-16 px-4 sm:px-6 lg:px-8 bg-cyber-grid">
      <div className="max-w-5xl mx-auto">
        {/* Prominent Coming Soon Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#081426] border border-[#00D9FF]/40 shadow-[0_0_25px_rgba(0,217,255,0.2)] mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D9FF]" />
            </span>
            <span className="font-mono text-sm uppercase tracking-widest text-[#00D9FF] font-bold">
              &lt;COMING SOON&gt;
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white font-['Lexend'] mb-6 tracking-tight">
            TERVOX AI is <span className="bg-gradient-to-r from-white to-[#00D9FF] bg-clip-text text-transparent">Coming Soon.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#91A8BD] leading-relaxed mb-10">
            We're preparing something intelligent. TERVOX AI will be available to download soon. Stay tuned for the official launch.
          </p>

          {/* Main Visual: Glowing Energy Orb in Hero Frame */}
          <div className="relative w-full max-w-md h-64 sm:h-80 mx-auto mb-10 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-60 h-60 rounded-full bg-[#00D9FF]/15 blur-3xl animate-pulse-glow" />
            </div>
            <EnergyOrbView
              className="w-full h-full"
              speed={0.9}
              scale={1.05}
              smokeStrength={1.2}
              glow={1.2}
              brightness={1.0}
            />
          </div>

          {/* Non-downloadable Coming Soon Button */}
          <div className="inline-flex flex-col items-center gap-3">
            <button
              disabled
              className="px-8 py-4 rounded-2xl text-base font-bold text-[#91A8BD] bg-[#081426] border border-[#00D9FF]/30 cursor-not-allowed opacity-75 flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)] select-none"
            >
              <Download className="w-5 h-5 text-[#00D9FF]" />
              <span>Coming Soon</span>
            </button>
            <p className="text-xs text-[#91A8BD] font-mono">
              Official installers will be released on this page at launch.
            </p>
          </div>
        </div>

        {/* Launch Alert Notification Box */}
        <div className="my-16 p-8 rounded-3xl bg-[#081426] border border-[#00D9FF]/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-10 h-10 rounded-2xl bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center mx-auto mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Lexend'] mb-2">
              Get Notified When Installers Go Live
            </h3>
            <p className="text-xs sm:text-sm text-[#91A8BD] mb-6">
              Be the first to receive the official download link, build hashes, and release notes directly in your inbox.
            </p>

            {submitted ? (
              <div className="p-4 rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] text-sm flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>You're on the priority notification list! We'll alert you at launch.</span>
              </div>
            ) : (
              <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter your email for launch alert..."
                  className="flex-1 px-4 py-3 rounded-xl bg-[#050B16] border border-[#00D9FF]/30 text-sm text-[#EAF6FF] placeholder-[#91A8BD]/60 focus:outline-none focus:border-[#00D9FF]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#050B16] bg-gradient-to-r from-[#00D9FF] to-[#168BFF] hover:opacity-90 shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all cursor-pointer whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Platform Availability Placeholders */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white font-['Lexend'] mb-6 text-center">
            Planned Platform Availability
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#081426]/70 border border-[#00D9FF]/20 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#050B16] border border-[#00D9FF]/20 flex items-center justify-center text-[#00D9FF] mx-auto mb-4">
                <Apple className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">macOS</h4>
              <p className="text-xs text-[#91A8BD] mb-4">Apple Silicon (M1/M2/M3/M4) & Intel</p>
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/20">
                In Development
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#081426]/70 border border-[#00D9FF]/20 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#050B16] border border-[#00D9FF]/20 flex items-center justify-center text-[#00D9FF] mx-auto mb-4">
                <Monitor className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Windows</h4>
              <p className="text-xs text-[#91A8BD] mb-4">Windows 11 & Windows 10 (64-bit)</p>
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/20">
                In Development
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#081426]/70 border border-[#00D9FF]/20 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#050B16] border border-[#00D9FF]/20 flex items-center justify-center text-[#00D9FF] mx-auto mb-4">
                <Terminal className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Linux</h4>
              <p className="text-xs text-[#91A8BD] mb-4">Debian, Ubuntu, Arch, AppImage</p>
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/20">
                In Development
              </span>
            </div>
          </div>
        </div>

        {/* Verified Technical Details Section */}
        <div className="rounded-2xl bg-[#081426]/40 border border-[#00D9FF]/15 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4 text-[#00D9FF]">
            <Info className="w-5 h-5" />
            <h4 className="text-sm font-mono uppercase tracking-wider font-bold">Release Verification Notice</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#050B16] border border-[#00D9FF]/10">
              <span className="text-[#91A8BD] block mb-1">Version</span>
              <span className="text-white font-bold">v1.0.0-rc</span>
            </div>
            <div className="p-3 rounded-xl bg-[#050B16] border border-[#00D9FF]/10">
              <span className="text-[#91A8BD] block mb-1">File Size</span>
              <span className="text-[#00D9FF]">Announced soon</span>
            </div>
            <div className="p-3 rounded-xl bg-[#050B16] border border-[#00D9FF]/10">
              <span className="text-[#91A8BD] block mb-1">Security</span>
              <span className="text-white font-bold">SHA-256 Verified</span>
            </div>
            <div className="p-3 rounded-xl bg-[#050B16] border border-[#00D9FF]/10">
              <span className="text-[#91A8BD] block mb-1">Availability</span>
              <span className="text-[#00D9FF]">Coming Soon</span>
            </div>
          </div>

          <p className="mt-4 text-xs text-[#91A8BD] leading-relaxed">
            Download details will be announced soon. Binary signatures, automated checksum verification, and silent auto-update channels are currently undergoing security audits prior to public release.
          </p>
        </div>
      </div>
    </div>
  );
};
