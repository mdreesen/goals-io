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
        book_end_date: String || undefined
    }, { timestamps: false });

const fastingSchema = new Schema(
    {
        completed: Boolean || undefined,
        start_date: String || undefined,
        target_date: String || undefined,
        ended: Boolean || undefined,
        start: Boolean || undefined,
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
        affirmations: [affirmationsSchema],
        bibles: [bibleSchema],
        books: [bookSchema],
        fasting: [fastingSchema],
        weight: [weightSchema],
        water: [waterIntakeSchema],
        habits: [habitsSchema],
        settings: [settingsSchema],
        resetPasswordToken: String,
        createdAt: String,
        updatedAt: String
    }, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;