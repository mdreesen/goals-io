import loggedInUser from "~/utils/loggedInUser";

export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    const data = user?.workout?.reverse() ?? [];

    return data;

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  };
});