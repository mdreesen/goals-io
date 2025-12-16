import loggedInUser from "~/utils/loggedInUser";
import { WaterType } from '~/types/water';
import { WeightType } from '~/types/weight';

export default defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    const data = user?.water ?? [];
    const weight = user?.weight ?? [];


    // Latest wieght and water intake
    const latestWater = data.reverse()[0];
    const latestWeight = weight.reverse()[0];

    return {
      latestWeight: latestWeight as WeightType,
      latestWater: latestWater as WaterType
    }
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.'
    });
  };
});