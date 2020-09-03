<template>
  <div class="app">
    <MasterNavigation></MasterNavigation>
    <div class="header_main">
      <Header></Header>
      <Container class="container">
        <MainContent class="mainContent">
          <router-view />
        </MainContent>
      </Container>
    </div>
  </div>
</template>



<script>
import MasterNavigation from "@/components/Navigation";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Container from "./components/Container";
export default {
  name: "App",
  components: {
    MasterNavigation,
    Header,
    MainContent,
    Container
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
.container {
  margin-top: 20px;
  margin-bottom: 20px;
}
.mainContent {
  padding-left: 14px;
  padding-right: 14px;
}
</style>