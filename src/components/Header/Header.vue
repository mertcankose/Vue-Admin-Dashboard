<template>
  <header class="header">
    <div>
      <vs-button @click="toggleMenu" circle icon color="#7890FF" relief :active="active == 5">
        <IconClose v-if="controlMenu"></IconClose>
        <IconMenu v-else></IconMenu>
      </vs-button>
    </div>

    <Search />
    <Right />
  </header>
</template>

<script>
//components
import Search from "./HeaderSearch";
import Right from "./HeaderRight/HeaderRight";
//icons
import IconMenu from "../../icons/Hamburger.svg";
import IconClose from "../../icons/Close.svg";
//eventBus
import { eventBus } from "../../main";
export default {
  name: "Header",
  components: {
    IconMenu,
    IconClose,
    Search,
    Right
  },
  data() {
    return {
      controlMenu: true,
      active: 0
    };
  },
  methods: {
    toggleMenu() {
      this.controlMenu = !this.controlMenu;
      eventBus.reportNav(!this.controlMenu);
      this.active = 5;
    }
  }
};
</script>

<style scoped lang="postcss">
.header {
  background-color: var(--c-header-background-color);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 86px;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 9999;
  /*tablet*/
  @media (--t) {
    grid-template-columns: 5px 1fr;
  }
  /*mobile*/
  @media (--tl) {
  }
  svg {
    width: 20px;
    height: 20px;
  }
}
</style>
