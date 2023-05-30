import { AppState } from "../AppState.js"
import { yearsService } from "./YearsService.js"

class MonthsService {
  monthUp() {
    if (AppState.currentMonth == 11) {
      yearsService.yearUp()
      AppState.currentMonth = 0
    }
    else
      AppState.currentMonth += 1
  }

  monthDown() {
    if (AppState.currentMonth == 0) {
      yearsService.yearDown()
      AppState.currentMonth = 11
    }
    else
      AppState.currentMonth -= 1
  }

  setMonth(index) {
    AppState.currentMonth = index
  }

}

export const monthsService = new MonthsService()