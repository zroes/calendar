<template>
  <form>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Title</label>
    </div>
    <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
      <label for="floatingTextarea">Description</label>
    </div>
    <div>
      <input type="date">
    </div>
  </form>
</template>

<script>
import { computed } from "vue"
import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
export default {
  setup() {
    // private variables and methods here
    return {
      value: ''
      // public variables and methods here
    }
  },
}
</script>

<style></style>