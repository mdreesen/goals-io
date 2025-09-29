// ~/stores/auth.ts
import { defineStore } from 'pinia';
import type { User } from '~/types/user';

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
}

export const useAuth = defineStore('auth', {
    state: (): AuthState => ({
        user: null,
        token: null,
        isAuthenticated: false,
    }),
    actions: {
        setUser(user: User) {
            this.user = user;
            this.isAuthenticated = true;

            if (this.user) {
                localStorage.setItem('user', JSON.stringify(user));
            }
        },
        setToken(token: string) {
            this.token = token;
        },
        setLoggedIn(loggedIn: boolean) {
            this.isAuthenticated = loggedIn;
        },
        clearAuth() {
            this.user = null;
            this.token = null;
            this.isAuthenticated = false;
            localStorage.removeItem('user');
        },
    },
});