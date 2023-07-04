<template>
  <form @submit="formSubmit" class="p-3">
    <h1 class="pb-3">Create an Event</h1>
    <div class="form-floating mb-3">
      <input v-model="editable.title" type="text" class="form-control" id="floatingInput" placeholder="">
      <label for="floatingInput">Title</label>
    </div>
    <div class="form-floating mb-3">
      <textarea v-model="editable.desc" class="form-control" placeholder="" id="floatingTextarea"></textarea>
      <label for="floatingTextarea">Description</label>
    </div>
    <div>
      <input v-model="editable.date" type="date">
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
export default {
  setup() {
    // private variables and methods here
    const editable = ref({})
    return {
      editable,
      formSubmit() {
        logger.log(editable.value)
      }
      // public variables and methods here
    }
  },
}
</script>

<style></style>