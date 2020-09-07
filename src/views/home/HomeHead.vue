<template>
  <div class="home-head">
    <div class="chart-1">1</div>
    <div class="pie-graph-and-h1-box">
      <h1>Services</h1>
      <div class="pie-chart-box">
        <PieChart />
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from "../../components/HomePage/PieGraph";
export default {
  components: {
    PieChart
  }
};
</script>

<style scoepd lang="postcss">
.chart-1 {
  background-color: var(--c-box-background-color);
  border-radius: 10px;
}
.home-head {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  .pie-graph-and-h1-box {
    background-color: var(--c-box-background-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    h1 {
      padding-left: 10px;
      padding-top: 10px;
    }
  }
  .pie-chart-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  @media (--t) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
  }
}
</style>