const mongoose = require("mongoose");
const colors = require("colors");

const uri ='mongodb+srv://joshi1012ivishal:P@ssword1012@cluster0.amt0pov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

