<template>
  <div class="controller">
    <div class="buttons-box">
      <div class="previous-btn"></div>
      <div class="pause-btn"></div>
      <div class="next-btn"></div>
    </div>
    <div class="audio-player">
      <span id="current-time" class="time">0:00</span>
      <input type="range" id="seek-slider" max="100" value="0" />
      <span id="duration" class="time">0:00</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ControllerComponent",
});
</script>

<style scoped lang="scss">
.controller {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;

  .buttons-box {
    width: 132px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      background-color: #a0a588;
      mix-blend-mode: difference;
      width: 12px;
      height: 17px;
      cursor: pointer;
    }

    .previous-btn {
      -webkit-mask: url(../assets/previous.svg) no-repeat center;
      mask: url(../assets/previous.svg) no-repeat center;
    }

    .pause-btn {
      -webkit-mask: url(../assets/pause.svg) no-repeat center;
      mask: url(../assets/pause.svg) no-repeat center;
      width: 12px;
      height: 21px;
    }

    .next-btn {
      -webkit-mask: url(../assets/next.svg) no-repeat center;
      mask: url(../assets/next.svg) no-repeat center;
    }
  }

  .audio-player {
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin: auto 0;

    .time {
      color: #a0a588;
      mix-blend-mode: difference;
      font-size: 10px;
    }

    input[type="range"] {
      position: relative;
      -webkit-appearance: none;
      outline: none;
      background: none;
      width: 100%;
      margin: 0 15px;

      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 3px;
        border-radius: 3px;
        cursor: pointer;
        background-color: rgba(160, 165, 136, 0.3);
        mix-blend-mode: difference;
      }

      &::before {
        position: absolute;
        border-radius: 3px;
        content: "";
        top: 4px;
        left: 0;
        // width: var(--seek-before-width);
        height: 3px;
        background-color: #8c965d;
        mix-blend-mode: difference;
        cursor: pointer;
      }

      &::-webkit-slider-thumb {
        position: relative;
        -webkit-appearance: none;
        box-sizing: content-box;
        height: 7px;
        width: 7px;
        border-radius: 50%;
        background-color: #a0a588;
        mix-blend-mode: normal;
        cursor: pointer;
        margin: -1.5px 0 0 0;
      }

      &:active::-webkit-slider-thumb {
        transform: scale(1.2);
      }

      &::-moz-range-track {
        width: 100%;
        height: 3px;
        border-radius: 3px;
        cursor: pointer;
        background-color: rgba(160, 165, 136, 0.3);
        mix-blend-mode: difference;
      }

      &::-moz-range-progress {
        background-color: #8c965d;
        mix-blend-mode: difference;
        border-radius: 3px;
      }

      &::-moz-focus-outer {
        border: 0;
      }

      &::-moz-range-thumb {
        position: relative;
        -webkit-appearance: none;
        box-sizing: content-box;
        height: 7px;
        width: 7px;
        border-radius: 50%;
        background-color: #a0a588;
        mix-blend-mode: difference;
        cursor: pointer;
        margin: -1.5px 0 0 0;
      }

      &:active::-moz-range-thumb {
        transform: scale(1.2);
      }
    }
  }
}
</style>
