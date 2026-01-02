import { IndexKind } from 'typescript';
import loggedInUser from '~/utils/loggedInUser';

export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const data = user?.gratitudes;
    const latestData = data?.reverse();

    console.log(latestData)

    const formatArray = latestData?.map((item) => {
      return {
        description: item.gratitude,
        _id: item._id
      }
    });

    return formatArray ?? [];
  });