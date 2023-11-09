import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectionDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log("Mongoos connected at: ", connectionInstance.connection.host);
  } catch (error) {
    console.log("Mongoos Coonection Failed: ", error);
    process.exit(1);
  }
};

export default connectionDB;
