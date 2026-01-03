import loggedInUser from '~/utils/loggedInUser';
import { latestData } from '~/utils/formatters/latestData';

export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const data = user?.bibles?.reverse() ?? [];

    const filterData = data?.filter((item) => {
      return item?.type.includes('Devotional');
    }) ?? [];

    return latestData(5, filterData);
  });