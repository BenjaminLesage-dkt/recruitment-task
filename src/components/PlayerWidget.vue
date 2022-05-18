<template>
  <div class="player-widget">
    <div class="widget-header">
      <div
        :style="{
          backgroundImage: `url('/covers/${songs[currentSong].cover}')`,
        }"
        class="background"
      ></div>
      <music-infos />
      <controller-component />
    </div>
    <playlist-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlaylistComponentVue from "@/components/PlaylistComponent.vue";
import MusicInfosVue from "@/components/MusicInfos.vue";
import ControllerComponentVue from "@/components/ControllerComponent.vue";

export default defineComponent({
  name: "PlayerWidget",
  components: {
    PlaylistComponent: PlaylistComponentVue,
    MusicInfos: MusicInfosVue,
    ControllerComponent: ControllerComponentVue,
  },
  computed: {
    currentSong() {
      return this.$store.state.currentSong;
    },
    songs() {
      return this.$store.state.songs;
    },
  },
});
</script>

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
  box-shadow: 0 0 40px 30px rgba(204, 204, 204, 0.2);
  overflow: hidden;

  .widget-header {
    width: 100%;
    height: 48%;
    padding: 28px 30px;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;

    .background {
      opacity: 0.3;
      filter: blur(80px);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      background-size: cover;
      background-position-y: 50%;
      z-index: -1;
      transform: scale(1.1);
    }
  }
}
</style>
