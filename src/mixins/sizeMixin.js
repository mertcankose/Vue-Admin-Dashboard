export const sizeMixin = {
  data() {
    return {
      windowWidth: undefined,
      windowHeight: undefined
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth)
      window.addEventListener("resize", this.getWindowHeight)

      //Init
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },

  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth
    },

    getWindowHeight() {
      this.windowHeight = document.documentElement.clientHeight
    }
  },
  watch: {
    windowWidth: function() {
      if (this.windowWidth <= 973) {
        this.showAndHide = false
      } else {
        this.showAndHide = true
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth)
    window.removeEventListener("resize", this.getWindowHeight)
  }
}
