import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export const AnnouncementBanner: React.FC = () => {
  return (
    <div className="relative z-50 bg-[#081426] border-b border-[#00D9FF]/20 text-[#EAF6FF] text-xs sm:text-sm py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 mx-auto sm:mx-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D9FF]" />
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium tracking-wide">
            <span className="text-[#00D9FF] font-semibold uppercase text-[11px] tracking-widest px-1.5 py-0.5 rounded bg-[#00D9FF]/10 border border-[#00D9FF]/20">
              Notice
            </span>
            <span>TERVOX AI is coming soon. Stay tuned for launch updates.</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/download"
            className="group inline-flex items-center gap-1.5 text-xs text-[#00D9FF] hover:text-white font-medium transition-colors"
          >
            <span>View Launch Status</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
