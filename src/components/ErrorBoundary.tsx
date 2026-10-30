import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  silentFallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an unhandled exception:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.silentFallback) {
        return this.props.silentFallback;
      }

      return (
        <div className="min-h-screen bg-[#050B16] text-[#EAF6FF] flex items-center justify-center p-6 bg-cyber-grid">
          <div className="max-w-md w-full p-8 rounded-3xl bg-[#081426] border border-[#00D9FF]/30 text-center shadow-[0_0_50px_rgba(0,217,255,0.15)]">
            <div className="w-14 h-14 rounded-2xl bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(0,217,255,0.3)]">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h2 className="text-xl font-bold text-white font-['Lexend'] mb-2">
              {this.props.fallbackTitle || 'Neural Matrix Reconnection'}
            </h2>

            <p className="text-xs text-[#91A8BD] mb-6 leading-relaxed">
              TERVOX encountered an unexpected client runtime state. Your workspace session has been preserved.
            </p>

            {this.state.error && (
              <div className="p-3 rounded-xl bg-[#050B16] border border-[#00D9FF]/15 text-[11px] font-mono text-left text-[#00D9FF] overflow-x-auto mb-6 max-h-24">
                {this.state.error.message}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.reload();
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#168BFF] text-[#050B16] font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,217,255,0.3)] cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload Application</span>
              </button>

              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.href = './';
                }}
                className="py-3 px-4 rounded-xl bg-[#050B16] border border-[#00D9FF]/30 text-[#EAF6FF] text-xs hover:border-[#00D9FF] flex items-center justify-center gap-2"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
