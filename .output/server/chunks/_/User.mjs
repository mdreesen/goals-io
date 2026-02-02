import mongoose, { Schema } from 'mongoose';
import { z } from 'zod';

const EnvSchema = z.object({
  MONGO_URI: z.string(),
  RESEND_KEY: z.string(),
  PROJECT_DOMAIN: z.string(),
  NUXT_SESSION_PASSWORD: z.string()
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
    duration: Number || void 0,
    time_fasted: String || void 0
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
    weight: Number || String || void 0,
    date: String || void 0,
    weight_date: String || void 0
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
const User = mongoose.models.User || mongoose.model("User", userSchema);

export { User as U };
//# sourceMappingURL=User.mjs.map
