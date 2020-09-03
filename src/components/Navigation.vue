<template>
  <nav class="navigation">
    <router-link to="/" class="logo">LECTOR.</router-link>

    <router-link to="/">
      <IconHome></IconHome>Home
    </router-link>
    <router-link to="/widgets">
      <IconCompass></IconCompass>Widgets
    </router-link>
    <router-link to="/notification">
      <IconNotification></IconNotification>Notification
    </router-link>
    <router-link to="/documentation">
      <IconDocumentation></IconDocumentation>Documentation
    </router-link>
    <router-link to="/form">
      <IconForm></IconForm>Form
    </router-link>
    <router-link to="/about">
      <IconPerson></IconPerson>About
    </router-link>
    <router-link to="/settings">
      <IconSettings></IconSettings>Settings
    </router-link>
  </nav>
</template>

<script>
import IconHome from "../icons/Home.svg";
import IconNotification from "../icons/Notification.svg";
import IconDocumentation from "../icons/Table.svg";
import IconForm from "../icons/Saved.svg";
import IconSettings from "../icons/Settings.svg";
import IconPerson from "../icons/Person.svg";
import IconCompass from "../icons/Compass.svg";

export default {
  name: "MainNavigation",
  components: {
    IconHome,
    IconNotification,
    IconDocumentation,
    IconForm,
    IconSettings,
    IconPerson,
    IconCompass
  }
};
</script>

<style scoped>
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
}
.logo {
  margin-bottom: 40px;
  font-size: 26px;
}
.navigation a {
  display: flex;
  align-items: center;
  padding: 20px;
}

.navigation a:not(:first-child) {
  margin-bottom: 10px;
}
svg {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>