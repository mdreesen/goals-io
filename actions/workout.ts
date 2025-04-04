"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';

export async function fetchWorkout() {
    const session = await getServerSession();

    try {
        await connectDB();

        const data = await User.find({ email: session?.user.email }, 'workout');
        const limited = await User.find({ email: session?.user.email }, { workout:{ $slice: -10 } }).limit(10);

        return {
            data: data[0].workout.reverse() ?? [],
            limited: limited[0].workout.reverse() ?? [],
            totalWorkouts: data[0].workout.length.toString()
        }

    } catch (e) {
        console.log(e);
        return e;
    }
};

export async function addWorkout(values: any) {
    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { workout: { ...values } } }, { new: true });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function editWorkout(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'workout._id': _id },
            { $set: { 'workout.$': { ...values } } },
            { new: true });

        revalidatePath('/dashboard/body');


    } catch (e) {
        console.log(e)
        return e
    }
};

export async function deleteWorkout(values: any) {
    const { id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'workout._id': id },
            { $pull: { 'workout': { _id: id } } },
            { new: true });

        revalidatePath('/dashboard/body');


    } catch (e) {
        console.log(e)
        return e
    }
};

export async function fetchWorkoutById(values: any) {
    const { id } = values;
    const session = await getServerSession();

    try {
        await connectDB();

        const user = await User.findOne({ email: session?.user.email });

        const workout = user.workout.filter((item: any) => {
            const idToString = item.id.toString()
            return idToString.includes(id)
        });

        return workout[0]

    } catch (e) {
        console.log(e);
        return e;
    }
};