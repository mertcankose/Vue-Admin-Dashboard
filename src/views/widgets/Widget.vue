<template>
  <div class="widget">
    <CustomText tag="h1">Widget</CustomText>
    <Card />
    <div class="nav">
      <router-link class="module" to="/widgets/">Module</router-link>
      <router-link class="data" to="/widgets/data">Data</router-link>
      <router-link class="file" to="/widgets/file">File</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import CustomText from "@/components/Helpers/CustomText";
import Card from "../../components/Widgets/WidgetCard";
export default {
  name: "Widget",
  components: {
    CustomText,
    Card
  }
};
</script>

<style scoped lang="postcss">
.widget {
  font-size: 25px;
  .nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    a {
      margin-right: 30px;
    }
  }
  .module {
  }
  .data {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .file {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
