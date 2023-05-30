import { AppState } from "../AppState.js"

class ViewService {

  changeView(value) {
    AppState.view = value
  }
}

export const viewService = new ViewService()