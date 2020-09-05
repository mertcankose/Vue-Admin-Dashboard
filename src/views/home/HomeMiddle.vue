<template>
  <div class="home-middle">
    <SmallCard backcolor="var(--c-small-card-revinue)" color="var(--c-small-card-revinue-text)">
      <template slot="head">Revinue Status</template>
      <span slot="money">$432</span>
      <span slot="date" class="date">Jan01-Jan10</span>
    </SmallCard>
    <SmallCard backcolor="var(--c-small-card-task)" color="var(--c-small-card-task-text)">
      <template slot="head">Task Completion</template>
      <span slot="money">$432</span>
      <span slot="date" class="date">Jan01-Jan10</span>
    </SmallCard>
    <SmallCard backcolor="var(--c-small-card-rate)" color="var(--c-small-card-rate-text)">
      <template slot="head">Bounce Rate</template>
      <span slot="money">$432</span>
      <span slot="date" class="date">Jan01-Jan10</span>
    </SmallCard>
    <SmallCard backcolor="var(--c-small-card-request)" color="var(--c-small-card-request-text)">
      <template slot="head">Pending Request</template>
      <span slot="money">$432</span>
      <span slot="date" class="date">Jan01-Jan10</span>
    </SmallCard>
  </div>
</template>

<script>
import SmallCard from "../../components/Content/ContentSmallCard";
export default {
  components: {
    SmallCard
  }
};
</script>

<style scoepd lang="postcss">
.home-middle {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 28px;
  @media (--t) {
    grid-template-columns: 1fr 1fr;
  }
  @media (--tl) {
    grid-template-columns: 1fr;
  }
}
</style>