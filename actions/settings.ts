"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';

export async function fetchSettings() {
    const session = await getServerSession();

    try {
        await connectDB();

        const user = await User.findOne({ email: session?.user.email });

        const useShowAffirmations = user?.settings.find((item: any) => item.setting.includes('showAffirmations') ?? {}) ?? [];
        const useShowBible = user?.settings.find((item: any) => item.setting.includes('showBible') ?? {}) ?? [];
        const useShowBooks = user?.settings.find((item: any) => item.setting.includes('showBooks') ?? {}) ?? [];
        const useShowFasting = user?.settings.find((item: any) => item.setting.includes('showFasting') ?? {}) ?? [];
        const useShowHabits = user?.settings.find((item: any) => item.setting.includes('showHabits') ?? {}) ?? [];
        const useShowJournal = user?.settings.find((item: any) => item.setting.includes('showJournal') ?? {}) ?? [];
        const useShowWaterIntake = user?.settings.find((item: any) => item.setting.includes('showWaterIntake') ?? {}) ?? [];
        const useShowWeight = user?.settings.find((item: any) => item.setting.includes('showWeight') ?? {}) ?? [];
        const useShowWorkout = user?.settings.find((item: any) => item.setting.includes('showWorkout') ?? {}) ?? [];
        const useDarkMode = user?.settings.find((item: any) => item.setting.includes('darkMode') ?? {}) ?? [];

        const useShowBody = useShowWeight.value || useShowWaterIntake.value || useShowFasting.value || useShowWorkout.value;
        const useShowMind = useShowAffirmations.value || useShowBooks.value || useShowHabits.value;
        const useShowSpirit = useShowBible.value || useShowJournal.value;

        const bodySettings = [useShowFasting, useShowWaterIntake, useShowWeight, useShowWorkout];
        const mindSettings = [useShowAffirmations, useShowBooks, useShowHabits];
        const spiritSettings = [useShowBible, useShowJournal];
        const personalSettings = [useDarkMode];
        const overviewStats = [useShowBooks, useShowFasting, useShowWaterIntake, useShowWeight];


        return {
            useUserSettings: user?.settings,
            useShowAffirmations: useShowAffirmations,
            useShowBible: useShowBible,
            useShowBooks: useShowBooks,
            useShowFasting: useShowFasting,
            useShowHabits: useShowHabits,
            useShowJournal: useShowJournal,
            useShowWaterIntake: useShowWaterIntake,
            useShowWeight: useShowWeight,
            useShowWorkout: useShowWorkout,

            useShowBody: useShowBody,
            useShowMind: useShowMind,
            useShowSpirit: useShowSpirit,
            usePersonalSettings: personalSettings,

            useBodySettings: bodySettings,
            useMindSettings: mindSettings,
            useSpiritSettings:spiritSettings,
            
            useDarkMode: useDarkMode.value,
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

    } catch (error) {
        console.log(error)
        return error
    }
};

export async function readTutorial(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { _id: _id },
            { ...values },
            { new: true });
    
        revalidatePath('/dashboard/profile');

    } catch (error) {
        console.log(error)
        return error
    }
};