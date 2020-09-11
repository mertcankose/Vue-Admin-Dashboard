<template>
  <form class="search">
    <vs-input warn icon-after icon="search" placeholder="Search" v-model="value" />
  </form>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: ""
    }
  }
}
</script>

<style scoped lang="postcss">
.search {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    /*
    width: 215px;
    height: 28px;
    background-color: var(--c-search-background-color);
    border: 1px solid var(--c-search-border-color);
    border-radius: 4px;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    */
  }
  @media (--t) {
    display: none;
  }
}
</style>
