import mongoose from "mongoose";

export const connect = async (): Promise<void> => {
  console.log("Process.env: " + process.env.MONGO_URL);
  try {
    await mongoose.connect(
      process.env.MONGO_URL + "?retryWrites=true&w=majority"
    );
    console.log("Connect success !");
  } catch (error) {
    console.error("Error connecting to the database");
    console.error(error);
  }
};
