import loggedInUser from "~/utils/loggedInUser";
import { filterYear } from "~/utils/formatters/months";
import { years } from '~/utils/getYears';

export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);

    // Have to transform weight to Number...sad face
    const formatArray = user?.weight && user?.weight.map((item) => {
      const dailyWeight = (item as { weight: string }).weight ?? "";
      const dailyDate = (item as { date: string }).date || (item as { weight_date: string }).weight_date;

      return {
        weight: Number(dailyWeight),
        date: dailyDate,
        starting_weight: (item as { starting_weight: string })?.starting_weight,
        _id: (item as { _id: string })?._id
      }
    });

    return {
      chartData: filterYear(formatArray),
      years: years(user?.weight ?? [])
    }
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  };
});