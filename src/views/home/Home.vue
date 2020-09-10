<template>
  <div class="home">
    <HomeHead />
    <HomeMiddle />
    <HomeBottom />
  </div>
</template>

<script>
//components

import HomeHead from "./HomeHead";
import HomeBottom from "./HomeBottom";
import HomeMiddle from "./HomeMiddle";

export default {
  name: "Home",
  components: {
    HomeHead,
    HomeBottom,
    HomeMiddle
  }
};
</script>

<style scoped lang="postcss">
.date {
  color: var(--c-small-card-base--text-color);
}
.home {
  display: grid;
  grid-template-rows: 2.8fr 1fr 2.5fr;
  gap: 28px;
  @media (--t) {
    grid-template-rows: 1fr 400px 500px;
  }
}
</style>