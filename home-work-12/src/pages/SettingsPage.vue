<script>
  import {ref} from "vue";

  const lastResult = ref(JSON.parse(localStorage.getItem('lastResult')))
  const time = ref(1)
  const complexity = ref(1)
  const sum = ref(true)
  const diff = ref(false)
  const multi = ref(false)
  const division = ref(false)
  const exponent = ref(false)

  console.log(time.value)

  const onPlayClick = () => {
    const settings = {
      time: time.value,
      complexity: complexity.value,
      sum: sum.value,
      diff: diff.value,
      multi: multi.value,
      division: division.value,
      exponent: exponent.value
    }

    localStorage.setItem('settings', JSON.stringify(settings))
  }

  export default {
    data() {
      return {
        time,
        complexity,
        sum,
        diff,
        multi,
        division,
        exponent,
        lastResult: lastResult.value
      }
    },
    methods: {
      onPlayClick
    }
  }
</script>

<template>
  <h1>Привет!</h1>
  <p v-if="lastResult">
    Ваш последний результат - решено {{lastResult.right}} из {{lastResult.total}}.
    Общая точность {{lastResult.accuracy}}%
  </p>
  <h1>Настройка</h1>
  <div>
    <div>
      <input v-model="time" type="range" min="1" max="15" step="1">
      <p>Длительность {{time}} минут</p>
    </div>
    <div>
      <input v-model="complexity" type="range" min="1" max="10" step="1">
     <p>Сложность {{complexity}}</p>
    </div>
    <div>
      <div>
        <input v-model="sum" type="checkbox" id="sum">
        <label for="sum">Суммирование</label>
      </div>
      <div>
        <input v-model="diff" type="checkbox" id="diff">
        <label for="diff">Разность</label>
      </div>
      <div>
        <input v-model="multi"  type="checkbox" id="multi">
        <label for="multi">Умножение</label>
      </div>
      <div>
        <input v-model="division"  type="checkbox" id="division">
        <label for="division">Деление</label>
      </div>
      <div>
        <input v-model="exponent"  type="checkbox" id="exponent">
        <label for="exponent">Возведение в степень</label>
      </div>
    </div>
    <br>
    <RouterLink :to="'/play'">
      <button @click="onPlayClick">Play</button>
    </RouterLink>
  </div>
</template>

