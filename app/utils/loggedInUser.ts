import { connectDB } from "../../lib/database/mongodb";

import { Model } from 'mongoose';
import UserModel from '../../lib/database/models/User';
import type { UserType } from '../../lib/database/models/User';

const User = UserModel as Model<UserType>;

interface IUser extends UserType {
    email: string;
    book_start_date: string;
};

export default defineEventHandler(async (event) => {
    // make sure the user is logged in
    // This will throw a 401 error if the request doesn't come from a valid user session

    try {
        await connectDB();
        const { user } = await requireUserSession(event);
        const useUser = (user as IUser).email;
        const findUser = await User.find({ email: useUser });

        return findUser[0];

    } catch (error) {
        console.log(error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Something went wrong.'
          });
    };
});