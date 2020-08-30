<template>
  <div class="widget">
    <CustomText tag="h1">Widget</CustomText>

    <div id="nav">
      <router-link to="/widgets/">Module</router-link>|
      <router-link to="/widgets/data">Data</router-link>|
      <router-link to="/widgets/file">File</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
export default {
  name: "Widget",
  components: {
    CustomText
  }
};
</script>

<style scoped>
</style>