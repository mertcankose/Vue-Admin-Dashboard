<template>
  <header class="header">
    <Logo></Logo>
    <Search></Search>
    <Right></Right>
  </header>
</template>

<script>
//components
import Logo from "./Logo";
import Search from "./Search";
import Right from "./Right";
export default {
  name: "Header",
  components: {
    Logo,
    Search,
    Right
  }
};
</script>

<style scoped lang="postcss">
.header {
  background-color: var(--c-header-background-color);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 86px;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 99;
  /*tablet*/
  @media (--t) {
    grid-template-columns: 1fr;
  }
  /*mobile*/
  @media (--tl) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
