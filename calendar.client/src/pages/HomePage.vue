<template>
  <div v-if="view == 'year'">
    <YearView />
  </div>
  <div v-else-if="view == 'month'">
    <MonthView />
  </div>
</template>

<script>
import { computed } from "vue"
import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { yearsService } from "../services/YearsService.js"
import YearView from "../components/YearView.vue"
import MonthView from "../components/MonthView.vue"

export default {
  setup() {
    return {
      view: computed(() => AppState.view),
    }
  },
  components: { YearView, MonthView }
}
</script>

<style>
.col-week {
  flex: 0 0 auto;
  width: 14.28571429%;
}

p {
  font-size: smaller;
}
</style>