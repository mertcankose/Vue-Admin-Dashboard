<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container"
};
</script>

<style scoped>
.container {
  max-width: 1620px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #000;
}
</style>