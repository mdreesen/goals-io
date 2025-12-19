import loggedInUser from '~/utils/loggedInUser';
import { latestData } from '~/utils/formatters/latestData';

export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    const latestBooks = user?.books?.reverse() ?? [];
    const bookOrder = user?.books ?? [];

    function filterBooks(data: Array<any>) {
      return data?.filter((item: any) => item.booklist.includes('No') || !item.booklist);
    };

    return {
      latestData: latestData(10, bookOrder),
      current: filterBooks(latestBooks)
    }

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  }
});