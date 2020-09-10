<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-row>
      <a-input-group size="large">
        <a-row>
          <a-col :span="12">
            <div class="title"><h2>Canvas Width</h2></div>
            <div class="value"><h4>{{cWidth}}</h4></div>
          </a-col>
          <a-col :span="12">
            <div class="title"><h2>Canvas Height</h2></div>
            <div class="value"><h4>{{cHeight}}</h4></div>
          </a-col>
        </a-row>
      </a-input-group>
    </a-row>
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
    const cWidth = ref<number>(15);
    const cHeight = ref<number>(15);

    return {
      cWidth, 
      cHeight,
    }
  }
};
</script>
