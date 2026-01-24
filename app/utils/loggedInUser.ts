import { connectDB } from "../../lib/database/mongodb";
import { Model } from 'mongoose';
import UserModel from '../../lib/database/models/User';
import type { User } from '~/types/user';
// import { sendRedirect } from 'h3';

const User = UserModel as Model<User>;

interface IUser extends User {
    email: string;
    book_start_date: string;
};

export default defineEventHandler(async (event) => {
    // make sure the user is logged in
    // This will throw a 401 error if the request doesn't come from a valid user session

    try {
        await connectDB();

        const { user } = await requireUserSession(event);
        const userEmail = (user as IUser).email;
        const findUser = await User.find({ email: userEmail });

        if (findUser[0]) {
            return findUser[0];
        };

    } catch (error) {
        console.log(error);
        // sendRedirect(event, '/login', 302); 
        throw createError({
            statusCode: 500,
            statusMessage: 'Something went wrong.'
        });
    };
});