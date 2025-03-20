"use server"
import { nanoid } from "nanoid";
import { connectDB } from "@/lib/mongodb";
import { Resend } from 'resend';
import User from "@/(models)/User";

// https://www.youtube.com/watch?v=vAfUyKpWj_M

export const resetPassword = async (values: any) => {
    const { email, verify_human } = values;

    // Nanoid creates a unique string
    const token = nanoid(32);

    const htmlBody = `
    <div>
        <h1>Welcome to Ascend</h1>
        <a href="${process.env.PROJECT_DOMAIN}/authentication/reset-password/${token}">Click here to reset password</a>
    </div>
    `;

    try {
        await connectDB();

        if (verify_human !== '7') {
            return {
                error: 'Are you a bot? Try again!'
            }
        }
        else {
            const userFound = await User.findOne({ email });

            if (!userFound) {
                return {
                    error: 'Email not found'
                }
            }

            const resend = new Resend(`${process.env.RESEND_KEY}`);

            await resend.emails.send({
                from: 'NoReply@ascendpod.com',
                to: [email],
                subject: "Reset your password", // Subject line
                html: htmlBody
              });
    
            await User.findOneAndUpdate({ email: email }, { resetPasswordToken: token })
        }

    } catch (e) {
        console.log(e);
    }
}