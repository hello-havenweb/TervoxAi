import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, User as UserIcon, LogOut, ArrowRight, Download, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ComingSoonBadge } from './ComingSoonBadge';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'App', path: '/app' },
    { name: 'Download', path: '/download', badge: 'Soon' },
    { name: 'Pricing', path: '/pricing', badge: 'Soon' },
    { name: 'About', path: '/about' },
    { name: 'Docs', path: '/docs' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#050B16]/90 backdrop-blur-md border-b border-[#00D9FF]/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-[#00D9FF] via-[#168BFF] to-[#081426] p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(0,217,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,217,255,0.7)] transition-all">
              <div className="w-full h-full bg-[#050B16] rounded-[10px] flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-[#00D9FF] group-hover:scale-125 transition-transform shadow-[0_0_10px_#00D9FF]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-wider text-white font-['Lexend'] group-hover:text-[#00D9FF] transition-colors">
                TERVOX<span className="text-[#00D9FF]">.AI</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#91A8BD] font-mono -mt-1">
                Beyond Ordinary
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all flex items-center gap-1.5 ${
                    active
                      ? 'text-[#00D9FF] bg-[#00D9FF]/10 border border-[#00D9FF]/30 shadow-[0_0_15px_rgba(0,217,255,0.15)]'
                      : 'text-[#91A8BD] hover:text-[#EAF6FF] hover:bg-[#081426]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded-full bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/30 font-mono">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Auth Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#081426] border border-[#00D9FF]/30 text-xs text-[#EAF6FF] hover:border-[#00D9FF] transition-all"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#00D9FF] to-[#168BFF] flex items-center justify-center text-[10px] font-bold text-[#050B16]">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium max-w-[100px] truncate">{user.name}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#91A8BD]" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#081426] border border-[#00D9FF]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-1 z-50">
                    <div className="px-3 py-2 border-b border-[#00D9FF]/15 text-xs text-[#91A8BD]">
                      <p className="text-[#EAF6FF] font-medium truncate">{user.name}</p>
                      <p className="truncate text-[10px]">{user.email}</p>
                    </div>
                    <Link
                      to="/app"
                      className="flex items-center gap-2 px-3 py-2 text-xs text-[#EAF6FF] hover:bg-[#0B1D32] hover:text-[#00D9FF]"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#00D9FF]" />
                      <span>Launch Preview</span>
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs text-red-400 hover:bg-red-500/10"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-[#91A8BD] hover:text-white transition-colors"
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  className="relative group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#050B16] bg-gradient-to-r from-[#00D9FF] via-[#168BFF] to-[#00D9FF] bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:shadow-[0_0_30px_rgba(0,217,255,0.7)]"
                >
                  <span>Sign Up</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#081426] border border-[#00D9FF]/20 text-[#EAF6FF] hover:text-[#00D9FF]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050B16]/95 backdrop-blur-xl border-b border-[#00D9FF]/20 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#00D9FF]/15">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between ${
                  isActive(link.path)
                    ? 'text-[#00D9FF] bg-[#00D9FF]/10 border border-[#00D9FF]/30'
                    : 'text-[#91A8BD] hover:text-[#EAF6FF] hover:bg-[#081426]'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00D9FF]/20 text-[#00D9FF] font-mono">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            {user ? (
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#081426] border border-[#00D9FF]/20">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#00D9FF] text-[#050B16] font-bold text-xs flex items-center justify-center">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-xs">
                    <p className="text-white font-medium">{user.name}</p>
                    <p className="text-[#91A8BD] text-[10px]">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 font-mono"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Out</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  className="text-center py-2.5 rounded-xl border border-[#00D9FF]/30 text-xs font-medium text-[#EAF6FF] bg-[#081426]"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-center py-2.5 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#168BFF] text-xs font-bold text-[#050B16] shadow-[0_0_20px_rgba(0,217,255,0.4)]"
                >
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
