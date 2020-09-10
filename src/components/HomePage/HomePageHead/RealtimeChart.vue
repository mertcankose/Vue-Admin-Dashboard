<template>
  <div id="chart">
    <apexchart
      class="item"
      type="line"
      height="450"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: "Current Month Earning",
          type: "column",
          data: [240, 205, 214, 371, 127, 213, 101, 152, 352, 120, 157, 60],
          color: "#4aa23c"
        },
        {
          name: "Current Month Defense",
          type: "line",
          data: [3, 12, 9, 4, 1, 22, 0, 18, 16, 2, 11, 13],
          color: "#f33921"
        }
      ],

      chartOptions: {
        chart: {
          width: "100%",
          type: "line"
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: "Overview"
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: [
          "01 Sep 2020",
          "02 Sep 2020",
          "03 Sep 2020",
          "04 Sep 2020",
          "05 Sep 2020",
          "06 Sep 2020",
          "07 Sep 2020",
          "08 Sep 2020",
          "09 Sep 2020",
          "10 Sep 2020",
          "11 Sep 2020",
          "12 Sep 2020"
        ],
        xaxis: {
          type: "datetime"
        },
        yaxis: [
          {
            title: {
              text: "Current Month Earning"
            }
          },
          {
            opposite: true,
            title: {
              text: "Current Month Defense"
            }
          }
        ]
      }
      /*
      responsive: [
        {
          breakpoint: 500,
          options: {
            chart: {
              height: "400"
            }
          }
        }
      ]
      */
    }
  }
}
</script>

<style scoped lang="postcss"></style>
