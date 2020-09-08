<template>
  <div class="module">
    <CustomText tag="h1">Module</CustomText>
    <div class="cards">
      <ActivityCard />
      <Progress />
    </div>
  </div>
</template>

<script>
import CustomText from "@/components/Helpers/CustomText";
import ActivityCard from "../../components/Widgets/Activity";
import Progress from "../../components/Widgets/Progress";
export default {
  name: "Module",
  components: {
    CustomText,
    ActivityCard,
    Progress
  }
};
</script>

<style scoped lang="postcss">
.cards {
  display: flex;
  justify-content: space-around;
}
</style>
