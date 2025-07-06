"use server";
import User from "@/(models)/User";
import bcrypt from "bcryptjs";
import { RegisterFormSchema } from "@/lib/rules";
import { redirect } from "next/navigation";
import { userSettings, userAffirmations, userHabits, userJournal } from "@/lib/defaults/newUserData";

export async function register(state: any, formData: any) {
    const defaultUserSettings = userSettings();
    const defaultUserAffirmations = userAffirmations();
    const defaultUserHabits = userHabits();
    const defaultUserJournal = userJournal();

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
        email: email.toLowerCase(),
        password: hashedPassword,
        affirmations: defaultUserAffirmations,
        habits: defaultUserHabits,
        journal: defaultUserJournal,
        settings: defaultUserSettings,
        privacy_policy: privacy_policy === 'on' ? true : false
    });

    await user.save();

    redirect('/');
}