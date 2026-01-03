import loggedInUser from '~/utils/loggedInUser';

export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const data = user?.settings;

    const bodyArr = ['showFasting', 'showWater', 'showWeight', 'showWorkout'];
    const mindArr = ['showBooks', 'showGratitudes'];
    const spiritArr = ['showBible', 'showJournal'];

    const bodySettings = data?.filter((item) => bodyArr.includes(item?.setting))
    const mindSettings = data?.filter((item) => mindArr.includes(item?.setting))
    const spiritSettings = data?.filter((item) => spiritArr.includes(item?.setting))

    return {
        bodySettings,
        mindSettings,
        spiritSettings
    }
});