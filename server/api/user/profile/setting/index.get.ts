import loggedInUser from '~/utils/loggedInUser';
import type { SettingType } from '~/types/setting';

export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const data = user?.settings ?? [];

    function findSetting(str: string) {
        return data?.find((item: SettingType) => item?.setting.includes(str)) ?? {}
    };

    return {
        affirmationSetting: findSetting('showAffirmations') ?? {},
        bibleSetting: findSetting('showBible') ?? {},
        bookSetting: findSetting('showBooks') ?? {},
        fastingSetting: findSetting('showFasting') ?? {},
        coldSoakSetting: findSetting('showColdSoak') ?? {},
        gratitudeSetting: findSetting('showGratitudes') ?? {},
        habitSetting: findSetting('showHabits') ?? {},
        journalSetting: findSetting('showJournal') ?? {},
        waterSetting: findSetting('showWaterIntake') ?? {},
        weightSetting: findSetting('showWeight') ?? {},
        workoutSetting: findSetting('showWorkout') ?? {},
    }
});