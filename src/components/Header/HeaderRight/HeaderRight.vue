<template>
  <nav class="nav-right">
    <Home />
    <Message />
    <Notification />
    <Profile />
  </nav>
</template>

<script>
//icons

//components
import Home from "./HeaderHome"
import Message from "./HeaderMessage"
import Notification from "./HeaderNotify"
import Profile from "./HeaderAvatar"

//import Avatar from "./HeaderAvatar";

export default {
  data() {
    return {
      active: 0
    }
  },
  components: {
    Home,
    Message,
    Notification,
    Profile
  }
}
</script>

<style scoped lang="postcss">
.nav-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 70px;
  position: static;
  gap: 20px;
  height: auto;
  @media (--t) {
    justify-content: center;
  }
  @media (--tl) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 99;
    height: 70px;
    justify-content: space-around;
    margin-right: 0;
    a {
      margin-left: 0;
    }
  }
}
</style>
