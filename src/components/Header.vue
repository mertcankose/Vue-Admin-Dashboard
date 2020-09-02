<template>
  <header class="header">
    <router-link to="/" class="logo">Lector.</router-link>

    <form action>
      <input type="search" placeholder="Search" />
    </form>

    <nav>
      <button>
        <IconNotification></IconNotification>
      </button>
      <button>
        <IconMessage></IconMessage>
      </button>
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
}
</style>