<template>
  <form class="search">
    <input type="search" placeholder="Search" />
  </form>
</template>

<script>
export default {};
</script>

<style scoped lang="postcss">
.search {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  input {
    width: 215px;
    height: 28px;
    background-color: var(--c-search-background-color);
    border: 1px solid var(--c-search-border-color);
    border-radius: 4px;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
  }
  @media (--t) {
    display: none;
  }
}
</style>
