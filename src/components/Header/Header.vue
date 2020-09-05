<template>
  <header class="header">
    <div>
      <IconClose v-if="controlMenu" @click="toggleMenu"></IconClose>
      <IconMenu v-else @click="toggleMenu"></IconMenu>
    </div>

    <Search />
    <Right />
  </header>
</template>

<script>
//components
import Search from "./HeaderSearch";
import Right from "./HeaderRight";
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
      controlMenu: true
    };
  },
  methods: {
    toggleMenu() {
      this.controlMenu = !this.controlMenu;
      eventBus.reportNav(!this.controlMenu);
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
  /*
  position: sticky;
  top: 0;
  right: 0;
  */
  z-index: 99;
  /*tablet*/
  @media (--t) {
    grid-template-columns: 5px 1fr;
  }
  /*mobile*/
  @media (--tl) {
  }
  svg {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
}
</style>
