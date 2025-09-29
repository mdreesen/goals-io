import { defineStore } from "pinia";
import type { User } from "~/types/auth";

import { Model } from 'mongoose';
import UserModel from '../../lib/database/models/User';
const User = UserModel as Model<User>;

export type DefaultState = {
    user: {}
};

export const useUser = defineStore('user', {
    state: () => ({ user: {} }) as DefaultState,

    actions: {
        setUser(user: User) {
            console.log('user', user)
            this.user = { ...this.user, ...user }
        }
    },
});