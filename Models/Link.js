import mongoose from "mongoose";

const LinkSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
        default: "google.com"
    },
    clicks: [
        {
            insertedAt: Date,
            ipAddress: String,
            targetParamValue: String
        }
    ],
    targetParamName: "t",
    targetValues: [
        {
            _id: 0,
            name:String,
            value: String
        }
    ]
});

export default mongoose.model("links", LinkSchema);