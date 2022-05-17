<template>
  <PlayerWidget />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerWidget from "./components/PlayerWidget.vue";

export default defineComponent({
  name: "App",
  components: {
    PlayerWidget,
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  background-color: #faf5fe;
  height: 100vh;
  width: 100vw;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
