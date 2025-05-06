"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import bcrypt from "bcryptjs";

export async function fetchUser() {
    const session = await getServerSession();

    try {
        await connectDB();

        // Find user and farmer with associated emails
        const user = await User.findOne({ email: session?.user.email });

        return user ?? {}
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function deleteUser() {
    const session = await getServerSession();

    try {
        await connectDB();

        await User.deleteOne({ email: session?.user.email });


    } catch (error) {
        console.log(error)
        return error
    }
};

export async function updateUserPassword(values: any) {
    const { token, password, confirm_password } = values;

    const hashedPassword = await bcrypt.hash(password, 10);

    if (confirm_password !== password) {
        return {
            error: 'Passwords do not match'
        }
    }

    try {
        await connectDB();

        const user = await User.findOneAndUpdate({ resetPasswordToken: token }, {
            password: hashedPassword
        });

    } catch (error) {
        console.log(error)
        return error
    }
};

