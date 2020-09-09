<template>
  <div class="module">
    <CustomText tag="h1">Module</CustomText>
    <div class="cards"></div>
  </div>
</template>

<script>
import CustomText from "@/components/Helpers/CustomText";

export default {
  name: "Module",
  components: {
    CustomText
  }
};
</script>

<style scoped lang="postcss">
.cards {
  display: flex;
  justify-content: space-around;
}
</style>
