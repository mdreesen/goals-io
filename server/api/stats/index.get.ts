import loggedInUser from '~/utils/loggedInUser';

export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);

    const now = new Date();
    const year = now.getFullYear();

    // User data per section
    const books = user?.books ?? [];
    const coldSoaks = user?.cold_soaks ?? [];
    const fasting = user?.fasting ?? [];
    const waterIntake = user?.water ?? [];
    const weight = user?.weight ?? [];

    // Books started and books ended current year
    const bookCurrentStartedYear = books.filter((item) => item.book_start_date?.includes(year)).length;
    const bookCurrentEndedYear = books.filter((item) => item?.book_end_date?.includes(year)).length;

    // Latest Cold Soak data
    const latestColdSoak = coldSoaks.reverse()[0];

    // Latest Fasting Data
    const latestFasting = fasting.reverse()[0];

    // Latest Water Intake Data
    const latestWater = waterIntake.reverse()[0];

    // Latest Weight Data
    const latestWeight = weight.reverse()[0];

    return {
        bookCurrentStartedYear: bookCurrentStartedYear,
        bookCurrentEndedYear: bookCurrentEndedYear,
        latestColdSoak: latestColdSoak,
        latestFasting: latestFasting,
        latestWater: latestWater,
        latestWeight: latestWeight
    }

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  }
});