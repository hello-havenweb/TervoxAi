import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  User as UserIcon, 
  Mail, 
  Lock, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { EnergyOrbView } from '../components/EnergyOrbView';
import { ComingSoonBadge } from '../components/ComingSoonBadge';

export const SignUpPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [validationError, setValidationError] = useState('');

  const { signupWithEmail, loginWithGoogle, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();

  // Password strength calculation
  const getPasswordStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score; // 0 to 4
  };

  const strength = getPasswordStrength(password);

  const getStrengthLabel = () => {
    if (!password) return { text: '', color: 'bg-transparent' };
    if (strength <= 1) return { text: 'Weak', color: 'bg-red-500' };
    if (strength === 2) return { text: 'Fair', color: 'bg-yellow-500' };
    if (strength === 3) return { text: 'Good', color: 'bg-[#168BFF]' };
    return { text: 'Strong', color: 'bg-[#00D9FF]' };
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    clearError();

    if (!name.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (password.length < 8) {
      setValidationError('Password must be at least 8 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setValidationError('Passwords do not match.');
      return;
    }
    if (!termsAccepted) {
      setValidationError('You must accept the Terms of Service and Privacy Policy.');
      return;
    }

    const success = await signupWithEmail(name, email, password);
    if (success) {
      navigate('/app');
    }
  };

  const handleGoogleSignUp = async () => {
    setValidationError('');
    clearError();
    const success = await loginWithGoogle();
    if (success) {
      navigate('/app');
    }
  };

  const strengthInfo = getStrengthLabel();

  return (
    <div className="min-h-screen bg-[#050B16] text-[#EAF6FF] py-16 px-4 sm:px-6 lg:px-8 relative flex items-center justify-center bg-cyber-grid">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#168BFF]/10 via-[#00D9FF]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        {/* Top Header */}
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D9FF] to-[#168BFF] p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(0,217,255,0.4)]">
              <div className="w-full h-full bg-[#050B16] rounded-[10px] flex items-center justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-[#00D9FF] shadow-[0_0_10px_#00D9FF]" />
              </div>
            </div>
            <span className="text-2xl font-extrabold tracking-wider text-white font-['Lexend']">
              TERVOX<span className="text-[#00D9FF]">.AI</span>
            </span>
          </Link>

          <h1 className="text-3xl font-extrabold text-white font-['Lexend'] mb-2">
            Create Your TERVOX Account.
          </h1>
          <p className="text-sm text-[#91A8BD]">
            Get ready to experience a new way of working with AI.
          </p>
        </div>

        {/* Energy Orb Indicator */}
        <div className="w-20 h-20 mx-auto -mb-3 relative z-20 flex items-center justify-center">
          <EnergyOrbView className="w-full h-full" speed={1.1} scale={0.7} glow={1.1} />
        </div>

        {/* Glass Authentication Card */}
        <div className="p-8 rounded-3xl bg-[#081426]/90 border border-[#00D9FF]/30 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,217,255,0.1)]">
          {(validationError || error) && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{validationError || error}</span>
            </div>
          )}

          {/* Google Sign Up Button */}
          <button
            type="button"
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl bg-[#0B1D32] border border-[#00D9FF]/20 hover:border-[#00D9FF] text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-3 transition-all hover:bg-[#0B1D32]/80 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.3)] mb-5"
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
            <span>Sign up with Google</span>
          </button>

          <div className="relative flex items-center justify-center mb-5">
            <div className="border-t border-[#00D9FF]/15 w-full" />
            <span className="bg-[#081426] px-3 text-[11px] font-mono text-[#91A8BD] uppercase tracking-wider relative z-10">
              or register with email
            </span>
          </div>

          {/* Email Sign-Up Form */}
          <form onSubmit={handleSignUp} className="space-y-3.5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#91A8BD] mb-1">
                Full Name
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#91A8BD]" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elena Rostova"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#050B16] border border-[#00D9FF]/25 text-sm text-[#EAF6FF] placeholder-[#91A8BD]/40 focus:outline-none focus:border-[#00D9FF] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#91A8BD] mb-1">
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
              <label className="block text-xs font-mono uppercase tracking-wider text-[#91A8BD] mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#91A8BD]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
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

              {/* Password strength meter */}
              {password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span className="text-[#91A8BD]">Strength:</span>
                    <span className="text-[#00D9FF]">{strengthInfo.text}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 h-1.5 bg-[#050B16] rounded-full overflow-hidden">
                    <div className={`h-full ${strength >= 1 ? strengthInfo.color : 'bg-transparent'}`} />
                    <div className={`h-full ${strength >= 2 ? strengthInfo.color : 'bg-transparent'}`} />
                    <div className={`h-full ${strength >= 3 ? strengthInfo.color : 'bg-transparent'}`} />
                    <div className={`h-full ${strength >= 4 ? strengthInfo.color : 'bg-transparent'}`} />
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#91A8BD] mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#91A8BD]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat your password"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#050B16] border border-[#00D9FF]/25 text-sm text-[#EAF6FF] placeholder-[#91A8BD]/40 focus:outline-none focus:border-[#00D9FF] transition-colors"
                />
              </div>
            </div>

            {/* Terms check */}
            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-[#00D9FF]/40 text-[#00D9FF] focus:ring-0 bg-[#050B16]"
              />
              <label htmlFor="terms" className="text-xs text-[#91A8BD] leading-tight cursor-pointer">
                I agree to the Terms of Service, Sovereign Privacy Guarantee, and early launch preview notices.
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#050B16] bg-gradient-to-r from-[#00D9FF] via-[#168BFF] to-[#00D9FF] bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-[0_0_25px_rgba(0,217,255,0.4)] flex items-center justify-center gap-2 cursor-pointer mt-3"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-[#050B16] border-t-transparent rounded-full animate-spin" />
                  <span>Creating Account...</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </button>
          </form>

          {/* Link to Login */}
          <div className="mt-5 pt-4 border-t border-[#00D9FF]/15 text-center text-xs text-[#91A8BD]">
            Already have an account?{' '}
            <Link to="/login" className="text-[#00D9FF] font-semibold hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
