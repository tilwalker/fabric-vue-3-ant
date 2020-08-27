<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CanvasComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CanvasComponent from '@/components/CanvasComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'About',
  components: {
    CanvasComponent,
  },
});
</script>
