<template>
  <div class="notification">
    <h1 class="header">DATA</h1>
    <div class="graph"></div>
    <div class="boxes">
      <ActivityCard />
      <Progress />
    </div>
  </div>
</template>

<script>
import ActivityCard from "../../components/Widgets/Activity";
import Progress from "../../components/Widgets/Progress";
export default {
  name: "Notification",
  components: {
    ActivityCard,
    Progress
  }
};
</script>

<style scoped lang="postcss">
.notification {
  display: grid;
  grid-template-rows: 0.5fr 1.6fr 2fr;
  .header {
    font-size: 36px;
    font-weight: bold;
  }
}
.graph {
  width: 100%;
  background-color: #ccc;
}
.boxes {
  display: flex;
  justify-content: space-evenly;
}
</style>
