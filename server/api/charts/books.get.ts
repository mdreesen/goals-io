import loggedInUser from "~/utils/loggedInUser";
import { monthStartEnd } from '~/utils/formatters/months';

export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    return monthStartEnd({ data: user?.books, startLabel: 'book_start_date', endLabel: 'book_end_date' });
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  };
});