"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';
import { findHighestNumber, findAverageNumber, lossOrGain } from '@/lib/formatters'

export async function fetchWeight() {
    const session = await getServerSession();

    try {
        await connectDB();

        // Getting weight and limiting
        const data = await User.find({ email: session?.user.email }, 'weight');
        const limited = await User.find({ email: session?.user.email }, { weight:{ $slice: -10 } }).limit(10);
        const useNumber = data[0].weight.map((item: any) => Number(item.weight));
        const startingWeight =  data[0].weight.find((item: any) => item.starting_weight === true);
        const current = limited[0].weight.reverse()[0]?.weight ?? '0';
        const lostOrGained = lossOrGain({ starting: startingWeight?.weight, current: current });
        const positiveInteger = Math.abs(Number(lostOrGained))

        return {
            data: data[0].weight.reverse(),
            limited: limited[0].weight ?? [],
            dataToDate:limited[0].weight[0],
            highestWeight: findHighestNumber(useNumber),
            startingWeight: startingWeight,
            averageWeight: findAverageNumber(useNumber),
            lossOrGain: lostOrGained.includes('-') ? `Gained ${positiveInteger.toString()} lbs` : `Lost ${lostOrGained === 'NaN' ? '0' : lostOrGained} lbs`,
            weightLGType: lostOrGained.includes('-') ? 'increase' : 'decrease',
            totalWeight: data[0].weight.length.toString()
        }

    } catch (error) {
        console.log(error);
        return error;
    }
};

export async function fetchWeightOverview() {
    const session = await getServerSession();

    try {
        await connectDB();

        // Getting weight and limiting
        const data = await User.find({ email: session?.user.email }, 'weight');
        const limited = await User.find({ email: session?.user.email }, { weight:{ $slice: -10 } }).limit(10);
        const useNumber = data[0].weight.map((item: any) => Number(item.weight));
        const startingWeight =  data[0].weight.find((item: any) => item.starting_weight === true);
        const current = limited[0].weight.reverse()[0]?.weight ?? '0';
        const lostOrGained = lossOrGain({ starting: startingWeight?.weight, current: current });
        const positiveInteger = Math.abs(Number(lostOrGained))

        return {
            dataToDate:limited[0].weight[0],
            highestWeight: findHighestNumber(useNumber),
            startingWeight: startingWeight,
            averageWeight: findAverageNumber(useNumber),
            lossOrGain: lostOrGained.includes('-') ? `Gained ${positiveInteger.toString()} lbs` : `Lost ${lostOrGained === 'NaN' ? '0' : lostOrGained} lbs`,
            weightLGType: lostOrGained.includes('-') ? 'increase' : 'decrease',
            totalWeight: data[0].weight.length.toString()
        }

    } catch (error) {
        console.log(error);
        return error;
    }
};

export async function addWeight(values: any) {
    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { weight: { ...values } } }, { new: true });

    } catch (error) {
        console.log(error)
        return error
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

        revalidatePath('/dashboard/body');


    } catch (error) {
        console.log(error)
        return error
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

        revalidatePath('/dashboard/body');


    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchWeightById(values: any) {
    const { id } = values;
    const session = await getServerSession();

    try {
        await connectDB();

        const user = await User.findOne({ email: session?.user.email });

        const weight = user.weight.filter((item: any) => {
            const idToString = item.id.toString()
            return idToString.includes(id)
        });

        return weight[0]

    } catch (error) {
        console.log(error);
        return error;
    }
};