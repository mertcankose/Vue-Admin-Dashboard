<template>
  <div class="card" :style="{ backgroundColor: backcolor }">
    <CustomText size="big">
      <slot name="head" />
    </CustomText>
    <div class="card-body" :style="{ color: color }">
      <IconChartBar />
      <div class="card-number">
        <div class="card-number-1">
          <IconArrowUp />
          <slot name="money" />
        </div>
        <slot name="date" />
      </div>
    </div>
  </div>
</template>

<script>
import IconChartBar from "../../icons/ChartBar.svg"
import IconArrowUp from "../../icons/ArrowUp.svg"
import CustomText from "../Helpers/CustomText"
export default {
  props: {
    backcolor: {
      type: String,
      default: "",
      required: true
    },
    color: {
      type: String,
      default: "",
      required: true
    }
  },
  components: {
    IconChartBar,
    IconArrowUp,
    CustomText
  }
}
</script>

<style scoped lang="postcss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 14px;
  color: var(--c-small-card-text-color);
  border-radius: 8px;
  border: 1px solid #ccc;
  .card-body {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .card-number {
      display: flex;
      flex-direction: column;
      align-items: center;
      .card-number-1 {
        display: flex;
        align-items: center;
        font-size: 26px;
        font-weight: bold;
      }
    }
  }
}
svg {
  width: 36px;
  height: 36px;
}
</style>
