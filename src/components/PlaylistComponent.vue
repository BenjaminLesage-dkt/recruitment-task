<template>
  <div class="playlist"></div>
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
  padding: 28px 30px;
}
</style>
