import loggedInUser from "~/utils/loggedInUser";
import { monthStart } from '~/utils/formatters/months';

export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    return monthStart({ data: user.cold_soaks, startLabel: 'dateFormatted' });
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  };
});