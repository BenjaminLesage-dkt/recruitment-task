import { createStore } from "vuex";

interface Songs {
  [song: string]: {
    title: string;
    artist: string;
    cover: string;
  };
}

export default createStore({
  state: {
    currentSong: "sunsetLover",
    songs: {
      blame: {
        title: "Blame",
        artist: "Kyle",
        cover: "blame.jfif",
      },
      oneStepAtATime: {
        title: "One Step At A Time",
        artist: "Bearson",
        cover: "one-step-at-a-time.jfif",
      },
      sunsetLover: {
        title: "Sunset Lover",
        artist: "Petit Biscuit",
        cover: "sunset-lover.jpg",
      },
      youth: {
        title: "Youth",
        artist: "Troye Sivan",
        cover: "youth.jpg",
      },
      workingGirl: {
        title: "Working Girl",
        artist: "Little Boots",
        cover: "working-girl.jpg",
      },
    } as Songs,
  },
  mutations: {},
  actions: {},
});
