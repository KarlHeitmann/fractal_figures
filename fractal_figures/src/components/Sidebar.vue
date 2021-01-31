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
      <button v-on:click="step">{{ start_text }}</button>
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
import VueSlider from 'vue-slider-component'
export default {
  name: 'Sidebar',
  components: {
    VueSlider,
  },
  methods: {
    step() {
      console.log("STEP");
      this.$emit('messageFromChild', 'step');
      // this.$emit('messageFromChild', 'click');
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
