 // ~/stores/auth.ts
 import { defineStore } from 'pinia';
 import type { UserType } from '../../lib/database/models/User';

 interface AuthState {
   user: UserType | null;
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
     setUser(user: UserType) {
       this.user = user;
       this.isAuthenticated = true;
     },
     setToken(token: string) {
       this.token = token;
       // Optionally, persist the token in localStorage
       if (import.meta.client) {
         localStorage.setItem('token', token);
       }
     },
     setLoggedIn(loggedIn: boolean) {
        this.isAuthenticated = loggedIn;
     },
     clearAuth() {
       this.user = null;
       this.token = null;
       this.isAuthenticated = false;
       if (import.meta.client) {
         localStorage.removeItem('token');
       }
     },
   },
 });