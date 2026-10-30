import React from 'react';

interface ComingSoonBadgeProps {
  size?: 'sm' | 'md';
  pulse?: boolean;
  className?: string;
}

export const ComingSoonBadge: React.FC<ComingSoonBadgeProps> = ({
  size = 'md',
  pulse = true,
  className = '',
}) => {
  const isSm = size === 'sm';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-full border border-[#00D9FF]/40 bg-[#00D9FF]/10 text-[#00D9FF] ${
        isSm ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'
      } ${className}`}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00D9FF]" />
        </span>
      )}
      <span>Coming Soon</span>
    </span>
  );
};
