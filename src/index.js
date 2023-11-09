import dotenv from "dotenv";
import connectionDB from "./db/index.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT;

connectionDB()
  .then(() => {
    app.listen(port || 8000, () => {
      console.log(`Server running at port: ${port}`);
    });
  })
  .catch((err) => {
    console.log("Mongoo connection failed !!!");
  });

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
