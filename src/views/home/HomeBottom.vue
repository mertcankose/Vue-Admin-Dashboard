<template>
  <div class="home-bottom">
    <div>1</div>
    <div>2</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoepd lang="postcss">
.home-bottom {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 28px;
  div {
    border: 1px solid black;
  }
  @media (--t) {
    grid-template-columns: 1fr;
  }
}
</style>