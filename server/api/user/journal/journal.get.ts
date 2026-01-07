import loggedInUser from '~/utils/loggedInUser';
import { latestData } from '~/utils/formatters/latestData';

export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const data = user?.journal?.reverse();

    return latestData(5, data) ?? [];
  });