<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-2">
      <div class="d-flex justify-content-center">
        <button @click="monthDown()" class="btn btn-light"><i class="mdi mdi-arrow-left"></i></button>
        <h1 class="col-3 text-center">{{ months[monthIndex] }}</h1>
        <button @click="monthUp()" class="btn btn-light"><i class="mdi mdi-arrow-right"></i></button>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-light" disabled>Month</button>
      <button class="btn btn-light" @click="setView('year')">Year</button>
      <button class="btn btn-light">Day</button>
    </div>
    <div class="row mx-4">
      <!-- <div class="col-3" v-for="(month, index) in Object.keys(year.months)"> -->
      <div class="px-3 mb-2">

        <p class="text-secondary m-0">{{ year.year }}</p>
        <div class="row border border-dark">
          <div v-for="day in weekdays" class="col-week border border-grey">
            <p class="text-center m-0 text-secondary" :title="day">{{ day.slice(0, 3) }}</p>
          </div>
          <div v-for="i in GetDay(months[monthIndex], 1, year.year)" class="col-week border border-grey selectable">
            <div class="p-2 pb-4 mb-5">
              <!-- Displays the days from the previous month -->
              <p class="m-0 text-secondary">
                {{ year.monthdays[monthIndex] - (GetDay(months[monthIndex], 1, year.year) - i) }}
              </p>
            </div>
          </div>
          <div v-for="day in year.months[months[monthIndex]]" class="col-week border border-grey selectable">
            <div class="p-2 pb-4 mb-5">
              <!-- Displays the days from this month -->
              <p class="m-0" :class="today == `${monthIndex + 1}/${day}/${year.year}`
                ? 'text-danger fw-bold'
                : ''">
                {{ day }}
                <!-- {{ `${day}/${monthIndex + 1}/${year.year}` }} -->
              </p>
            </div>
          </div>
          <div v-for="i in 42 - (GetDay(months[monthIndex], 1, year.year) + year.months[months[monthIndex]])"
            class="col-week border border-grey selectable">
            <div class="p-2 pb-4 mb-5">
              <!-- Displays the days from the next month -->
              <p class="m-0 text-secondary">{{ i }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
  {{ today }}
</template>

<script>
import { computed } from "vue"
import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { viewService } from "../services/ViewService.js"
import { monthsService } from "../services/MonthsService.js"


export default {
  setup() {
    // private variables and methods here
    let months = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
    let monthIndex = computed(() => AppState.currentMonth)
    console.log(AppState.currentMonth)
    return {
      monthUp() {
        monthsService.monthUp()
      },
      monthDown() {
        monthsService.monthDown()
      },
      year: computed(() => AppState.currentYear),
      months,
      monthIndex,
      today: new Date().toLocaleDateString().slice(0, 10),
      // month: months[monthIndex],
      weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      setView() {
        viewService.changeView('year')
      },
      GetDay(month, day, year) {
        console.log(month, day, year)
        let monthCodes = {
          "March": 1,
          "April": 2,
          "May": 3,
          "June": 4,
          "July": 5,
          "August": 6,
          "September": 7,
          "October": 8,
          "November": 9,
          "December": 10,
          "January": 11,
          "February": 12
        }
        let century = parseInt(year.toString().slice(0, 2))
        let YY = parseInt(year.toString().slice(-2))
        if (month == "January" || month == "February")
          YY -= 1
        let daycode = (day + Math.floor(2.6 * monthCodes[month] - 0.2) - (2 * century) + YY + Math.floor(YY / 4) + Math.floor(century / 4)) % 7
        if (daycode < 0)
          return 7 + daycode
        return daycode
      }
      // public variables and methods here
    }
  },
}
</script>

<style></style>