<template>
  <div id="chart" class="container">
    <apexchart
      class="item"
      type="donut"
      width="100%"
      height="300"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data: () => ({
    series: [34, 55, 11],
    responsive: [
      {
        breakpoint: undefined,
        options: {}
      }
    ],
    options: {
      chart: {
        type: "donut",
        height: "auto",
        width: "100%"
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%"
          }
        }
      },
      dataLabels: {
        enabled: true
      },
      colors: ["var(--c-pie-blue)", "var(--c-pie-red)", "var(--c-pie-yellow)"],
      labels: ["Normal", "Danger ", "Maintenance"],
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "16px",
        height: 0,
        offsetY: -5,
        itemMargin: {
          horizontal: 10,
          vertical: 0
        }
      }
    }
  })
}
</script>
<style scoped lang="postcss"></style>
