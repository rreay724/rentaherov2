import mongoose from 'mongoose'

const HeroSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 60,
    },

    summary: { type: String, required: true, maxLength: 300 },

    img: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    additionalServices: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },

    affiliation: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      required: true,
    },

    additionalImages: {
      type: [{ src: { type: String, required: false } }],
    },
  },
  { timestamps: true }
)

export default mongoose.models.Hero || mongoose.model('Hero', HeroSchema)
