<template>
  <vs-button class="message" icon color="#7d33ff" :active="active == 5" @click="active = 5">
    <IconMessage />
  </vs-button>
</template>

<script>
import IconMessage from "../../../icons/Message.svg";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    IconMessage
  }
};
</script>

<style scoped lang="postcss">
svg {
  width: 22px;
  height: 22px;
}
button {
  padding: 2px;
}
</style>