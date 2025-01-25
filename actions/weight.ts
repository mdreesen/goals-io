"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';
import { findHighestNumber, findAverageNumber } from '@/lib/formatters'

export async function fetchWeight() {

    try {
        await connectDB();
        const session = await getServerSession();

        // Getting weight and limiting
        const data = await User.find({ email: session?.user.email }, 'weight');
        const limited = await User.find({ email: session?.user.email }, { weight:{ $slice: -10 } }).limit(10);
        const useNumber = data[0].weight.map((item: any) => Number(item.weight));
        const startingWeight =  data[0].weight.find((item: any) => item.starting_weight === true);

        return {
            limited: limited[0].weight ?? [],
            highestWeight: findHighestNumber(useNumber),
            startingWeight: startingWeight,
            averageWeight: findAverageNumber(useNumber)
        }

    } catch (e) {
        console.log(e);
        return e;
    }
};

export async function addWeight(values: any) {

    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { weight: { ...values } } }, { new: true });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function editWeight(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'weight._id': _id },
            { $set: { 'weight.$': { ...values } } },
            { new: true });

        revalidatePath('/dashboard/weight');


    } catch (e) {
        console.log(e)
        return e
    }
};

export async function deleteWeight(values: any) {
    const { id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'weight._id': id },
            { $pull: { 'weight': { _id: id } } },
            { new: true });

        revalidatePath('/dashboard/weight');


    } catch (e) {
        console.log(e)
        return e
    }
};

export async function fetchWeightById(values: any) {
    const { id } = values;
    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });

        const weight = user.weight.filter((item: any) => {
            const idToString = item.id.toString()
            return idToString.includes(id)
        });

        return weight[0]

    } catch (e) {
        console.log(e);
        return e;
    }
};