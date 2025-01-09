"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';

export async function fetchGoals() {
    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });

        return user.goals ?? []
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function addGoal(values: any) {

    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { goals: { ...values } } }, { new: true });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function editGoal(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'goals._id': _id },
            { $set: { 'goals.$': { ...values } } },
            { new: true });

        revalidatePath('/dashboard/goals');


    } catch (e) {
        console.log(e)
        return e
    }
};

export async function deleteGoal(values: any) {
    const { id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'goals._id': id },
            { $pull: { 'goals': { _id: id } } },
            { new: true });

        revalidatePath('/dashboard/goals');


    } catch (e) {
        console.log(e)
        return e
    }
};

export async function fetchGoalsById(values: any) {
    const { id } = values;
    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });

        const goals = user.goals.filter((item: any) => {
            const idToString = item.id.toString()
            return idToString.includes(id)
        });

        return goals[0]

    } catch (e) {
        console.log(e);
        return e;
    }
};

export async function filterGoals() {

    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });

        const familyGoals = user.goals.filter((item: any) => item.kind.includes('Family'));
        const personalGoals = user.goals.filter((item: any) => item.kind.includes('Personal'));
        const communityGoals = user.goals.filter((item: any) => item.kind.includes('Community'));

        return {
            family_goals: familyGoals,
            personal_goals: personalGoals,
            community_goals: communityGoals,

            use_family_goals: familyGoals.length > 0,
            use_personal_goals: personalGoals.length > 0,
            use_community_goals: communityGoals.length > 0,
        }

    } catch (e) {
        console.log(e);
        return e;
    }
};

