"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
    const { email, password, confirm_password } = values;
    try {
        await connectDB();
        const userFound = await User.findOne({ email });
        if (confirm_password !== password) {
            return {
                error: 'Passwords do not match'
            }
        }
        if (userFound) {
            return {
                error: 'Email already exists!'
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            email,
            password: hashedPassword,
        });

        const savedUser = await user.save();

    } catch (e) {
        console.log(e);
    }
}