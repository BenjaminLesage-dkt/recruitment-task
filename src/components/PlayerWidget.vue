<template>
  <div class="player-widget"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlayerWidget",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.player-widget {
  width: 472px;
  height: 505px;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 25px 20px rgba(205, 197, 211, 0.5);
}
</style>
