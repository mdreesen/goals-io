// ~/stores/auth.ts
import { defineStore, acceptHMRUpdate } from 'pinia'
import type { SettingType } from '~/types/setting';

export type DefaultState = {
    settings: [],
    useBookSettings: {},
    useBibleSettings: {},
    useColdSoakSettings: {},
    useFastingSettings: {},
    useGratitudeSettings: {},
    useJournalSettings: {},
    useWaterSettings: {},
    useWeightSettings: {},
    useWorkoutSettings: {}
};

export const useSettings = defineStore('settings', {
    state: () => ({ settings: [] }) as DefaultState,
    actions: {
        setSettings(settingsArr: []) {
            this.settings = settingsArr;

            this.useBookSettings = this.findSetting('showBooks')
            this.useBibleSettings = this.findSetting('showBible')
            this.useColdSoakSettings = this.findSetting('showColdSoak')
            this.useFastingSettings = this.findSetting('showFasting')
            this.useGratitudeSettings = this.findSetting('showGratitudes')
            this.useJournalSettings = this.findSetting('showJournal')
            this.useWaterSettings = this.findSetting('showWaterIntake')
            this.useWeightSettings = this.findSetting('showWeight')
            this.useWorkoutSettings = this.findSetting('showWorkout')
        },

        setSetting(settingObj: SettingType) {
            console.log(settingObj)
            const mutateSettings = this.settings.map((item: SettingType) => {
                if(item?._id.includes(settingObj?._id)) {
                    console.log('update maybe', { ...item, ...settingObj });
                    console.log(this.settings)
                    this.settings = [...item, ...settingObj ];
                }
            }) ?? [];

            this.settings = [...mutateSettings]
        },



        findSetting(str: string) {
            return this.settings.find((item: SettingType) => item?.setting.includes(str));
        },
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSettings, import.meta.hot))
};