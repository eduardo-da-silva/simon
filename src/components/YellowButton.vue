<template>
  <div class="yellow" :class="{ yellowActive: yellow }" @click="select"></div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["active", "yellow"]),
  },
  methods: {
    ...mapActions(["blinkLight"]),
    ...mapMutations(["newShot"]),
    select() {
      if (this.active) {
        this.blinkLight("yellow");
        this.newShot(4);
      }
    },
  },
};
</script>

<style>
</style>