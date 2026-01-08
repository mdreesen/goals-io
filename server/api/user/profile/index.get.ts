import loggedInUser from '~/utils/loggedInUser';
import type { SettingType } from '~/types/setting';

export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const data = user;

    const bodyArr = ['showFasting', 'showWater', 'showWeight', 'showWorkout'];
    const mindArr = ['showBooks', 'showGratitudes'];
    const spiritArr = ['showBible', 'showJournal'];

    const bodySettings = data?.settings?.filter((item: SettingType) => bodyArr.includes(item?.setting)) ?? []
    const mindSettings = data?.settings?.filter((item: SettingType) => mindArr.includes(item?.setting)) ?? []
    const spiritSettings = data?.settings?.filter((item: SettingType) => spiritArr.includes(item?.setting)) ?? []

    return {
        username: data?.username,
        first_name: data?.first_name ? data?.first_name : 'Ascender',
        last_name: data?.last_name,
        bodySettings,
        mindSettings,
        spiritSettings,
        settings: data
    }
});