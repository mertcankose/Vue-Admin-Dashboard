<template>
  <div class="app">
    <MasterNavigation></MasterNavigation>
    <div class="header_main">
      <Header></Header>

      <MainContent class="mainContent">
        <router-view />
      </MainContent>
    </div>
  </div>
</template>



<script>
import MasterNavigation from "@/components/Navigation";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
export default {
  name: "App",
  components: {
    MasterNavigation,
    Header,
    MainContent
  }
};
</script>

<style scoped>
.app {
  display: grid;
  grid-template-columns: 246px 1fr;
}
.header_main {
  background-color: var(--c-primary-color);
}
.mainContent {
}
</style>