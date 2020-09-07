<template>
  <div class="home-bottom">
    <div>1</div>
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
  grid-template-columns: 1fr 2fr;
  gap: 28px;
  .table-box {
    background-color: var(--c-box-background-color);
    border-radius: 14px;
  }
  div {
  }
  @media (--t) {
    grid-template-columns: 1fr;
  }
}
</style>