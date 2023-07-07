import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class EventsService {

  async createEvent(data) {
    const res = await api.post('api/calendar-events', data)
    logger.log(res.data)
  }

  async getEvents(month, year) {
    logger.log("month, year", month, year)
  }

}

export const eventsService = new EventsService()