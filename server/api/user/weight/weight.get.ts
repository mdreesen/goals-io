import loggedInUser from "~/utils/loggedInUser";
import { latestData } from '~/utils/formatters/latestData';

export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);

    // Have to transform weight to Number...sad face
    const formatArray = user?.weight && user?.weight.map((item) => {
      const dailyWeight = (item as { weight: string }).weight ?? "";

      return {
        weight: Number(dailyWeight),
        date: (item as { date: string })?.date ?? (item as { weight_date: string })?.weight_date,
        starting_weight: (item as { starting_weight: string })?.starting_weight,
        _id: (item as { _id: string })?._id
      }
    });

    return {
      latestDataArr: latestData(3, formatArray?.reverse()) ?? [],
      latestData: formatArray?.reverse()[0] ?? {},
      goal_weight: Number(user?.goal_weight)
    }
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  };
});