import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connectionStatus = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "torBox",
    });
    console.log(
      `DataBase Connected Successfully. 🚨PORT:${connectionStatus.connection.port}`
    );
  } catch (error) {
    console.log(`Unable to connect DB${error}`);
  }
};

export { dbConnection };
