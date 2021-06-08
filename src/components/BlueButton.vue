<template>
  <div class="blue" :class="{ blueActive: blue }" @click="select"></div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["active", "blue"]),
  },
  methods: {
    ...mapActions(["blinkLight"]),
    ...mapMutations(["newShot"]),
    select() {
      if (this.active) {
        this.blinkLight("blue");
        this.newShot(3);
      }
    },
  },
};
</script>

<style>
</style>