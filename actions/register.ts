"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import bcrypt from "bcryptjs";

export async function settings() {
    try {
        
        const useSettings = {
            showBooks: true,
            showGoals: true,
            showNutrition: true,
            showWeight: true,
        }
        return { ...useSettings }

    } catch (e) {
        console.log(e);
    }
}

export async function register(values: any) {
    const { email, password, confirm_password } = values;
    try {
        await connectDB();
        const userSettings = await settings();

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
            settings: userSettings
        });

        const savedUser = await user.save();

    } catch (e) {
        console.log(e);
    }
}