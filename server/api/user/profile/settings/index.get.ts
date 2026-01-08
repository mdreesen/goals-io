import loggedInUser from '~/utils/loggedInUser';
import type { SettingType } from '~/types/setting';

export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const data = user?.settings;

    const bodyArr = ['showFasting', 'showWater', 'showWeight', 'showWorkout'];
    const mindArr = ['showBooks', 'showGratitudes'];
    const spiritArr = ['showBible', 'showJournal'];

    const bodySettings = data?.filter((item: SettingType) => bodyArr.includes(item?.setting))
    const mindSettings = data?.filter((item: SettingType) => mindArr.includes(item?.setting))
    const spiritSettings = data?.filter((item: SettingType) => spiritArr.includes(item?.setting))

    return {
        bodySettings,
        mindSettings,
        spiritSettings,
        settings: data
    }
});