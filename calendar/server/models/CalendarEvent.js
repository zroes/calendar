import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CalendarEventsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    date: { type: Date, required: true },
    time: { type: String, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

