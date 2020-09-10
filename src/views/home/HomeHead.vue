<template>
  <div class="home-head">
    <div class="realtime-graph-and-info-box">
      <RealTimeChartInfo />
      <RealTimeChart />
    </div>
    <div class="donut-graph-and-h1-box">
      <h1>Services</h1>
      <div class="donut-box">
        <DonutChart />
      </div>
    </div>
  </div>
</template>

<script>
import DonutChart from "../../components/HomePage/DonutGraph";
import RealTimeChartInfo from "../../components/HomePage/HomePageHead/RealtimeChartInfo";
import RealTimeChart from "../../components/HomePage/HomePageHead/RealtimeChart";
export default {
  components: {
    DonutChart,
    RealTimeChartInfo,
    RealTimeChart
  }
};
</script>

<style scoepd lang="postcss">
.home-head {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 40px;

  div {
  }
  @media (--t) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 400px;
  }
}
.realtime-graph-and-info-box {
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 20px;
  @media (--t) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .realtime-info-box {
    width: 30%;
  }
  .realtime-box {
    width: 70%;
  }
}
.donut-graph-and-h1-box {
  background-color: #fff;
  border-radius: 8px;

  h1 {
    padding-top: 10px;
    padding-left: 10px;
    margin-bottom: 36px;
  }
}
.donut-box {
}
</style>