<template>
  <div class="playlist">
    <div
      v-for="(song, key, index) in songs"
      :key="index"
      class="song-container"
    >
      <img :src="`./covers/${song.cover}`" alt="" />
      <div class="credits">
        <h4 class="title">{{ song.title }}</h4>
        <h6 class="artist">{{ song.artist }}</h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlaylistComponent",
  computed: {
    songs() {
      return this.$store.state.songs;
    },
  },
});
</script>

<style scoped lang="scss">
.playlist {
  padding-top: 22px;
  height: 52%;
  box-sizing: border-box;
  overflow: auto;

  &::-webkit-scrollbar {
    display: block;
    width: 13px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track-piece {
    margin-right: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 13px;
    background-color: #dddddd;
    border: 4px solid transparent;
    background-clip: padding-box;
  }

  .song-container {
    display: grid;
    grid-template-columns: 39px auto;
    height: 39px;
    align-items: center;
    margin-bottom: 16px;
    column-gap: 14px;
    padding: 6px 28px;
    cursor: pointer;

    &:hover {
      background-color: #eeeeee;
    }

    img {
      width: 39px;
      height: 39px;
      border-radius: 50%;
    }

    .credits {
      .title {
        font-size: 12px;
        color: #8d8d8d;
        margin: 0;
        font-weight: normal;
      }

      .artist {
        font-size: 10px;
        color: #c2c2c2;
        text-transform: uppercase;
        margin: 0;
        font-weight: normal;
      }
    }
  }
}
</style>
