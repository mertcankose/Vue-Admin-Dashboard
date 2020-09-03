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
      <router-link to="/">
        <IconHome></IconHome>
        <CustomText v-if="showAndHide">Home</CustomText>
      </router-link>
      <router-link to="/widgets">
        <IconCompass></IconCompass>
        <CustomText v-if="showAndHide">Widgets</CustomText>
      </router-link>
      <router-link to="/notification">
        <IconNotification></IconNotification>
        <CustomText v-if="showAndHide">Notification</CustomText>
      </router-link>
      <router-link to="/documentation">
        <IconDocumentation></IconDocumentation>
        <CustomText v-if="showAndHide">Documentation</CustomText>
      </router-link>
      <router-link to="/form">
        <IconForm></IconForm>
        <CustomText v-if="showAndHide">Form</CustomText>
      </router-link>
      <router-link to="/about">
        <IconPerson></IconPerson>
        <CustomText v-if="showAndHide">About</CustomText>
      </router-link>
      <router-link to="/settings">
        <IconSettings></IconSettings>
        <CustomText v-if="showAndHide">Settings</CustomText>
      </router-link>
    </div>
    <p>{{ windowHeight }}</p>
    <p>{{ windowWidth }}</p>
  </nav>
</template>

<script>
//icons
import IconHome from "../../icons/Home.svg";
import IconNotification from "../../icons/Notification.svg";
import IconDocumentation from "../../icons/Table.svg";
import IconForm from "../../icons/Saved.svg";
import IconSettings from "../../icons/Settings.svg";
import IconPerson from "../../icons/Person.svg";
import IconCompass from "../../icons/Compass.svg";
//components
import CustomText from "../Helpers/CustomText";

export default {
  name: "Navigation",
  components: {
    IconHome,
    IconNotification,
    IconDocumentation,
    IconForm,
    IconSettings,
    IconPerson,
    IconCompass,
    CustomText
  },
  data: function() {
    return {
      windowWidth: undefined,
      windowHeight: undefined,
      showAndHide: true
    };
  },

  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      window.addEventListener("resize", this.getWindowHeight);

      //Init
      this.getWindowWidth();
      this.getWindowHeight();
    });
  },

  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
    },

    getWindowHeight() {
      this.windowHeight = document.documentElement.clientHeight;
    }
  },
  watch: {
    windowWidth: function() {
      if (this.windowWidth <= 973) {
        this.showAndHide = false;
      } else {
        this.showAndHide = true;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
    window.removeEventListener("resize", this.getWindowHeight);
  }
};
</script>

<style scoped lang="postcss">
.navigation {
  background-color: var(--c-nav-background-color);
  display: flex;
  flex-direction: column;
  position: sticky;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  color: #fff;
  font-size: 18px;
  @media (--tl) {
    display: none;
  }
}
.logoAndText {
  display: flex;
  align-items: center;
  margin-bottom: 80px;
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
    margin-bottom: 20px;
    padding: 20px;
  }
}

svg {
  width: 22px;
  height: 22px;
  margin-right: 10px;
}
</style>
