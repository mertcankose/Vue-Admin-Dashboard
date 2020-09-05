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
  grid-template-rows: 300px 1fr 300px;
  gap: 28px;
}
</style>