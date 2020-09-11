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
      <vs-button color="#fff" @click="openNotification1('top-center')">
        <a class="dropdown-item" href="#">
          <div class="svg-box svg-box-1">
            <IconAnalysis />
          </div>
          <div class="dropdown-item-info">
            <p>{{ items[0].date }}</p>
            <p>{{ items[0].content.slice(0, 28) }}...</p>
          </div>
        </a>
      </vs-button>

      <div class="dropdown-divider"></div>
      <vs-button color="#fff" @click="openNotification2('top-center')">
        <a class="dropdown-item" href="#">
          <div class="svg-box svg-box-2">
            <IconWarning />
          </div>
          <div class="dropdown-item-info">
            <p>{{ items[1].date }}</p>
            <p>{{ items[1].content.slice(0, 28) }}...</p>
          </div>
        </a>
      </vs-button>

      <div class="dropdown-divider"></div>

      <vs-button color="#fff" @click="openNotification3('top-center')">
        <a class="dropdown-item" href="#">
          <div class="svg-box svg-box-3">
            <IconSignal />
          </div>
          <div class="dropdown-item-info">
            <p>{{ items[2].date }}</p>
            <p>{{ items[2].content.slice(0, 28) }}...</p>
          </div>
        </a>
      </vs-button>

      <div class="dropdown-divider"></div>

      <vs-button color="#fff" @click="openNotification4('top-center')">
        <a class="dropdown-item" href="#">
          <div class="svg-box svg-box-4">
            <IconChartDown />
          </div>
          <div class="dropdown-item-info">
            <p>{{ items[3].date }}</p>
            <p>{{ items[3].content.slice(0, 28) }}...</p>
          </div>
        </a>
      </vs-button>
    </div>
  </div>
</template>

<script>
import IconNotification from "../../../icons/Notification.svg"
import IconAnalysis from "../../../icons/Analysis.svg"
import IconSignal from "../../../icons/Signal.svg"
import IconWarning from "../../../icons/Warning.svg"
import IconChartDown from "../../../icons/ChartDown.svg"
export default {
  methods: {
    openNotification1(position = null) {
      this.$vs.notification({
        position,
        title: this.items[0].date,
        text: `${this.items[0].content} 👉`
      })
    },
    openNotification2(position = null) {
      this.$vs.notification({
        position,
        title: this.items[1].date,
        text: `${this.items[1].content} 👉`
      })
    },
    openNotification3(position = null) {
      this.$vs.notification({
        position,
        title: this.items[2].date,
        text: `${this.items[2].content} 👉`
      })
    },
    openNotification4(position = null) {
      this.$vs.notification({
        position,
        title: this.items[3].date,
        text: `${this.items[3].content} 👉`
      })
    }
  },
  data() {
    return {
      active: 0,
      items: [
        {
          date: "August 31,2020",
          content: "This is an alert message. It's so complicated problem"
        },
        {
          date: "August 22,2020",
          content:
            "A new monthly report is released last week. If you want to see go to the new"
        },
        {
          date: "August 8,2020",
          content:
            "Spending Alert: We've noticed unusually high spending for your account."
        },
        {
          date: "August 8,2020",
          content: "A new monthly report is ready to download!"
        }
      ]
    }
  },
  components: {
    IconNotification,
    IconAnalysis,
    IconSignal,
    IconWarning,
    IconChartDown
  }
}
</script>

<style scoped lang="postcss">
svg {
  width: 22px;
  height: 22px;
}
.dropdown {
  margin-top: 2.5px;
}
.scrollable-menu {
  height: auto;
  max-height: 210px;
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
