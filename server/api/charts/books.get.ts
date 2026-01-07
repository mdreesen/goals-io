import loggedInUser from "~/utils/loggedInUser";
import { monthStartEnd } from '~/utils/formatters/months';
import { years } from '~/utils/getYears';
export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    const chartData = monthStartEnd({ data: user?.books, startLabel: 'book_start_date', endLabel: 'book_end_date' });

    return {
      chartData: chartData,
      years: years(user?.books ?? [])
    }
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  };
});