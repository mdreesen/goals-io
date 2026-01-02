import loggedInUser from '~/utils/loggedInUser';

export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const data = user?.journal;
    const latestData = data?.reverse();

    return latestData ?? [];
  });