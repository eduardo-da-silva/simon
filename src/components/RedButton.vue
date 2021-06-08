<template>
  <div class="red" :class="{ redActive: red }" @click="select"></div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["active", "red"]),
  },
  methods: {
    ...mapActions(["blinkLight"]),
    ...mapMutations(["newShot"]),
    select() {
      if (this.active) {
        this.blinkLight("red");
        this.newShot(2);
      }
    },
  },
};
</script>

<style>
</style>