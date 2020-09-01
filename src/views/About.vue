<template>
  <div class="about">
    <h1>This is an about page</h1>
      <a-input-group size="large">
        <a-row :gutter="8">
          <a-col :span="5">
            <div class="title">Canvas Width</div>
            <div class="value">{{cWidth}}</div>
          </a-col>
          <a-col :span="5">
            <div class="title">Canvas Height</div>
            <div class="value">{{cHeight}}</div>
          </a-col>
        </a-row>
      </a-input-group>
    <CanvasComponent v-model:width="cWidth" v-model:height="cHeight" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import CanvasComponent from '@/components/CanvasComponent.vue'; // @ is an alias to /src

export default {
  name: 'About',
  components: {
    CanvasComponent,
  },

  setup() {
    const cWidth = ref<number>(10);
    const cHeight = ref<number>(10);

    return {
      cWidth, 
      cHeight,
    }
  }
};
</script>
