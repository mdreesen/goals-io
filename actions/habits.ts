"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';

export async function fetchHabits() {
    try {
        await connectDB();
        const session = await getServerSession();

        const data = await User.find({ email: session?.user.email }, 'habits');

        return data[0].habits ?? [];

    } catch (error) {
        console.log(error)
        return error
    }
};

export async function addHabit(values: any) {

    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { habits: { ...values } } }, { new: true });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function editHabit(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'habits._id': _id },
            { $set: { 'habits.$': { ...values } } },
            { new: true });

        revalidatePath('/dashboard/habits');


    } catch (e) {
        console.log(e)
        return e
    }
};

export async function deleteHabit(values: any) {
    const { id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'habits._id': id },
            { $pull: { 'habits': { _id: id } } },
            { new: true });

        revalidatePath('/dashboard/habits');


    } catch (e) {
        console.log(e)
        return e
    }
};

export async function fetchHabitsById(values: any) {
    const { id } = values;
    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });

        const habits = user.habits.filter((item: any) => {
            const idToString = item.id.toString()
            return idToString.includes(id)
        });

        return habits[0]

    } catch (e) {
        console.log(e);
        return e;
    }
};

export async function filterHabits() {

    try {
        await connectDB();
        const session = await getServerSession();

        const data = await User.find({ email: session?.user.email }, 'habits');

        const communityHabits = data[0].habits.filter((item: any) => item.kind.includes('Community')) ?? [];
        const familyHabits = data[0].habits.filter((item: any) => item.kind.includes('Family')) ?? [];
        const marriageHabits = data[0].habits.filter((item: any) => item.kind.includes('Marriage')) ?? [];
        const personalHabits = data[0].habits.filter((item: any) => item.kind.includes('Personal')) ?? [];

        return {
            community_habits: communityHabits,
            family_habits: familyHabits,
            marriage_habits: marriageHabits,
            personal_habits: personalHabits,

            use_community_habits: communityHabits.length > 0,
            use_family_habits: familyHabits.length > 0,
            use_marriage_habits: marriageHabits.length > 0,
            use_personal_habits: personalHabits.length > 0,
        }

    } catch (e) {
        console.log(e);
        return e;
    }
};

