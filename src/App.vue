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
@font-face {
  font-family: "SFUIText";
  src: local("SFUIText"),
    url(./assets/fonts/SFUIText/SFUIText-Regular.woff) format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "SFUIText";
  src: local("SFUIText"),
    url(./assets/fonts/SFUIText/SFUIText-Bold.woff) format("woff");
  font-weight: bold;
  font-style: normal;
}

html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
}

#app {
  background-color: #faf5fe;
  height: 100%;
  width: 100vw;
  font-family: "SFUIText", Arial, Helvetica, sans-serif;
}
</style>
