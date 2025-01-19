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

        const useShowAffirmations = user.settings.find((item: any) => item.setting.includes('showAffirmations') ?? {}) ?? [];
        const useShowBible = user.settings.find((item: any) => item.setting.includes('showBible') ?? {}) ?? [];
        const useShowBooks = user.settings.find((item: any) => item.setting.includes('showBooks') ?? {}) ?? [];
        const useShowGoals = user.settings.find((item: any) => item.setting.includes('showGoals') ?? {}) ?? [];
        const useShowNutrition = user.settings.find((item: any) => item.setting.includes('showNutrition') ?? {}) ?? [];
        const useShowWeight = user.settings.find((item: any) => item.setting.includes('showWeight') ?? {}) ?? [];

        return {
            useShowAffirmations: useShowAffirmations,
            useShowBible: useShowBible,
            useShowBooks: useShowBooks,
            useShowGoals: useShowGoals,
            useShowNutrition: useShowNutrition,
            useShowWeight: useShowWeight
        }

    } catch (error) {
        console.log(error)
        return error
    }
};

export async function editSettings(values: any) {
    const { id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'settings._id': id },
            { $set: { 'settings.$': { ...values } } },
            { new: true });
    
        revalidatePath('/dashboard/profile');

    } catch (e) {
        console.log(e)
        return e
    }
};