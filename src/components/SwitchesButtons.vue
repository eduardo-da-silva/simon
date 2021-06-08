<template>
  <div>
    <div class="switches">
      <input type="checkbox" class="toggle" v-model="on" />
      <button class="button" @click="start">Start</button>
      <input type="checkbox" class="toggle" v-model="strict" />
    </div>
    <div class="switches-labels"><span>POWER</span><span>STRICT</span></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["active"]),
    on: {
      get() {
        return this.$store.state.on;
      },
      set(value) {
        this.$store.commit("setOn", value);
      },
    },
    strict: {
      get() {
        return this.$store.state.strict;
      },
      set(value) {
        this.$store.commit("setStrict", value);
      },
    },
  },
  methods: {
    start() {
      if (this.active || this.win) {
        this.$emit("play");
      }
    },
  },
};
</script>

<style>
</style>