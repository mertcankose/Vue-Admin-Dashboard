<template>
  <div class="box">
    <h1>Progress Tracker</h1>
    <hr />
    <div class="body">
      <div class="item" v-for="(item, index) in items" :key="index">
        <h4 class="small">
          {{ item.name }}
          <span class="ratio" v-if="item.ratio != '100'">{{ item.ratio }}%</span>
          <span v-else class="ratio">Complete!</span>
        </h4>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :style="{ backgroundColor: item.color, width: item.ratio + '%' }"
            aria-valuenow="item.ratio"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Server Migration",
          ratio: "20",
          color: "#E81500"
        },
        {
          name: "Sales Tracking",
          ratio: "40",
          color: "#F4A100"
        },
        {
          name: "Customer Database",
          ratio: "60",
          color: "#0061F2"
        },
        {
          name: "Account Setup",
          ratio: "80",
          color: "#00CFD5"
        },
        {
          name: "Payout Details",
          ratio: "100",
          color: "#00AC69"
        }
      ]
    }
  }
}
</script>

<style scoped lang="postcss">
.box {
  background-color: #fff;
  border: 1px solid rgba(31, 45, 65, 0.125);
  padding: 20px;
  @media (--t) {
    padding: 10px;
  }
  @media (--tl) {
    height: 450px;
  }
  .body {
    font-size: 18px;
    @media (--t) {
      font-size: 16px;
    }
    @media (--tl) {
      font-size: 14px;
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    h4 {
      margin-bottom: 14px;
    }
    .ratio {
      float: right;
    }
  }
  .progress {
    width: 100%;
    height: 14px;
    background-color: #ccc;
    border-radius: 10px;
    @media (--t) {
      height: 10px;
    }
    .progress-bar {
      width: 100%;
      height: 14px;
      border-radius: 10px;
      @media (--t) {
        height: 10px;
      }
    }
  }
}
</style>
