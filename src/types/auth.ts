export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdAt: string;
  authProvider: 'email' | 'google';
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}
