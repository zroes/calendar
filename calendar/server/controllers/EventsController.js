import { eventsServce } from "../services/EventsService.js"
import BaseController from "../utils/BaseController.js"

export class EventsController extends BaseController {
  constructor() {
    super('api/calendar-events')
    this.router
      .post('', this.create)
  }
  async create(req, res, next) {
    try {
      const eventData = req.body
      // eventData.creatorId = req.userInfo.id
      const newCalendarEvent = await eventsServce.create(eventData)
      return res.send(newCalendarEvent)
    } catch (error) {
      next(error)
    }
  }
}