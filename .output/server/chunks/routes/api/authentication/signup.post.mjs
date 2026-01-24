import { d as defineEventHandler, r as readValidatedBody, c as createError } from '../../../nitro/nitro.mjs';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { c as connectDB } from '../../../_/mongodb.mjs';
import { U as User$1 } from '../../../_/User.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'mongoose';

function settings() {
  return [
    { setting: "showAffirmations", title: "Show Affirmations", value: true },
    { setting: "showBible", title: "Show Bible", value: true },
    { setting: "showBooks", title: "Show Books", value: true },
    { setting: "showColdSoak", title: "Show Cold Soak", value: true },
    { setting: "showFasting", title: "Show Fasting", value: true },
    { setting: "showGratitudes", title: "Show Gratitudes", value: true },
    { setting: "showHabits", title: "Show Habits", value: true },
    { setting: "showJournal", title: "Show Journal", value: true },
    { setting: "showWaterIntake", title: "Show Hydration", value: true },
    { setting: "showWeight", title: "Show Weight", value: true },
    { setting: "showWorkout", title: "Show Workout", value: true },
    { setting: "darkMode", title: "Dark Mode", value: false }
  ];
}

const User = User$1;
const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  confirm_password: z.string().min(8),
  privacy_policy: z.boolean()
});
const signup_post = defineEventHandler(async (event) => {
  const { email, password, confirm_password, privacy_policy } = await readValidatedBody(event, bodySchema.parse);
  try {
    await connectDB();
    const user = await User.findOne({ email });
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!password) throw createError({ statusCode: 401, statusMessage: "Please insert password.", data: { errorMessage: "The requested item could not be found." } });
    if (!password && !confirm_password) throw createError({ statusCode: 401, statusMessage: "Please insert password.", data: { errorMessage: "The requested item could not be found." } });
    if (password !== confirm_password) throw createError({ statusCode: 401, statusMessage: "Passwords do not match.", data: { errorMessage: "The requested item could not be found." } });
    if (user) throw createError({ statusCode: 401, statusMessage: "User already registered.", data: { errorMessage: "The requested item could not be found." } });
    const registerUser = new User({
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      privacy_policy,
      settings: settings()
    });
    await registerUser.save();
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      statusMessage: "Please try again."
    });
  }
});

export { signup_post as default };
//# sourceMappingURL=signup.post.mjs.map
