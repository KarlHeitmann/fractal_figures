<template>
  <div class="sidebar">
    <div class="config-item">
      <label>Recursion depth:</label>
      <input v-model="fibonacci_n" placeholder="Fibonacci n">
    </div>
    <div class="config-item">
      <label>Stroke size:</label>
      <input v-model="stroke_size" placeholder="Stroke size">
    </div>
    <div class="config-item">
      <label>Steps to draw:</label>
      <input v-model="steps_to_draw" placeholder="Steps to draw">
    </div>
    <vue-slider v-model="fibonacci_n" />
    <div class="config-item">
      <label>Origin X:</label>
      <input v-model="origin_x" placeholder="Origin X">
    </div>
    <div class="config-item">
      <label>Origin Y:</label>
      <input v-model="origin_y" placeholder="Origin Y">
    </div>
    <div class="config-item"><label>Manual:</label>
      <button v-on:click="manual">Manual</button>
    </div>
    <div class="config-item"><label>Auto:</label>
      <button v-on:click="auto">{{ start_text }}</button>
    </div>
    <button v-on:click="reset">Reset</button>
    <div class="config-item"><label>Canvas X size</label>
      <input
        v-model="size_x"
        @change="cambio_width"
        >
    </div>
    <div class="config-item"><label>Canvas Y size</label>
      <input
        v-model="size_y"
        @change="cambio_height"
        >
    </div>
  </div>
</template>

<script>
const ORIGIN_X = 50;
const ORIGIN_Y = 85;

import VueSlider from 'vue-slider-component'
export default {
  name: 'Sidebar',
  components: {
    VueSlider,
  },
  data (){
    return {
      fibonacci_n: 15,
      stroke_size: 10,
      size_x: 2000,
      size_y: 2000,
      steps_to_draw: 10,
      origin_x: ORIGIN_X,
      origin_y: ORIGIN_Y,
      fibonacci_string: "",
      start_text: "Start",
      value: 0,
    }
  },
  methods: {
    auto() {
      console.log("AUTO");
      this.$emit('messageFromChild', 'auto');
      // this.$emit('messageFromChild', 'click');
    },
    manual() {
      console.log("MANUAL");
      this.$emit('messageFromChild', 'manual');
    },
    reset() {
      console.log("RESET");
      this.$emit('messageFromChild', 'reset');
    }
  }
}
</script>

<style scoped>
  .config-item {
    display: flex;
  }

  .sidebar {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

</style>
