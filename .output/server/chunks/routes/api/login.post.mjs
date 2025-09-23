import { d as defineEventHandler, r as readValidatedBody, c as createError, s as setUserSession } from '../../nitro/nitro.mjs';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import mongoose, { Schema } from 'mongoose';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';

const { MONGO_URI } = process.env;
const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

const EnvSchema = z.object({
  MONGO_URI: z.string(),
  RESEND_KEY: z.string(),
  PROJECT_DOMAIN: z.string()
});
const env = EnvSchema.parse(process.env);

mongoose.connect(`${env.MONGO_URI}`);
mongoose.Promise = global.Promise;
const affirmationsSchema = new Schema(
  {
    affirmation: String || void 0,
    kind: String || void 0,
    date: String || void 0
  },
  { timestamps: false }
);
const bibleSchema = new Schema(
  {
    book_title: String || void 0,
    chapter: String || void 0,
    verses: String || void 0,
    notes: String || void 0,
    type: String || void 0,
    icon: String || void 0,
    date: String || void 0
  },
  { timestamps: false }
);
const bookSchema = new Schema(
  {
    book_title: String || void 0,
    kind_of_book: String || void 0,
    book_author: String || void 0,
    book_start_date: String || void 0,
    book_end_date: String || void 0,
    book_image: String || void 0,
    notes: String || void 0,
    booklist: String || void 0
  },
  { timestamps: false }
);
const coldSoakSchema = new Schema(
  {
    dateFormatted: String || void 0,
    date: Date || void 0,
    duration: Number || void 0
  },
  { timestamps: false }
);
const fastingSchema = new Schema(
  {
    completed: Boolean || void 0,
    start_date: Date || void 0,
    ended: Boolean || void 0,
    start: Boolean || void 0,
    end_date: Date || void 0,
    duration: Number || void 0
  },
  { timestamps: false }
);
const gratitudeSchema = new Schema(
  {
    gratitude: String || void 0,
    date: String || void 0
  },
  { timestamps: false }
);
const habitsSchema = new Schema(
  {
    title: String || void 0,
    description: String || void 0,
    kind: String || void 0,
    status: String || void 0,
    date_start: String || void 0,
    date_end: String || void 0
  },
  { timestamps: false }
);
const journalSchema = new Schema(
  {
    title: String || void 0,
    entry: String || void 0,
    mood: String || void 0,
    date: String || void 0
  },
  { timestamps: false }
);
const settingsSchema = new Schema(
  {
    setting: String || void 0,
    title: String || void 0,
    value: Boolean || void 0
  },
  { timestamps: false }
);
const waterIntakeSchema = new Schema(
  {
    water_intake: String || void 0,
    date: String || void 0
  },
  { timestamps: false }
);
const weightSchema = new Schema(
  {
    weight: String || void 0,
    weight_date: String || void 0,
    starting_weight: Boolean || void 0
  },
  { timestamps: false }
);
const workoutSchema = new Schema(
  {
    type: String || void 0,
    description: String || void 0,
    sets: String || void 0,
    date: String || void 0,
    duration: String || void 0
  },
  { timestamps: false }
);
const userSchema = new Schema(
  {
    username: String,
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    password: String,
    country: String,
    street_address: String,
    city: String,
    region: String,
    postal_code: String,
    time_zone: String,
    fasting_time: Number,
    tutorial_read: Boolean,
    goal_weight: String,
    affirmations: [affirmationsSchema],
    bibles: [bibleSchema],
    books: [bookSchema],
    cold_soaks: [coldSoakSchema],
    gratitudes: [gratitudeSchema],
    fasting: [fastingSchema],
    habits: [habitsSchema],
    journal: [journalSchema],
    settings: [settingsSchema],
    water: [waterIntakeSchema],
    weight: [weightSchema],
    workout: [workoutSchema],
    resetPasswordToken: String,
    privacy_policy: Boolean,
    createdAt: String,
    updatedAt: String
  },
  { timestamps: true }
);
const User$1 = mongoose.models.User || mongoose.model("User", userSchema);

const User = User$1;
const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8)
});
const login_post = defineEventHandler(async (event) => {
  var _a;
  const { email, password } = await readValidatedBody(event, bodySchema.parse);
  try {
    await connectDB();
    const user = await User.findOne({ email });
    const passwordMatches = bcrypt.compare(password, (_a = user == null ? void 0 : user.password) != null ? _a : "");
    if (!password) return createError({ statusCode: 401, statusMessage: "Please insert password." });
    if (!passwordMatches) return createError({ statusCode: 401, statusMessage: "Wrong credentials" });
    await setUserSession(event, {
      user: {
        _id: user == null ? void 0 : user._id,
        username: user == null ? void 0 : user.username,
        first_name: (user == null ? void 0 : user.first_name) || "",
        last_name: (user == null ? void 0 : user.last_name) || "",
        name: `${user == null ? void 0 : user.first_name} ${user == null ? void 0 : user.last_name}` || "",
        email: user == null ? void 0 : user.email,
        phone: user == null ? void 0 : user.phone,
        country: user == null ? void 0 : user.country,
        street_address: user == null ? void 0 : user.street_address,
        city: user == null ? void 0 : user.city,
        region: user == null ? void 0 : user.region,
        postal_code: user == null ? void 0 : user.postal_code
      }
    });
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: "Please try again"
    });
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
