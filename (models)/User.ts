import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const affirmationsSchema = new Schema(
    {
        affirmation: String || undefined,
        kind: String || undefined,
        date: String || undefined,
    }, { timestamps: false });

const bibleSchema = new Schema(
    {
        book_title: String || undefined,
        chapter: String || undefined,
        verses: String || undefined,
        notes: String || undefined,
        type: String || undefined
    }, { timestamps: false });

const bookSchema = new Schema(
    {
        book_title: String || undefined,
        kind_of_book: String || undefined,
        book_author: String || undefined,
        book_start_date: String || undefined,
        book_end_date: String || undefined,
        book_image: String || undefined,
        notes: String || undefined,
        booklist: String || undefined
    }, { timestamps: false });

const fastingSchema = new Schema(
    {
        completed: Boolean || undefined,
        start_date: Date || undefined,
        ended: Boolean || undefined,
        start: Boolean || undefined,
        end_date: Date || undefined,
        duration: Number || undefined,
    }, { timestamps: false });

const habitsSchema = new Schema(
    {
        title: String || undefined,
        description: String || undefined,
        kind: String || undefined,
        status: String || undefined,
        date_start: String || undefined,
        date_end: String || undefined
    }, { timestamps: false });

const journalSchema = new Schema(
    {
        title: String || undefined,
        entry: String || undefined,
        date: String || undefined,
    }, { timestamps: false });

const settingsSchema = new Schema(
    {
        setting: String || undefined,
        title: String || undefined,
        value: Boolean || undefined
    }, { timestamps: false });

const waterIntakeSchema = new Schema(
    {
        water_intake: String || undefined,
        date: String || undefined,
    }, { timestamps: false });

const weightSchema = new Schema(
    {
        weight: String || undefined,
        weight_date: String || undefined,
        starting_weight: Boolean || undefined
    }, { timestamps: false });

const workoutSchema = new Schema(
    {
        type: String || undefined,
        description: String || undefined,
        sets: String || undefined,
        date: String || undefined,
    }, { timestamps: false });

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
    }, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;