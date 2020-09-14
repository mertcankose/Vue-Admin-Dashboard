<template>
  <nav class="navigation">
    <div class="logoAndText">
      <router-link to="/" class="logo">
        <img
          src="https://us.123rf.com/450wm/arbuzu/arbuzu1705/arbuzu170500024/78360387-stock-vector-letter-l-logo-icon-design-template-elements.jpg?ver=6"
          alt
        />
      </router-link>
      <router-link v-if="showAndHide" to="/" class="logoText">LECTOR.</router-link>
    </div>

    <div class="nav-links">
      <router-link
        v-for="(item, index) in navigation"
        :key="index"
        :to="{ name: item.routerName }"
      >
        <DynamicIcon :icon="item.icon" />
        <CustomText v-if="showAndHide">{{ item.routerName }}</CustomText>
      </router-link>
    </div>
  </nav>
</template>

<script>
import CustomText from "../Helpers/CustomText"
import { eventBus } from "../../main"
//Mixins
import { sizeMixin } from "../../mixins/sizeMixin"
import { navigationMixin } from "../../mixins/navigationMixin"
//dynamcik component for icons
import DynamicIcon from "./IconHelper"
export default {
  name: "Navigation",
  mixins: [sizeMixin, navigationMixin],
  components: {
    CustomText,
    DynamicIcon
  },
  data() {
    return {
      showAndHide: true,
      clickedMenu: false
    }
  },
  created() {
    eventBus.$on("clickedMenu", value => {
      this.clickedMenu = value
    })
  }
}
</script>

<style scoped lang="postcss">
.navigation {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  color: #000;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 20px;
  border-right: 1px solid #fafafa;
  transition: all 0.2s;
  transform: translateX(0);
  opacity: 1;
}
.active {
  transform: translateX(-100%);
}
.logoAndText {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  padding: 20px;
  @media (--t) {
    justify-content: center;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    margin-right: 20px;
    @media (--t) {
      margin-right: 0;
    }
  }
}
.logoText {
  font-size: 26px;
}
.navigation a {
  display: flex;
  align-items: center;
  @media (--t) {
    justify-content: center;
  }
}
.nav-links {
  a {
    padding: 20px 12px;
    margin-left: 0;
  }
}

svg {
  width: 20px;
  height: 20px;
  margin-right: 13px;
}
</style>
