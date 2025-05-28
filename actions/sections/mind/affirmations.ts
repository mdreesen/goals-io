"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';

export async function fetchAffirmations() {
    const session = await getServerSession();

    try {
        await connectDB();

        const data = await User.find({ email: session?.user.email }, 'affirmations');

        return data[0].affirmations ?? []
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function addAffirmation(values: any) {

    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { affirmations: { ...values } } }, { new: true });

    } catch (error) {
        console.log(error)
        return error
    }
};

export async function editAffirmation(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'affirmations._id': _id },
            { $set: { 'affirmations.$': { ...values } } },
            { new: true });

        revalidatePath('/dashboard/mind');


    } catch (error) {
        console.log(error)
        return error
    }
};

export async function deleteAffirmations(values: any) {
    const { id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'affirmations._id': id },
            { $pull: { 'affirmations': { _id: id } } },
            { new: true });

        revalidatePath('/dashboard/mind');


    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchAffirmationsById(values: any) {
    const { id } = values;

    const session = await getServerSession();

    try {
        await connectDB();

        const user = await User.findOne({ email: session?.user.email });

        const affirmations = user.affirmations.filter((item: any) => {
            const idToString = item.id.toString()
            return idToString.includes(id)
        });

        return affirmations[0]

    } catch (error) {
        console.log(error);
        return error;
    }
};

export async function filterAffirmations() {

    const session = await getServerSession();

    try {
        await connectDB();

        const data = await User.find({ email: session?.user.email }, 'affirmations');

        const growthAffirmations = data[0].affirmations?.filter((item: any) => item.kind.includes('Growth')) ?? [];
        const mindfulnessAffirmations = data[0].affirmations?.filter((item: any) => item.kind.includes('Mindfulness'));
        const positivityAffirmations = data[0].affirmations?.filter((item: any) => item.kind.includes('Positivity'));
        const selfWorthAffirmations = data[0].affirmations?.filter((item: any) => item.kind.includes('Self Worth'));

        return {
            growth_affirmations: growthAffirmations,
            mindfulness_affirmations: mindfulnessAffirmations,
            positivity_affirmations: positivityAffirmations,
            selfWorth_affirmations: selfWorthAffirmations,

            use_growth_affirmations: growthAffirmations?.length > 0,
            use_mindfulness_affirmations: mindfulnessAffirmations?.length > 0,
            use_positivity_affirmations: positivityAffirmations?.length > 0,
            use_selfWorth_affirmations: selfWorthAffirmations?.length > 0,
        }

    } catch (error) {
        console.log(error);
        return error;
    }
};

