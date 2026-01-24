import loggedInUser from "~/utils/loggedInUser";
import { filterYear } from "~/utils/formatters/months";
import { years } from '~/utils/getYears';

export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);

    // Have to transform water_intake to Number...sad face
    const formatArray = user?.water && user?.water.map((item) => {
      const dailyWater = (item as { water_intake: string }).water_intake ?? "";

      return {
        water_intake: Number(dailyWater),
        date: (item as { date: string })?.date,
        _id: (item as { _id: string })?._id
      }
    });

    return {
      data: formatArray,
      years: years(user?.water ?? [])
    }
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  };
});