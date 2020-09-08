<template>
  <div class="home-bottom">
    <div class="table-box">
      <Table />
    </div>
  </div>
</template>

<script>
import Table from "../../components/HomePage/Table";
export default {
  components: {
    Table
  }
};
</script>

<style scoepd lang="postcss">
.home-bottom {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  @media (--t) {
    grid-template-columns: 1fr;
  }
  .table-box {
    //background-color: var(--c-box-background-color);
    border-radius: 14px;
    @media (--t) {
      overflow-x: auto;
    }
  }
  div {
  }
}
</style>