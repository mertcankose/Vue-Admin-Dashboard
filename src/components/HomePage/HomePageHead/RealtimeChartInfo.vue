<template>
  <div class="infos">
    <div class="header-box">
      <CustomText tag="h2" size="normal" class="header-box-header">Dashboard</CustomText>
      <CustomText tag="p" size="small" class="header-box-info">Overview of Latest Month</CustomText>
    </div>

    <div class="earning-box">
      <CustomText tag="span" size="huge" class="earning-box-money">$3468</CustomText>
      <CustomText tag="p" size="small" class="earning-box-info">Current Month Earnings From Attacks</CustomText>
    </div>

    <div class="defense-box">
      <CustomText tag="span" size="huge" class="defense-box-defense">82</CustomText>
      <CustomText tag="p" size="small" class="defense-box-info">Current Month Defense</CustomText>
    </div>

    <button class="summary-button">Last Month Summary</button>
  </div>
</template>

<script>
import CustomText from "../../Helpers/CustomText";
export default {
  components: {
    CustomText
  }
};
</script>

<style scoped lang="postcss">
p {
  color: var(--c-main-text-color-dull);
}
.infos {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 24px;
  .header-box {
    &-header {
    }
    &-info {
    }
  }
  .earning-box {
    &-money {
      font-weight: bold;
      color: #4aa23c;
    }
    &-info {
      width: 80%;
    }
  }
  .defense-box {
    &-defense {
      font-weight: bold;
      color: #f33921;
    }
    &-info {
    }
  }
  .summary-button {
    background-color: var(--c-big-buttons-color);
    color: #fff;
    padding: 20px;
    border-radius: 8px;
  }
}
</style>