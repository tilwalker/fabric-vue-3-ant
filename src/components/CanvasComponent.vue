<template>
  <div class="canvas-parent">
    <canvas id="c" ref="c" ></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Canvas from '@/lib/canvas/Canvas';

export default defineComponent ({
  // setup() {
  // },
  mounted() {
    new Canvas('c');
  }
})
</script>

<style lang="css" scoped>
.canvas-parent {
  display: flex;
  justify-content: center;
}
</style>