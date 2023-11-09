import dotenv from "dotenv";
import connectionDB from "./db/index.js";

dotenv.config({ path: "./.env" });

connectionDB();

/*const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Connection Error: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is running on Port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
})(); */
