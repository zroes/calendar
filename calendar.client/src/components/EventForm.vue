<template>
  <form @submit.prevent="formSubmit" class="p-3">
    <h1 class="pb-3">Create an Event</h1>
    <div class="form-floating mb-3">
      <input v-model="editable.title" type="text" class="form-control" id="floatingInput" placeholder="">
      <label for="floatingInput">Title</label>
    </div>
    <div class="form-floating mb-3">
      <textarea v-model="editable.desc" class="form-control" placeholder="" id="floatingTextarea"></textarea>
      <label for="floatingTextarea">Description</label>
    </div>
    <div class="d-flex">

      <div class="px-2 py-2">
        <input v-model="editable.date" type="date">
      </div>
      <div class="py-2 mx-3 ms-4">Time: </div>
      <div class="">
        <select class="form-select" aria-label="Pick a time" v-model="editable.hours">
          <option v-for="i in 12" :key="i" :value="i">{{ i }}</option>
        </select>
      </div>
      <div class="p-2">:</div>
      <div class="">
        <select class="form-select" aria-label="Pick a time" v-model="editable.minutes">
          <option v-for="i in (60 / 5)" :key="(i * 5) - 5" :value="(i * 5) - 5">{{ ((i * 5) - 5).toString().padStart(2,
            '0') }}</option>
        </select>
      </div>
      <div class="py-1 px-3">
        <label class="py-1 px-2" for="isPM">PM?</label>
        <input class="py-2 m-0" type="checkbox" name="PM" id="isPM" v-model="editable.isPM">
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-secondary">Submit</button>
    </div>
  </form>
</template>

<script>
import { computed, ref } from "vue"
import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { eventsService } from "../services/EventsService.js"


export default {
  setup() {
    // private variables and methods here
    const editable = ref({
      hours: 12,
      minutes: 0,
      date: new Date().toISOString().slice(0, 10),
      isPM: false
    })
    return {
      editable,
      async formSubmit() {
        logger.log(editable.value)
        try {
          const data = {}
          const dateComponents = editable.value.date.split('-')
          if (editable.value.isPM)
            editable.value.hours += 12
          data.date = new Date(dateComponents[0], parseInt(dateComponents[1]) - 1,
            dateComponents[2], editable.value.hours, editable.value.minutes, 0, 0)
          data.title = editable.value.title
          data.desc = editable.value.desc
          logger.log('data', data)
          await eventsService.createEvent(data)
          editable.value = {
            hours: 12,
            minutes: 0,
          }
        } catch (error) {
          Pop.error(error)
        }
      }
      // public variables and methods here
    }
  },
}
</script>

<style></style>