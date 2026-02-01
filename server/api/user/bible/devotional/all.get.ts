import loggedInUser from '~/utils/loggedInUser';
import type { BibleType } from '~/types/bible';

export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const data = user?.bibles?.reverse() ?? [];

    const filterData = data?.filter((item: BibleType) => {
      return item?.type.includes('Devotional');
    }) ?? [];

    return filterData;
  });