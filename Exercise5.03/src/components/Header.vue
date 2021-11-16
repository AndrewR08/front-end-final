<template>
  <header class="w-full flex flex-row">
    <h2 class="text-xl flex flex-row">App State Football 2021</h2>
    <button
      @click="home()"
      class="flex ml-auto text-gray-800 items-center"
    >
      Home
    </button>
    <button
      @click="away()"
      class="flex ml-auto text-gray-800 items-center"
    >
      Away
    </button>
    <button
      @click="nonCon()"
      class="flex ml-auto text-gray-800 items-center"
    >
      Non-Conference
    </button>
  </header>
</template>
<script>
import eventBus from '../event-bus'

export default {
  methods: {
    home() {
      eventBus.$emit('profileUpdate', {})
    },
    away() {
      eventBus.$emit('profileUpdate', {})
    },
    nonCon() {
      eventBus.$emit('profileUpdate', {})
    }
  }
}
</script>

<style scoped>
  .w-full {
    text-align: center;
    background-color: black;
    margin-top: -20px;
    margin-left: -10px;
    margin-right: -20px;
  }
  .text-xl {
    color: goldenrod;
  }
</style>