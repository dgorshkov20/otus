<style>
  .grid {
    width: 75%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .panel-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .operations {
    display: flex;
    flex-direction: column;
    width: 25%;
  }

  .calc-input {
    margin: 15px auto;
    width: 250px;
  }
</style>

<script>
  import {ref} from "vue";
  import {useRouter} from "vue-router";

  let router

  const testData = [
    {
      answer: 123
    },
    {
      answer: 321
    }
  ]

  const currentTask = ref(0)
  const inputValue = ref('')
  const isRight = ref(false)
  const isFirstClick = ref(false)

  export default {
    data() {
      return {
        inputValue,
        testData,
        currentTask,
        isRight,
        isFirstClick
      }
    },
    setup() {
      router = useRouter()
    },
    methods: {
      addValue(val) {
        inputValue.value += val
      },
      checkAnswer() {
        isFirstClick.value = true
        isRight.value = eval(inputValue.value) === testData[currentTask.value].answer
        inputValue.value = ''
        if (testData[currentTask.value + 1]) {
          currentTask.value += 1
        } else {
          router.push({
            path: '/'
          })
        }
      }
    },
  }
</script>

<template>
  <div class="calc-input">
    <input v-model="inputValue" type="text">
    <span> = {{testData[currentTask].answer}}?</span>
  </div>
  <div class="panel-wrapper">
    <div class="grid">
      <button
          class="grid-item"
          v-for="number of [1,2,3,4,5,6,7,8,9,0]"
          v-bind:key="number"
          @click="addValue(number)"
      >{{number}}</button>
    </div>
    <div class="operations">
      <button
          v-for="operation of ['+', '-', '*', '/']"
          v-bind:key="operation"
          @click="addValue(operation)"
      >{{ operation }}</button>
    </div>
  </div>
    <button @click="checkAnswer">Check Answer</button>
  <div v-if="isFirstClick">
    <p v-if="isRight">Верно</p>
    <p v-else>Не Верно</p>
  </div>
</template>
