<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-2">
      <div class="col-3 d-flex justify-content-center">
        <button @click="yearDown()" class="btn btn-light"><i class="mdi mdi-arrow-left"></i></button>
        <h1 class="mx-4">{{ year.year }}</h1>
        <button @click="yearUp()" class="btn btn-light"><i class="mdi mdi-arrow-right"></i></button>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-light" @click="setView('month')">Month</button>
      <button class="btn btn-light" disabled>Year</button>
      <button class="btn btn-light">Day</button>
    </div>
    <div class="row">
      <div class="col-3" v-for="(month, index) in Object.keys(year.months)">
        <div class="px-3 mb-2">

          <p class="text-secondary m-0">{{ month }}</p>
          <div class="row border border-dark selectable" @click="setView('month'), setMonth(index)">
            <div v-for="day in weekdays" class="col-week border border-grey">
              <p class="text-center m-0 text-secondary" :title="day">{{ day.slice(0, 1) }}</p>
            </div>
            <div v-for="i in GetDay(month, 1, year.year)" class="col-week border border-grey">
              <!-- Displays the days from the previous month -->
              <div class="pb-2">
                <p class="m-0 text-secondary text-center">
                  {{ year.monthdays[index] - (GetDay(month, 1, year.year) - i) }}
                </p>
              </div>
            </div>
            <div v-for="day in year.months[month]" class="col-week border border-grey">
              <div class="pb-2">
                <!-- Displays the days from this month -->
                <p class="m-0 text-center">{{ day }}</p>
              </div>
            </div>
            <div v-for="i in 42 - (GetDay(month, 1, year.year) + year.months[month])" class="col-week border border-grey">
              <div class="pb-2">
                <!-- Displays the days from the next month -->
                <p class="m-0 text-center text-secondary">{{ i }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button data-bs-target="#event-form" data-bs-toggle="modal">hi</button>
  <MyModal id="event-form" size="modal-lg">
    <template #body>
      <EventForm />
    </template>
  </MyModal>
</template>

<script>
import { computed } from "vue"
import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { yearsService } from "../services/YearsService.js"
import { monthsService } from "../services/MonthsService.js"
import { viewService } from "../services/ViewService.js"
import MyModal from "./MyModal.vue"
import EventForm from "./EventForm.vue"


export default {
  setup() {
    return {
      year: computed(() => AppState.currentYear),
      weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      yearUp() {
        yearsService.yearUp()
      },
      yearDown() {
        yearsService.yearDown()
      },
      setView(value) {
        viewService.changeView(value)
      },
      setMonth(index) {
        monthsService.setMonth(index)
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
    }
  },
  components: { MyModal, EventForm }
}
</script>

<style scoped></style>