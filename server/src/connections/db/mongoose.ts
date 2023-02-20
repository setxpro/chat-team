import mongoose from "mongoose";

export default async function ConnectionMongoose() {
    await mongoose.connect(`${process.env.MONGO_URL}`)
    .then(() => console.log('Connected to Mongoose'))
    .catch(() => console.log('Error connecting to Mongoose'))
}

ConnectionMongoose();