"use server";
import User from "@/(models)/User";
import bcrypt from "bcryptjs";
import { RegisterFormSchema } from "@/lib/rules";
import { redirect } from "next/navigation";

export async function settings() {
    try {

        const useSettings = [
            { setting: 'showAffirmations', title: 'Show Affirmations', value: true },
            { setting: 'showBible', title: 'Show Bible', value: true },
            { setting: 'showBooks', title: 'Show Books', value: true },
            { setting: 'showFasting', title: 'Show Fasting', value: true },
            { setting: 'showHabits', title: 'Show Habits', value: true },
            { setting: 'showJournal', title: 'Show Journal', value: true },
            { setting: 'showWaterIntake', title: 'Show Water Intake', value: true },
            { setting: 'showWeight', title: 'Show Weight', value: true },
            { setting: 'showWorkout', title: 'Show Workout', value: true },
            { setting: 'darkMode', title: 'Dark Mode', value: false },
        ]

        return useSettings;

    } catch (error) {
        console.log(error);
    }
}

export async function register(state: any, formData: any) {
    const userSettings = await settings();

    // Must validate the formData fields from Sign Up
    const validateFields = RegisterFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        confirm_password: formData.get("confirm_password"),
        verify_human: formData.get("verify_human"),
        privacy_policy: formData.get('privacy_policy'),
    });

    // Guard clause if erroring happens
    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            email: formData.get("email"),
            password: formData.get("password"),
            confirm_password: formData.get("confirm_password"),
        };
    };

    const { email, password, privacy_policy } = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userFound = await User.findOne({ email });

    if (userFound) return { errors: { 
        email: "Email is already registered.",
        password: [],
        confirm_password: [],
        verify_human: ''
    }}

    const user = new User({
        email: email,
        password: hashedPassword,
        settings: userSettings,
        privacy_policy: privacy_policy === 'on' ? true : false
    });

    await user.save();

    redirect('/');
}