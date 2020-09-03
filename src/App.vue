<template>
  <div class="app">
    <Navigation></Navigation>
    <div class="header_main">
      <Header></Header>
      <Container class="container">
        <Content class="mainContent">
          <router-view />
        </Content>
      </Container>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Container from "./components/Helpers/Container";
export default {
  name: "App",
  components: {
    Navigation,
    Header,
    Content,
    Container
  }
};
</script>

<style scoped lang="postcss">
.app {
  background-color: var(--c-primary-color);
  display: grid;
  grid-template-columns: 240px 1fr;

  @media (--t) {
    grid-template-columns: 100px 1fr;
  }
  @media (--tl) {
    grid-template-columns: 1fr;
  }
}
.header_main {
  background-color: var(--c-primary-color);
  /*height: 100vh;*/
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
