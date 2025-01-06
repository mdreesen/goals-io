import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const bookSchema = new Schema(
    {
        book_title: String || undefined,
        kind_of_book: String || undefined,
        book_author: String || undefined,
        book_start_date: String || undefined,
        book_end_date: String || undefined
    }, { timestamps: false });

const weightSchema = new Schema(
    {
        weight: String || undefined,
        weight_date: String || undefined,
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
        books: [bookSchema],
        weight: [weightSchema],
        resetPasswordToken: String,
        createdAt: String,
        updatedAt: String
    }, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;