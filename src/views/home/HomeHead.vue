<template>
  <div class="home-head">
    <div class="realtime-graph-and-info-box">
      <div class="relatime-chart-info">
        <RealTimeChartInfo />
      </div>
      <div class="realtime-chart">
        <RealTimeChart />
      </div>
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
import DonutChart from "../../components/HomePage/DonutGraph"
import RealTimeChartInfo from "../../components/HomePage/HomePageHead/RealtimeChartInfo"
import RealTimeChart from "../../components/HomePage/HomePageHead/RealtimeChart"
export default {
  components: {
    DonutChart,
    RealTimeChartInfo,
    RealTimeChart
  }
}
</script>

<style scoepd lang="postcss">
.home-head {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;

  @media (--t) {
    grid-template-columns: 1fr;
  }
  @media (--tl) {
  }
}
.realtime-graph-and-info-box {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media (--t) {
    flex-direction: column;
    height: 900px;
    gap: 20px;
  }
  @media (--tl) {
    gap: 0;
  }
}
.relatime-chart-info {
  display: flex;
  justify-content: space-between;
  @media (--tl) {
    margin-bottom: 50px;
  }
}
.realtime-chart {
  width: 100%;
  @media (--tl) {
    overflow-x: auto;
  }
}
.donut-graph-and-h1-box {
  background-color: #fff;
  border-radius: 8px;
  @media (--tl) {
    height: 400px;
  }

  h1 {
    padding-top: 10px;
    padding-left: 10px;
    margin-bottom: 36px;
  }
}
.donut-box {
  width: 100%;
}
</style>
