import mongoose from "mongoose";
import { adminTransactionProps } from "./adminModel";

interface admin extends adminTransactionProps, mongoose.Document {}

const adminTransactionHistorySchema =
  new mongoose.Schema<adminTransactionProps>({
    message: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
    },
    
    date: {
      type: String,
    },
    transactionReference: {
      type: Number,
    },
  });
const adminTransactionHistory = mongoose.model<admin>(
  "adminTransaction",
  adminTransactionHistorySchema
);

export default adminTransactionHistory;
