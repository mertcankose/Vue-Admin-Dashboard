<template>
  <header class="header">
    <router-link to="/" class="logo">Lector.</router-link>

    <form class="search">
      <input type="search" placeholder="Search" />
    </form>

    <nav class="nav-right">
      <a>
        <IconNotification></IconNotification>
      </a>
      <a>
        <IconMessage></IconMessage>
      </a>
      <router-link to="/profile">
        <IconPerson></IconPerson>
      </router-link>
      <router-link to="/settings">
        <IconSettings width="40px" height="40px"></IconSettings>
      </router-link>
    </nav>
  </header>
</template>

<script>
import IconSettings from "../icons/Settings.svg";
import IconPerson from "../icons/Person.svg";
import IconMessage from "../icons/Message.svg";
import IconNotification from "../icons/Notification.svg";
export default {
  name: "Header",
  components: {
    IconSettings,
    IconPerson,
    IconMessage,
    IconNotification
  }
};
</script>

<style scoped>
svg {
  width: 24px;
  height: 24px;
}
.logo {
  font-size: 3rem;
  font-weight: bold;
  color: #000;
}
.header {
  background-color: var(--c-header-background-color);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 86px;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 99;
  @media (--tl) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.search {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  input {
    width: 215px;
    height: 28px;
    background-color: var(--c-search-background-color);
    border: 1px solid var(--c-search-border-color);
    border-radius: 4px;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
  }
  @media (--tl) {
    display: none;
  }
}
.nav-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
  position: static;
  height: auto;
  a {
    margin-left: 30px;
    padding: 20px;
  }
  @media (--tl) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 99;
    height: 80px;
    justify-content: space-around;
    margin-right: 0;
    a {
      margin-left: 0;
    }
  }
}
</style>
