import { z } from 'zod';
import bcrypt from 'bcrypt';
import { connectDB } from "../../../../lib/database/mongodb";

import { Model } from 'mongoose';
import UserModel, { UserType } from '../../../../lib/database/models/User';
const User = UserModel as Model<UserType>;

export default defineEventHandler(async (event) => {
    // make sure the user is logged in
    // This will throw a 401 error if the request doesn't come from a valid user session

    try {
      await connectDB();

      const { user } = await requireUserSession(event);
      // const userId = user._id

      // const findUser = await User.findById({ userId });


      // console.log('Book data from user', user);
      // console.log('find DB user', findUser)
    
      return { data: user }

    } catch(error) {
      console.log(error)
    }

  
    // return {}
  });