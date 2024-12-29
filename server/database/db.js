import mongoose from "mongoose";

const connectDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb connected" + conn.connection.host);
    } catch (error) {
        console.log(`error connection to mongodb ${error.message}`);
        process.exit(1);
    }
}

export default connectDb;