<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>

<script>
export default {
  name: "CustomText",
  props: {
    tag: {
      type: String,
      default: "span"
    },
    size: {
      type: String,
      default: "normal", //normal:15, small:12, xsmall:11, xxsmall:10
      validator: function(value) {
        return (
          ["huge", "big", "normal", "small", "xsmall", "xxsmall"].indexOf(
            value
          ) !== -1
        );
      }
    }
  }
};
</script>

<style scoped>
.huge {
  font-size: 32px;
}
.big {
  font-size: 24px;
}
.small {
  font-size: 12px;
}
.xsmall {
  font-size: 11px;
}
.xxsmall {
  font-size: 10px;
}
</style>

