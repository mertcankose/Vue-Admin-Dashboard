<template>
  <router-link class="home" to="/">
    <vs-button icon :active="active == 0" @click="active = 0">
      <IconHome />
    </vs-button>
  </router-link>
</template>

<script>
import IconHome from "../../../icons/Home.svg"
export default {
  components: {
    IconHome
  },

  data() {
    return {
      active: 0
    }
  }
}
</script>

<style scoped lang="postcss">
svg {
  width: 22px;
  height: 22px;
}
a {
  display: inline-flex;
}
.home {
  margin-top: 5px;
}
button {
  padding: 2px;
}
</style>
