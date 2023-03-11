<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<script>
import CalculatorComponent from "@/components/CalculatorComponent";
import {ref} from "vue";

const settings = JSON.parse(localStorage.getItem('settings'))
const time = ref(settings.time * 60)

export default {
  data() {
    return {
      time,
    }
  },
  components: {CalculatorComponent},
  mounted() {
    const timerId = setInterval(() => {
      time.value -= 1
      if (time.value <= 0) {
        clearInterval(timerId)
      }
    }, 1000)
  },
}
</script>

<template>
  <div class="header">
    <div>
      <RouterLink :to="'/'">
        <button>Отмена</button>
      </RouterLink>
    </div>
    <div>
      Время: {{time}}
    </div>
  </div>

  <div>
    <CalculatorComponent />
  </div>
</template>



