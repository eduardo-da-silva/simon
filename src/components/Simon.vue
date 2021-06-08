<template>
  <div class="simon">
    <green-button />
    <red-button />
    <blue-button />
    <yellow-button />
    <command-control />
  </div>
</template>

<script>
import GreenButton from "./GreenButton";
import RedButton from "./RedButton";
import BlueButton from "./BlueButton";
import YellowButton from "./YellowButton";
import CommandControl from "./CommandControl";
export default {
  name: "Simon",
  components: {
    GreenButton,
    RedButton,
    BlueButton,
    YellowButton,
    CommandControl,
  },
};
</script>

<style scoped>
</style>