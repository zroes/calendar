import { AppState } from "../AppState.js"
import { Year } from "../models/Year.js"

class YearsService {
  yearUp() {
    AppState.currentYear = new Year(AppState.currentYear.year + 1)
  }

  yearDown() {
    AppState.currentYear = new Year(AppState.currentYear.year - 1)
  }

}

export const yearsService = new YearsService()