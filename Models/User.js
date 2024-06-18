import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "userName"
  },
  email:String,
  password:String,
  links:[]
});

export default mongoose.model("users", UserSchema);