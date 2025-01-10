"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';

export async function fetchSettings() {
    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });

        // const user_settings: USER_SETTINGS = {
        //     userSettings: user.settings,
        //     id: user.settings._id,
        //     show_books: {show_books: user.settings.showBooks},
        //     show_goals: {show_goals: user.settings.showGoals},
        //     show_nutrition: {show_nutrition: user.settings.showNutrition},
        //     show_weight: {show_weight: user.settings.showWeight},
        // }

        return user.settings ?? [];

    } catch (error) {
        console.log(error)
        return error
    }
};

export async function editSettings(values: any) {
    const { id, data } = values;

    const session = await getServerSession();
    const user = await User.findOne({ email: session?.user.email });

    try {
        await connectDB();

        console.log(values)


    } catch (e) {
        console.log(e)
        return e
    }
};