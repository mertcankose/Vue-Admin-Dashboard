<template>
  <div class="activity-card">
    <h1>Recent Activity</h1>
    <hr />
    <div class="card-body">
      <div class="activity-item" v-for="(item, index) in items" :key="index">
        <div class="minute-circle">
          <div class="minute">{{ item.minute }}</div>
          <div class="circle" :style="{ backgroundColor: item.color }"></div>
        </div>
        <div class="content">{{ item.content }}</div>
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
          minute: "27min",
          color: "green",
          content: "New order placed! Order #2912 has been successfully placed."
        },
        {
          minute: "58min",
          color: "blue",
          content: "Your weekly report has been generated and is ready to view."
        },
        {
          minute: "2hrs",
          color: "purple",
          content: "New user Valerie Luna has registered."
        },
        {
          minute: "1 day",
          color: "orange",
          content: "Server activity monitor alert."
        },
        {
          minute: "1 day",
          color: "green",
          content: "New order placed! Order #2911 has been successfully placed."
        },
        {
          minute: "1 day",
          color: "purple",
          content: "Details for Marketing and Planning Meeting have been updated."
        },
        {
          minute: "2 day",
          color: "green",
          content: "New order placed! Order #2910 has been successfully placed."
        }
      ]
    }
  }
}
</script>

<style scoped lang="postcss">
.activity-card {
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(31, 45, 65, 0.125);
  border-radius: 0.35rem;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (--tl) {
    height: 450px;
    overflow-y: auto;
  }
  .card-header {
    border-radius: 0.35rem 0.35rem 0 0;
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(31, 45, 65, 0.03);
    border-bottom: 1px solid rgba(31, 45, 65, 0.125);
    color: #195bff;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5625rem;
    padding-bottom: 0.5625rem;
  }
  .card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.35rem;
    .activity-item {
      display: flex;
      align-items: flex-start;
      .minute-circle {
        transform: translateX(0.5625rem);
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .minute {
        flex-shrink: 0;
        width: 3rem;
        font-size: 1rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 0.5rem;
        margin-bottom: 0;
        color: #a2acba;
        @media (--tl) {
          font-size: 0.8rem;
        }
      }
      .circle {
        height: 0.875rem;
        width: 0.875rem;
        font-size: 0.65rem;
        border: 0.125rem solid #fff;
        margin-top: -0.125rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        flex-shrink: 0;
      }
      .content {
        font-size: 1.1rem;
        padding-top: 0;
        padding-bottom: 3rem;
        padding-left: 1.5rem;
        border-left: solid 0.25rem #eff3f9;
        color: #687281;
        @media (--tl) {
          padding-bottom: 1rem;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
