import loggedInUser from '~/utils/loggedInUser';
import type { GratitudeType } from '~/types/gratitude';

export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const data = user?.gratitudes;
    const latestData = data?.reverse();

    const formatArray = latestData?.map((item: GratitudeType) => {
      return {
        description: item.gratitude,
        _id: item._id
      }
    });

    return formatArray ?? [];
  });