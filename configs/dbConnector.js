import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connectionStatus = await mongoose.connect('mongodb+srv://eysaif:dAPPxEBrJ0Uf3FYa@cluster0.o73gikv.mongodb.net/?retryWrites=true&w=majority', {
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
