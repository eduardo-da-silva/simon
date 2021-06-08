<template>
  <div class="green" :class="{ greenActive: green }" @click="select"></div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["active", "green"]),
  },
  methods: {
    ...mapActions(["blinkLight"]),
    ...mapMutations(["newShot"]),
    select() {
      if (this.active) {
        this.blinkLight("green");
        this.newShot(1);
      }
    },
  },
};
</script>

<style>
</style>