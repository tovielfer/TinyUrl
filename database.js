import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/TinyUrl";

const connectDB = async () => {
  await mongoose.connect(uri);
};
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})

mongoose.set('toJSON', {
  virtuals: true,
  transform: (doc, converted) => {
    delete converted.id;
  }
})

export default connectDB;
