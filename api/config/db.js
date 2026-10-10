import mongoose from "mongoose"

const dbconnect = async () => {
    const con = await mongoose.connect('mongodb://localhost:27017/zentora');
    if (con) {
        console.log('database connected successfully');

    }
}
export default dbconnect