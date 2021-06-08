<template>
  <div class="title font-effect-emboss">{{ title }}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["title"]),
  },
};
</script>

<style>
</style>