import loggedInUser from "~/utils/loggedInUser";
import { monthStart } from '~/utils/formatters/months';
import { years } from '~/utils/getYears';

export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    return {
      chartData: monthStart({ data: user?.workout, startLabel: 'date' }),
      years: years(user?.workout ?? [])
    }
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  };
});