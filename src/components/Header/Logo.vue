<template>
  <router-link to="/" class="logo">Lector.</router-link>
</template>

<script>
export default {};
</script>

<style scoped lang="postcss">
.logo {
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  @media (--t) {
    display: none;
  }
  @media (--tl) {
    display: block;
  }
}
</style>
