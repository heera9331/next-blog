
import mongoose from "mongoose";

const connection = {};
const MONGO = process.env.MONGO;

const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    console.log(MONGO);
    const db = await mongoose.connect(MONGO);
    console.log('connected to db');
    // const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
  }
};

// connectDB("mongodb://127.0.0.1:27017/COLLEGE_COUNSELLING");

export default connectDB;
