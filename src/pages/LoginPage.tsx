import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { EnergyOrbView } from '../components/EnergyOrbView';
import { ComingSoonBadge } from '../components/ComingSoonBadge';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [validationError, setValidationError] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  const { loginWithEmail, loginWithGoogle, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    clearError();

    if (!email.trim() || !password.trim()) {
      setValidationError('Please enter both your email address and password.');
      return;
    }

    const success = await loginWithEmail(email, password, rememberMe);
    if (success) {
      navigate('/app');
    }
  };

  const handleGoogleLogin = async () => {
    setValidationError('');
    clearError();
    const success = await loginWithGoogle();
    if (success) {
      navigate('/app');
    }
  };

  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotEmail.includes('@') && forgotEmail.includes('.')) {
      setForgotSent(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#050B16] text-[#EAF6FF] py-16 px-4 sm:px-6 lg:px-8 relative flex items-center justify-center bg-cyber-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-radial from-[#168BFF]/10 via-[#00D9FF]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        {/* Top Brand Logo & Heading */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-6 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D9FF] to-[#168BFF] p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(0,217,255,0.4)]">
              <div className="w-full h-full bg-[#050B16] rounded-[10px] flex items-center justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-[#00D9FF] shadow-[0_0_10px_#00D9FF]" />
              </div>
            </div>
            <span className="text-2xl font-extrabold tracking-wider text-white font-['Lexend']">
              TERVOX<span className="text-[#00D9FF]">.AI</span>
            </span>
          </Link>

          <h1 className="text-3xl font-extrabold text-white font-['Lexend'] mb-2">Welcome Back.</h1>
          <p className="text-sm text-[#91A8BD]">Sign in to continue your TERVOX AI experience.</p>
        </div>

        {/* Small animated orb above form */}
        <div className="w-24 h-24 mx-auto -mb-4 relative z-20 flex items-center justify-center">
          <EnergyOrbView className="w-full h-full" speed={1.2} scale={0.7} glow={1.2} />
        </div>

        {/* Glass Authentication Panel */}
        <div className="p-8 rounded-3xl bg-[#081426]/90 border border-[#00D9FF]/30 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,217,255,0.1)]">
          {/* Display Errors */}
          {(validationError || error) && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{validationError || error}</span>
            </div>
          )}

          {/* Google Sign In Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl bg-[#0B1D32] border border-[#00D9FF]/20 hover:border-[#00D9FF] text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-3 transition-all hover:bg-[#0B1D32]/80 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.3)] mb-6"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.67v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.16z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.36 7.34 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-[#00D9FF]/15 w-full" />
            <span className="bg-[#081426] px-3 text-[11px] font-mono text-[#91A8BD] uppercase tracking-wider relative z-10">
              or with email
            </span>
          </div>

          {/* Email / Password Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#91A8BD] mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#91A8BD]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#050B16] border border-[#00D9FF]/25 text-sm text-[#EAF6FF] placeholder-[#91A8BD]/40 focus:outline-none focus:border-[#00D9FF] transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#91A8BD]">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-xs text-[#00D9FF] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#91A8BD]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#050B16] border border-[#00D9FF]/25 text-sm text-[#EAF6FF] placeholder-[#91A8BD]/40 focus:outline-none focus:border-[#00D9FF] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#91A8BD] hover:text-[#00D9FF]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-[#00D9FF]/40 text-[#00D9FF] focus:ring-0 bg-[#050B16]"
              />
              <label htmlFor="remember" className="text-xs text-[#91A8BD] cursor-pointer">
                Remember this device
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#050B16] bg-gradient-to-r from-[#00D9FF] via-[#168BFF] to-[#00D9FF] bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-[0_0_25px_rgba(0,217,255,0.4)] flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-[#050B16] border-t-transparent rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </button>
          </form>

          {/* Link to Sign Up */}
          <div className="mt-6 pt-5 border-t border-[#00D9FF]/15 text-center text-xs text-[#91A8BD]">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#00D9FF] font-semibold hover:underline">
              Create Account
            </Link>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="max-w-sm w-full rounded-3xl bg-[#081426] border border-[#00D9FF]/30 p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2">Reset Password</h3>
            <p className="text-xs text-[#91A8BD] mb-4">
              Enter your email and we'll dispatch a cryptographic password recovery link.
            </p>

            {forgotSent ? (
              <div className="p-4 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-xs text-[#00D9FF] space-y-3">
                <p>Recovery link dispatched to {forgotEmail}. Please check your inbox.</p>
                <button
                  onClick={() => { setShowForgotModal(false); setForgotSent(false); }}
                  className="w-full py-2 rounded-lg bg-[#00D9FF] text-[#050B16] font-bold"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <input
                  type="email"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050B16] border border-[#00D9FF]/25 text-xs text-white focus:outline-none focus:border-[#00D9FF]"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="flex-1 py-2 rounded-xl text-xs bg-[#050B16] border border-[#00D9FF]/20 text-[#91A8BD]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-xl text-xs bg-[#00D9FF] text-[#050B16] font-bold"
                  >
                    Send Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
