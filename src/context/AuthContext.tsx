import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../types/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  loginWithEmail: (email: string, pass: string, remember: boolean) => Promise<boolean>;
  signupWithEmail: (name: string, email: string, pass: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  logout: () => void;
  resetPassword: (email: string) => Promise<boolean>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'tervox_auth_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = () => setError(null);

  const loginWithEmail = async (email: string, pass: string, remember: boolean): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 650));
      // Basic validation
      if (!email.includes('@') || !email.includes('.')) {
        throw new Error('Please enter a valid email address.');
      }
      if (pass.length < 6) {
        throw new Error('Password must be at least 6 characters.');
      }

      const dummyUser: User = {
        id: 'usr_' + Math.random().toString(36).substring(2, 9),
        name: email.split('@')[0],
        email,
        createdAt: new Date().toISOString(),
        authProvider: 'email',
      };

      setUser(dummyUser);
      if (remember) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dummyUser));
      } else {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(dummyUser));
      }
      return true;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed. Please check your credentials.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signupWithEmail = async (name: string, email: string, pass: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 700));
      if (!name.trim()) {
        throw new Error('Please enter your full name.');
      }
      if (!email.includes('@') || !email.includes('.')) {
        throw new Error('Please enter a valid email address.');
      }
      if (pass.length < 8) {
        throw new Error('Password must be at least 8 characters long.');
      }

      const newUser: User = {
        id: 'usr_' + Math.random().toString(36).substring(2, 9),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        createdAt: new Date().toISOString(),
        authProvider: 'email',
      };

      setUser(newUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
      return true;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Account creation failed.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 800));
      const googleUser: User = {
        id: 'goog_' + Math.random().toString(36).substring(2, 9),
        name: 'TERVOX Explorer',
        email: 'explorer@tervox.ai',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
        createdAt: new Date().toISOString(),
        authProvider: 'google',
      };

      setUser(googleUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(googleUser));
      return true;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Google authentication could not be completed.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
  };

  const resetPassword = async (email: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 600));
      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address.');
      }
      return true;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to send password reset link.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        loginWithEmail,
        signupWithEmail,
        loginWithGoogle,
        logout,
        resetPassword,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
