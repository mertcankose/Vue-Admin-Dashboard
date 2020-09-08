<template>
  <div class="home-head">
    <div class="chart-1">1</div>
    <div class="pie-graph-and-h1-box">
      <h1>Services</h1>
    </div>
  </div>
</template>

<script>
//import PieChart from "../../components/HomePage/PieGraph";
export default {
  components: {
    //PieChart
  }
};
</script>

<style scoepd lang="postcss">
.home-head {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 30px;
  div {
    border: 1px solid black;
  }
  @media (--t) {
    grid-template-columns: 1fr;
  }
}
</style>