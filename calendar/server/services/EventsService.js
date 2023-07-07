import { dbContext } from "../db/DbContext.js"

class EventsService {
  async create(eventData) {
    const newCalendarEvent = await dbContext.CalendarEvent.create(eventData)
    return newCalendarEvent
  }

}
export const eventsServce = new EventsService()