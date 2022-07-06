import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxLength: 60,
    },

    address: { type: String, required: true, maxLength: 200 },

    // phoneNumber: { type: String, required: true, maxLength: 12 },

    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

// if scehma exists, use it, otherwise create new
export default mongoose.models.Order || mongoose.model('Order', OrderSchema)
