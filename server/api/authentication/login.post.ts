import { z } from 'zod';
import bcrypt from 'bcrypt';
import { connectDB } from "../../../lib/database/mongodb";
import { useUser } from '~/store/useUser';

import { Model } from 'mongoose';
import UserModel, { UserType } from '../../../lib/database/models/User';
const User = UserModel as Model<UserType>;

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
})

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);
  const userStore = useUser()

  try {
    await connectDB();

    const user = await User.findOne({ email });
    const passwordMatches = bcrypt.compare(password, user?.password ?? '');

    if (!password) {
      return createError({ statusCode: 401, statusMessage: 'Please insert password.' })
    };
    if (!passwordMatches) {
      return createError({ statusCode: 401, statusMessage: 'Wrong credentials' })
    };

    // set the user session in the cookie
    // this server util is auto-imported by the auth-utils module
    await setUserSession(event, {
      user: {
        _id: user?._id!,
        username: user?.username || '',
        first_name: user?.first_name || 'Ascender',
        last_name: user?.last_name || '',
        name: `${user?.first_name} ${user?.last_name}` || 'Ascender',
        email: user?.email,
        phone: user?.phone || '',
        country: user?.country || '',
        street_address: user?.street_address || '',
        city: user?.city || '',
        region: user?.region || '',
        postal_code: user?.postal_code || '',
      }
    });
    
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});