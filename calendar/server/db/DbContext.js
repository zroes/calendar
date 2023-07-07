import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CalendarEventsSchema } from "../models/CalendarEvent.js"

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  CalendarEvent = mongoose.model('CalendarEvent', CalendarEventsSchema);
}

export const dbContext = new DbContext()
