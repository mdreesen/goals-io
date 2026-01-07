import loggedInUser from '~/utils/loggedInUser';
import { defineEventHandler, getRouterParam } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');

    const user = await loggedInUser(event);
    const bookOrder = user?.books ?? [];

    const books = bookOrder.filter((item: any) => item.id.includes(id));

    return books[0]

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  }
});