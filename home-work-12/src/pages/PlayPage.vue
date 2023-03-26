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

let timerId

const time = ref(0)

export default {
  data() {
    return {
      time,
    }
  },
  components: {CalculatorComponent},
  mounted() {
    const settings = JSON.parse(localStorage.getItem('settings'))
    time.value = settings?.time ? settings.time * 60 : 0
     timerId = setInterval(() => {
      time.value -= 1
      if (time.value <= 0) {
        clearInterval(timerId)
      }
    }, 1000)
  },

  unmounted() {
    clearInterval(timerId)
  }
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



