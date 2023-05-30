import { reactive } from 'vue'
import { Year } from "./models/Year.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  currentYear: new Year(new Date().getFullYear()),
  currentMonth: parseInt(new Date().getMonth()),

  view: "year"
})
