<template>
  <nav class="nav-right">
    <router-link to="/">
      <IconHome width="40px" height="40px"></IconHome>
    </router-link>
    <button>
      <IconMessage />
    </button>
    <button>
      <IconNotification />
    </button>
    <router-link to="/profile" class="profile-photo">
      <Avatar :size="36"></Avatar>
    </router-link>
  </nav>
</template>

<script>
//icons
import IconMessage from "../../icons/Message.svg";
import IconNotification from "../../icons/Notification.svg";
import IconHome from "../../icons/Home.svg";
import Avatar from "./HeaderAvatar";

export default {
  components: {
    IconMessage,
    IconNotification,
    IconHome,
    Avatar
  }
};
</script>

<style scoped lang="postcss">
svg {
  width: 24px;
  height: 24px;
}
.nav-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 24px;
  position: static;
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
  button,
  a {
    margin-left: 16px;
    padding: 16px;
  }
  .profile-photo {
    flex-shrink: 0;
  }
}
</style>