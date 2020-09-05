<template>
  <div class="widget">
    <CustomText tag="h1">Widget</CustomText>

    <div class="nav">
      <router-link to="/widgets/">Module</router-link>|
      <router-link to="/widgets/data">Data</router-link>|
      <router-link to="/widgets/file">File</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import CustomText from "@/components/Helpers/CustomText";
export default {
  name: "Widget",
  components: {
    CustomText
  }
};
</script>

<style scoped lang="postcss">
.widget {
  font-size: 24px;
  .nav {
    a {
      margin-right: 30px;
    }
  }
}
</style>
