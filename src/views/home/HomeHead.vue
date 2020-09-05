<template>
  <div class="home-head">
    <div>1</div>
    <div>2</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoepd lang="postcss">
.home-head {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  div {
    border: 1px solid black;
  }
  @media (--t) {
    grid-template-columns: 1fr;
  }
}
</style>