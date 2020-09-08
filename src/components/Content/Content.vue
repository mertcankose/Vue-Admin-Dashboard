<template>
  <div class="mainContent">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="postcss">
.mainContent {
  gap: 28px;
  @media (--t) {
    padding-bottom: 100px;
  }
}
</style>
