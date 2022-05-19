<template>
  <div class="music-infos">
    <img
      :src="
        playlist[currentSong]
          ? `${playlist[currentSong].track.album.images[0].url}`
          : ''
      "
      :alt="`${''} music cover.`"
      class="cover"
    />
    <div class="credits">
      <h1 class="title">{{ playlist[currentSong]?.track.name }}</h1>
      <h3 class="artist">{{ getArtists(currentSong) }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import getArtists from "../utils/GetArtists";

export default defineComponent({
  name: "MusicInfos",
  computed: {
    currentSong() {
      return this.$store.state.currentSong;
    },
    playlist() {
      return this.$store.state.playlist;
    },
  },
  methods: {
    getArtists,
  },
});
</script>

<style scoped lang="scss">
.cover {
  height: 132px;
  width: 132px;
  border-radius: 4px;
  display: inline-block;
}

.credits {
  display: inline-block;
  margin-left: 28px;
  margin-top: 10px;
  vertical-align: top;

  .title {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 13px;
    color: #a0a588;
    mix-blend-mode: difference;
  }
  .artist {
    margin: 0;
    font-size: 12px;
    color: #a0a588;
    mix-blend-mode: difference;
  }
}
</style>
