<template>
  <div class="canvas-parent">
    <div>
      <a-input-group size="large">
        <a-row :gutter="[8, 8]" type="flex" justify="space-around" align="bottom">
          <a-col :span="8">
            <div class="title">Canvas Width</div>
            <a-input :value="width" type="number" 
              @input="$emit(
                'update:width', 
                $event.target.value
              )"
            />
          </a-col>
          <a-col :span="8">
            <div class="title">Canvas Height</div>
            <a-input :value="height" type="number"
              @input="$emit(
                'update:height', 
                $event.target.value
              )"
            />
          </a-col>
          <a-col class="height-100" :span="8">
            <a-button size="large" type="primary" @click="applyWidthHeight">
              Apply
            </a-button>
          </a-col>
        </a-row>
        <a-row>
          <a-button size="large" type="primary" @click="start">
            Start
          </a-button>
        </a-row>
      </a-input-group>
    </div>
    <canvas id="c" ref="c" ></canvas>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
// import Rain from '@/lib/canvas/rain/Rain';
import Snake from '@/lib/canvas/snake/Snake';

export default {
  props: {
    width: {
      type: Number,
      default: 15
    },
    height: {
      type: Number,
      default: 15
    }
  },
  setup(props: any ) {
    let canvas!: Snake;

    const initCanvas = (width: number, height: number) => {
      canvas.initCanvas(width, height);
    }

    onMounted(() => {
      canvas = new Snake('c');
      initCanvas(Number(props.width), Number(props.height));
      canvas.initSnake();
      // canvas.start();
    });

    const applyWidthHeight = () => {
      console.log(props)
      initCanvas(Number(props.width), Number(props.height));
      canvas.initSnake();
    }

    const start = () => {
      canvas.start();
    }

    return {
      canvas,
      start,
      applyWidthHeight
    }
  },

}
</script>

<style lang="css" scoped>
.canvas-parent {
  display: flex;
  justify-content: center;
}
</style>