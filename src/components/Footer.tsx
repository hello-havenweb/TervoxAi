import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Terminal, ArrowUpRight } from 'lucide-react';
import { ComingSoonBadge } from './ComingSoonBadge';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050B16] border-t border-[#00D9FF]/20 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#168BFF]/10 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#00D9FF]/15">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00D9FF] to-[#168BFF] p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(0,217,255,0.4)]">
                <div className="w-full h-full bg-[#050B16] rounded-[10px] flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-[#00D9FF] shadow-[0_0_10px_#00D9FF]" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-wider text-white font-['Lexend']">
                TERVOX<span className="text-[#00D9FF]">.AI</span>
              </span>
            </Link>

            <p className="text-sm text-[#91A8BD] max-w-sm leading-relaxed">
              One Intelligent Space. Endless Possibilities. An intuitive companion for exploring ideas, solving complex engineering problems, and creating without boundaries.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <ComingSoonBadge size="sm" />
              <span className="text-xs text-[#91A8BD] font-mono">Public Launch v1.0 Pending</span>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00D9FF] mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-[#91A8BD]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Overview</Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-white transition-colors">Features & Tools</Link>
              </li>
              <li>
                <Link to="/app" className="hover:text-white transition-colors">App Preview</Link>
              </li>
              <li>
                <Link to="/download" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Download</span>
                  <span className="text-[10px] font-mono text-[#00D9FF]">Soon</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Pricing</span>
                  <span className="text-[10px] font-mono text-[#00D9FF]">Soon</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation & Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00D9FF] mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-[#91A8BD]">
              <li>
                <Link to="/docs" className="hover:text-white transition-colors">Help Center</Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-white transition-colors">Getting Started</Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-white transition-colors">System Architecture</Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-white transition-colors">Security & Privacy</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Direct Support</Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00D9FF] mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-[#91A8BD]">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About TERVOX</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">Product Philosophy</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Inquiries</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white transition-colors">Account Portal</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-white transition-colors">Join Launch List</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#91A8BD]">
          <p>© {new Date().getFullYear()} TERVOX AI. All rights reserved. Built to make intelligence more accessible.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Security Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
