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
      <router-link :to="{ name: 'Home' }">
        <IconHome />
        <CustomText v-if="showAndHide">Home</CustomText>
      </router-link>
      <div class="nav-links2">
        <router-link :to="{ name: 'Module' }">
          <IconCompass></IconCompass>
          <CustomText v-if="showAndHide">Widgets</CustomText>
        </router-link>

        <router-link :to="{ name: 'Notification' }">
          <IconNotification></IconNotification>
          <CustomText v-if="showAndHide">Notification</CustomText>
        </router-link>

        <router-link :to="{ name: 'Documentation' }">
          <IconDocumentation></IconDocumentation>
          <CustomText v-if="showAndHide">Documentation</CustomText>
        </router-link>

        <router-link :to="{ name: 'Form' }">
          <IconForm></IconForm>
          <CustomText v-if="showAndHide">Form</CustomText>
        </router-link>

        <router-link :to="{ name: 'Reactions' }">
          <IconFace></IconFace>
          <CustomText v-if="showAndHide">Reactions</CustomText>
        </router-link>

        <router-link :to="{ name: 'Mails' }">
          <IconMail></IconMail>
          <CustomText v-if="showAndHide">Emails</CustomText>
        </router-link>

        <router-link :to="{ name: 'Calendar' }">
          <IconCalendar></IconCalendar>
          <CustomText v-if="showAndHide">Calendar</CustomText>
        </router-link>

        <router-link :to="{ name: 'Gallery' }">
          <IconCamera></IconCamera>
          <CustomText v-if="showAndHide">Gallery</CustomText>
        </router-link>

        <router-link :to="{ name: 'About' }">
          <IconPerson></IconPerson>
          <CustomText v-if="showAndHide">About</CustomText>
        </router-link>

        <router-link :to="{ name: 'Settings' }">
          <IconSettings></IconSettings>
          <CustomText v-if="showAndHide">Settings</CustomText>
        </router-link>
      </div>
    </div>
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
import IconFace from "../../icons/Face.svg";
import IconMail from "../../icons/Email.svg";
import IconCalendar from "../../icons/Calendar.svg";
import IconCamera from "../../icons/Camera.svg";
//components
import CustomText from "../Helpers/CustomText";
//eventBus
import { eventBus } from "../../main";

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
    IconFace,
    IconMail,
    IconCalendar,
    IconCamera,
    CustomText
  },
  data() {
    return {
      windowWidth: undefined,
      windowHeight: undefined,
      showAndHide: true,
      clickedMenu: false
    };
  },
  created() {
    eventBus.$on("clickedMenu", value => {
      this.clickedMenu = value;
    });
    console.log(this.$route.params);
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

  color: #fff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: all 0.2s;
  transform: translateX(0);
  opacity: 1;
  @media (--tl) {
  }
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
    margin-bottom: 12px;
    padding: 12px;
    margin-left: 0;
  }
}

.nav-links2 a.router-link-active {
  background-color: var(--c-primary-color);
  color: #000;
}

svg {
  width: 20px;
  height: 20px;
  margin-right: 13px;
}
</style>
