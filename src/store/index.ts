import { createStore } from "vuex";

export default createStore({
  state: {
    currentSong: 0,
    playlist: [],
  },
  mutations: {
    SET_PLAYLIST(state, importedPlaylist) {
      state.playlist = importedPlaylist;
    },
    CHANGE_CURRENT_SONG(state, songIndex) {
      state.currentSong = songIndex;
    },
  },
  actions: {},
});
