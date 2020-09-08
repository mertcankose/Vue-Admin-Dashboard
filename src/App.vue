<template>
  <div class="app" :class="{'active':menuClicked}">
    <Navigation class="nav"></Navigation>
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
//eventBus
import { eventBus } from "./main";
export default {
  name: "App",
  components: {
    Navigation,
    Header,
    Content,
    Container
  },
  data() {
    return {
      menuClicked: false
    };
  },
  created() {
    eventBus.$on("clickedMenu", value => {
      this.menuClicked = value;
    });
  }
};
</script>

<style scoped lang="postcss">
.app {
  background-color: var(--c-primary-color);
  display: grid;
  grid-template-columns: 210px 1fr;
  height: 100vh;

  @media (--t) {
    grid-template-columns: 80px 1fr;
  }
  @media (--tl) {
    grid-template-columns: 80px 1fr;
  }
}

.app.active {
  grid-template-columns: 0px 1fr;

  .nav {
    position: sticky;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    visibility: hidden;
    opacity: 0;
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
