<template>
  <div class="dropdown">
    <vs-button
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      class="notify dropdown-toggle"
      icon
      color="warn"
      gradient
      :active="active == 3"
      @click="active = 3"
    >
      <IconNotification />
    </vs-button>
    <div
      class="dropdown-menu dropdown-menu-right scrollable-menu"
      aria-labelledby="dropdownMenuButton"
    >
      <a class="dropdown-item" href="#">
        <div class="svg-box svg-box-1">
          <IconAnalysis />
        </div>
        <div class="dropdown-item-info">
          <p>August 31,2020</p>
          <p>This is an alert message. It's...</p>
        </div>
      </a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">
        <div class="svg-box svg-box-2">
          <IconWarning />
        </div>
        <div class="dropdown-item-info">
          <p>Augus 22,2020</p>
          <p>A new monthly report is reas...</p>
        </div>
      </a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">
        <div class="svg-box svg-box-3">
          <IconSignal />
        </div>
        <div class="dropdown-item-info">
          <p>August 8,2020</p>
          <p>Critical System Failure, syste...</p>
        </div>
      </a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">
        <div class="svg-box svg-box-4">
          <IconChartDown />
        </div>
        <div class="dropdown-item-info">
          <p>August 8,2020</p>
          <p>Critical System Failure, syste...</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import IconNotification from "../../../icons/Notification.svg";
import IconAnalysis from "../../../icons/Analysis.svg";
import IconSignal from "../../../icons/Signal.svg";
import IconWarning from "../../../icons/Warning.svg";
import IconChartDown from "../../../icons/ChartDown.svg";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    IconNotification,
    IconAnalysis,
    IconSignal,
    IconWarning,
    IconChartDown
  }
};
</script>

<style scoped lang="postcss">
svg {
  width: 22px;
  height: 22px;
}
.dropdown {
  margin-top: 3px;
}
.scrollable-menu {
  height: auto;
  max-height: 200px;
  overflow-x: hidden;
}
.dropdown-menu {
  .dropdown-item {
    display: flex;
    align-items: center;
    height: 100%;
    .svg-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 999px;
      flex-shrink: 0;
      margin-right: 16px;
      color: #fff;
    }
    .svg-box-1 {
      background-color: #195bff;
    }
    .svg-box-2 {
      background-color: #ff4757;
    }
    .svg-box-3 {
      background-color: #ffba00;
    }
    .svg-box-4 {
      background-color: #7d33ff;
    }
    .dropdown-item-info {
      margin-top: 10px;
      line-height: 6px;
    }
  }
}
.notify {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 6px;
}
</style>