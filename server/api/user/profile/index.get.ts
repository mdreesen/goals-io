import loggedInUser from '~/utils/loggedInUser';

export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const data = user;

    const bodyArr = ['showFasting', 'showWater', 'showWeight', 'showWorkout'];
    const mindArr = ['showBooks', 'showGratitudes'];
    const spiritArr = ['showBible', 'showJournal'];

    const bodySettings = data?.settings?.filter((item) => bodyArr.includes(item?.setting))
    const mindSettings = data?.settings?.filter((item) => mindArr.includes(item?.setting))
    const spiritSettings = data?.settings?.filter((item) => spiritArr.includes(item?.setting))

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