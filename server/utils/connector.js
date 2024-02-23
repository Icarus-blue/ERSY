import mongoose from "mongoose";


export const connectDB = async () => {

    try {
        return await mongoose.connect(process.env.mongodbURL || 'mongodb://127.0.0.1:27017/ersy').then(() => {
            console.log("Success connection established")
        })
    } catch (err) {
        console.log('error connectiing to mongoose: ', err.message)
    }
}