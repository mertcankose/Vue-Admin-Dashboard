<template>
  <nav class="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/widgets">Widgets</router-link>
    <router-link to="/notification">Notification</router-link>
    <router-link to="/documentation">Documentation</router-link>
    <router-link to="/form">Form</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/settings">Settings</router-link>
  </nav>
</template>

<script>
export default {
  name: "MainNavigation"
};
</script>

<style scoped>
.navigation {
  background-color: var(--c-nav-background-color);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: sticky;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  color: #fff;
}
</style>