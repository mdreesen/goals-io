// ~/stores/auth.ts
import { defineStore, acceptHMRUpdate } from 'pinia'
import type { SettingType } from '~/types/setting';

export type DefaultState = {
    settings: [],
};

export const useSettings = defineStore('settings', {
    state: () => ({ settings: [] }) as DefaultState,
    actions: {
        set(settingsArr: []) {
            this.settings = settingsArr;
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSettings, import.meta.hot))
};