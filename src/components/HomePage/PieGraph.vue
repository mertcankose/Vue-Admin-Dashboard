<template>
  <div id="chart" class="chart-wrapper">
    <apexchart
      class="chart"
      width="450"
      height="450"
      type="donut"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data: () => ({
    options: {
      chart: {
        id: "vuechart-example"
      },
      dataLabels: {
        enabled: true
      },
      colors: ["var(--c-pie-blue)", "var(--c-pie-red)", "var(--c-pie-yellow)"],
      labels: ["Normal", "Danger ", "Maintenance"],
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "18px",
        height: 50,
        itemMargin: {
          horizontal: 10,
          vertical: 0
        }
      },
      responsive: [
        {
          breakpoint: 300,
          options: {
            width: 200
          }
        }
      ]
    },

    series: [34, 55, 11]
  })
};
</script>
<style scoped lang="postcss">
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
#chart {
}
</style>


