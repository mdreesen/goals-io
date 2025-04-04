"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import bcrypt from "bcryptjs";

export async function settings() {
    try {
        
        const useSettings = [
            {setting: 'showAffirmations', title: 'Show Affirmations', value: true},
            {setting: 'showBible', title: 'Show Bible', value: true},
            {setting: 'showBooks', title: 'Show Books', value: true},
            {setting: 'showFasting', title: 'Show Fasting', value: true},
            {setting: 'showHabits', title: 'Show Habits', value: true},
            {setting: 'showJournal', title: 'Show Journal', value: true},
            {setting: 'showWaterIntake', title: 'Show Water Intake', value: true},
            {setting: 'showWeight', title: 'Show Weight', value: true},
            {setting: 'showWorkout', title: 'Show Workout', value: true},
        ]
        
        return useSettings;

    } catch (e) {
        console.log(e);
    }
}

export async function register(values: any) {
    const { email, password, confirm_password, verify_human, privacy_policy } = values;
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
        if (verify_human !== '5') {
            return {
                error: 'Are you a bot? Try again!'
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email: email.trim().toLowerCase(),
            password: hashedPassword,
            settings: userSettings,
            privacy_policy: privacy_policy === 'on' ? true : false
        });

        await user.save();

    } catch (e) {
        console.log(e);
    }
}