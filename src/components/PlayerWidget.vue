<template>
  <div class="player-widget">
    <div class="widget-header">
      <div
        :style="{
          backgroundImage: playlist[currentSong]
            ? `url('${playlist[currentSong].track.album.images[0].url}')`
            : 'none',
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
import axios from "axios";
import * as buffer from "buffer";
(window as any).Buffer = buffer.Buffer;

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
    playlist() {
      return this.$store.state.playlist;
    },
  },
  mounted() {
    this.callSpotifyAPI();
  },
  methods: {
    callSpotifyAPI() {
      let playlistId = "5CI2ry6oVNL7f6TapUBAok";

      const CLIENT_ID = "XXX";
      const CLIENT_SECRET = "XXX";

      axios("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
        },
        data: "grant_type=client_credentials",
      })
        .then((tokenResponse) => {
          axios(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "aplication/json",
              Authorization: "Bearer " + tokenResponse.data.access_token,
            },
          })
            .then((playlistResponse) => {
              this.$store.commit("SET_PLAYLIST", playlistResponse.data.items);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
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
