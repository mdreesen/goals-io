import loggedInUser from "~/utils/loggedInUser";
import { latestData } from '~/utils/formatters/latestData';

export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    const data = user?.workout?.reverse() ?? [];

    // Latest wieght and water intake
    const latest = latestData(3, data);

    return {
      latestData: latest
    }
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  };
});