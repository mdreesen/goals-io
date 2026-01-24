import loggedInUser from "~/utils/loggedInUser";
import { years } from '~/utils/getYears';
export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);

    return {
      data: user?.books,
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