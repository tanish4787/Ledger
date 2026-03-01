import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log('Connected To DB 💾')
  } catch (error) {
    console.error("Error Connecting to DB");
    process.exit(1);
  }
};

export default ConnectDB;
