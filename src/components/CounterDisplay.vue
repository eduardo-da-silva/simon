<template>
  <div>
    <div class="turn">
      <span v-if="on">
        {{ turnCounter }}
      </span>
    </div>
    <div class="counter-label">COUNT</div>
  </div>
</template>

<script>
export default {
  props: ["turnCounter", "on"],
};
</script>

<style>
</style>