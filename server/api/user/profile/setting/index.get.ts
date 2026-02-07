import loggedInUser from '~/utils/loggedInUser';
import type { SettingType } from '~/types/setting';

export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const data = user?.settings ?? [];

    function findSetting(str: string) {
        return data?.find((item: SettingType) => item?.setting.includes(str) ?? {}) as unknown | SettingType ?? [];
    };

    return {
        affirmationSetting: findSetting('showAffirmations') as SettingType,
        bibleSetting: findSetting('showBible') as SettingType,
        bookSetting: findSetting('showBooks') as SettingType,
        fastingSetting: findSetting('showFasting') as SettingType,
        coldSoakSetting: findSetting('showColdSoak') as SettingType,
        gratitudeSetting: findSetting('showGratitudes') as SettingType,
        habitSetting: findSetting('showHabits') as SettingType,
        journalSetting: findSetting('showJournal') as SettingType,
        waterSetting: findSetting('showWaterIntake') as SettingType,
        weightSetting: findSetting('showWeight') as SettingType,
        workoutSetting: findSetting('showWorkout') as SettingType,
    }
});