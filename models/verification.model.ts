import mongoose from "mongoose";

const verifySchema = new mongoose.Schema(
  {
        email: String,
        otpCode: {
            type: String,
            required: true,
        },
        expiresAt: {
            type: Date,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
      timestamps: true,
    }
);

const Verification = mongoose.model(
  "Verification",
  verifySchema,
  "verification"
);

export default Verification;
