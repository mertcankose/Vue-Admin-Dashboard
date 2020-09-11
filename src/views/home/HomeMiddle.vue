<template>
  <div class="home-middle">
    <SmallCard
      :backcolor="info.background"
      :color="info.color"
      v-for="(info, index) in infos"
      :key="index"
    >
      <template slot="head">{{ info.head }}</template>
      <span slot="money">${{ info.money }}</span>
      <span slot="date" class="date">{{ info.date }}</span>
    </SmallCard>
  </div>
</template>

<script>
import SmallCard from "../../components/HomePage/HomeSmallCard"
export default {
  components: {
    SmallCard
  },
  data() {
    return {
      infos: [
        {
          head: "Revinue Status",
          money: "432",
          date: "Jan01-Jan05",
          background: "var(--c-small-card-revinue)",
          color: "var(--c-small-card-text-color)"
        },
        {
          head: "Task Completion",
          money: "432",
          date: "Jan05-Jan10",
          background: "var(--c-small-card-task)",
          color: "var(--c-small-card-text-color)"
        },
        {
          head: "Bounce Rate",
          money: "432",
          date: "Jan10-Jan15",
          background: "var(--c-small-card-rate)",
          color: "var(--c-small-card-text-color)"
        },
        {
          head: "Task Completion",
          money: "432",
          date: "Jan15-Jan20",
          background: "var(--c-small-card-request)",
          color: "var(--c-small-card-text-color)"
        }
      ]
    }
  }
}
</script>

<style scoepd lang="postcss">
.home-middle {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  @media (--t) {
    grid-template-columns: 1fr 1fr;
  }
  @media (--tl) {
    grid-template-columns: 1fr;
  }
}
</style>
