import { defineStore } from "pinia";
import type { User } from "~/types/auth";

export type DefaultState = {
    user: {}
};

export const useUser = defineStore('user', {
    state: () => ({ user: {} }) as DefaultState,

    actions: {
        setUser(user: User) {
            this.user = user
        }
    }
    // other options...
});