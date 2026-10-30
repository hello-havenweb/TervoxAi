import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Info, Sparkles, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { ComingSoonBadge } from '../components/ComingSoonBadge';

export const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050B16] text-[#EAF6FF] py-16 px-4 sm:px-6 lg:px-8 bg-cyber-grid">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ComingSoonBadge className="mb-4" />
          <h1 className="text-4xl sm:text-6xl font-black text-white font-['Lexend'] mb-4 tracking-tight">
            Pricing Plans <span className="bg-gradient-to-r from-white to-[#00D9FF] bg-clip-text text-transparent">Coming Soon.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#91A8BD] leading-relaxed max-w-2xl mx-auto">
            We're working on the right experience. Pricing and plan details will be announced closer to launch.
          </p>
        </div>

        {/* Polished Tiers Layout (Ready for Launch Tiers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Tier 1: Personal Tier Preview */}
          <div className="p-8 rounded-3xl bg-[#081426]/70 border border-[#00D9FF]/20 flex flex-col justify-between hover:border-[#00D9FF]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white font-['Lexend']">Personal</h3>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/20">
                  Coming Soon
                </span>
              </div>
              <p className="text-xs text-[#91A8BD] mb-6 leading-relaxed">
                For individual engineers, researchers, and hobbyists exploring AI assistance on desktop.
              </p>

              <div className="py-4 my-4 border-y border-[#00D9FF]/15">
                <span className="text-2xl font-bold text-white font-mono">TBA</span>
                <span className="text-xs text-[#91A8BD] ml-2 font-mono">at launch</span>
              </div>

              <ul className="space-y-3 text-xs text-[#91A8BD]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Native desktop workspace</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Core conversational intelligence</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Local memory context store</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Standard coding & web search tools</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                disabled
                className="w-full py-3 rounded-xl bg-[#050B16] border border-[#00D9FF]/30 text-xs font-semibold text-[#91A8BD] cursor-not-allowed select-none"
              >
                Plan Details Soon
              </button>
            </div>
          </div>

          {/* Tier 2: Pro Tier Preview */}
          <div className="p-8 rounded-3xl bg-[#0B1D32] border-2 border-[#00D9FF] shadow-[0_0_40px_rgba(0,217,255,0.15)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#00D9FF] text-[#050B16] text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
              Preview Target
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white font-['Lexend']">Professional</h3>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#00D9FF]/20 text-[#00D9FF] border border-[#00D9FF]/40">
                  Coming Soon
                </span>
              </div>
              <p className="text-xs text-[#91A8BD] mb-6 leading-relaxed">
                For power users, software architects, and creators demanding unrestricted reasoning bandwidth.
              </p>

              <div className="py-4 my-4 border-y border-[#00D9FF]/25">
                <span className="text-2xl font-bold text-white font-mono">TBA</span>
                <span className="text-xs text-[#91A8BD] ml-2 font-mono">at launch</span>
              </div>

              <ul className="space-y-3 text-xs text-[#EAF6FF]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Everything in Personal</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>High-concurrency reasoning engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Extended vector memory partitions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Advanced multi-modal & voice interactions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Priority early update channel</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                disabled
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#168BFF] text-xs font-bold text-[#050B16] cursor-not-allowed opacity-80 select-none shadow-[0_0_20px_rgba(0,217,255,0.4)]"
              >
                Plan Details Soon
              </button>
            </div>
          </div>

          {/* Tier 3: Teams / Enterprise Tier Preview */}
          <div className="p-8 rounded-3xl bg-[#081426]/70 border border-[#00D9FF]/20 flex flex-col justify-between hover:border-[#00D9FF]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white font-['Lexend']">Team & Enterprise</h3>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/20">
                  Coming Soon
                </span>
              </div>
              <p className="text-xs text-[#91A8BD] mb-6 leading-relaxed">
                For organizations needing centralized administration, SSO integration, and private deployment setups.
              </p>

              <div className="py-4 my-4 border-y border-[#00D9FF]/15">
                <span className="text-2xl font-bold text-white font-mono">TBA</span>
                <span className="text-xs text-[#91A8BD] ml-2 font-mono">custom deployment</span>
              </div>

              <ul className="space-y-3 text-xs text-[#91A8BD]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Shared workspace knowledge bases</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>SSO, SAML, & SCIM directory sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Custom self-hosted or VPC proxies</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Dedicated compliance & audit support</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <Link
                to="/contact"
                className="w-full py-3 rounded-xl bg-[#050B16] border border-[#00D9FF]/30 text-xs font-semibold text-[#00D9FF] hover:text-white hover:border-[#00D9FF] transition-all flex items-center justify-center gap-1.5"
              >
                <span>Inquire for Teams</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Honest Pricing Policy Note */}
        <div className="p-6 rounded-2xl bg-[#081426] border border-[#00D9FF]/20 flex items-start gap-4">
          <Info className="w-5 h-5 text-[#00D9FF] shrink-0 mt-0.5" />
          <div className="text-xs text-[#91A8BD] leading-relaxed">
            <span className="text-white font-bold block mb-1">Our Commitment to Transparent Pricing</span>
            We do not use artificially inflated discounts, deceptive recurring trial models, or hidden lock-ins. Exact billing structures and generous usage limits will be published openly before the software reaches version 1.0.
          </div>
        </div>
      </div>
    </div>
  );
};
