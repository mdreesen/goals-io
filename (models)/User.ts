import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const bookSchema = new Schema(
    {
        book_title: String || undefined,
        kind_of_book: String || undefined,
        book_author: String || undefined,
    }, { timestamps: false });

const userSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        phone: String,
        password: String,
        houseNumber: String,
        street: String,
        city: String,
        address_road: String,
        address_city: String,
        address_state: String,
        address_street: String,
        postalCode: String,
        state: String,
        county: String,
        books: [bookSchema],
        resetPasswordToken: String,
        createdAt: String,
        updatedAt: String
    }, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;