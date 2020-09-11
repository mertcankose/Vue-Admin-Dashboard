<template>
  <flickity class="item-container" ref="flickity" :options="flickityOptions">
    <vs-card class="item" v-for="(card, index) in cards" :key="index">
      <template #title>
        <h3>{{ card.title }}</h3>
      </template>
      <template #img>
        <img :src="card.image" height="160" alt="" />
      </template>
      <template #text>
        <p>
          {{ card.content }}
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <IconWarning class="warning-icon" />
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <IconAnalysis class="analysis-icon" />
          <span class="span">
            {{ card.warning }}
          </span>
        </vs-button>
      </template>
    </vs-card>
  </flickity>
</template>

<script>
import IconWarning from "../../icons/Warning.svg"
import IconAnalysis from "../../icons/Analysis.svg"
import Flickity from "vue-flickity"
export default {
  components: {
    IconWarning,
    IconAnalysis,
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        freeScroll: true
        //autoPlay: 1500

        // any options from Flickity can be used
      },
      cards: [
        {
          title: "Cyber Security",
          content: "Cyber Security Field",
          image:
            "https://innovationatwork.ieee.org/wp-content/uploads/2019/11/bigstock-Internet-Security-Firewall-Or-326464240_1024X684.png",
          warning: "10"
        },
        {
          title: "Network",
          content: "Network Systems",
          image: "https://www.fgdc.gov/img/slider/slider-bg-network.jpg/image",
          warning: "14"
        },
        {
          title: "Malware",
          content: "Malware Analysis",
          image:
            "https://internationalsecurityjournal.com/wp-content/uploads/2020/03/shutterstock_1378498490.jpg",
          warning: "26"
        },
        {
          title: "Cyber Security",
          content: "Cyber Security",
          image:
            "https://images.yourstory.com/cs/1/b3cc3444ab5e11e88691f70342131e20/Whatissoftwareandtypesofsoftwarewithexamples1575272423828jpg",
          warning: "36"
        },
        {
          title: "Servers",
          content: "Database and Servers",
          image:
            "https://www.teknotel.com/blog/wp-content/uploads/2019/03/dedicated-server-kullanimi-1080x720.jpg",
          warning: "62"
        },
        {
          title: "Computer",
          content: "Intelligence Software",
          image: "https://www.evernex.com/wp-content/uploads/2016/10/Untitled-1-1.jpg",
          warning: "8"
        }
      ],
      methods: {
        next() {
          this.$refs.flickity.next()
        },

        previous() {
          this.$refs.flickity.previous()
        }
      }
    }
  }
}
</script>

<style scoped lang="postcss">
.item-container {
  width: 100%;
  height: 250px;
}
.item {
  width: 18%; /* full width */
  height: 300px; /* height of carousel */
  margin-right: 20px;
  @media (--t) {
    width: 40%;
    margin-right: 20px;
  }
  @media (--tl) {
    width: 80%;
    margin-right: 5px;
  }
}

.warning-icon {
  width: 16px;
  height: 16px;
  color: #fff;
}
.analysis-icon {
  width: 16px;
  height: 16px;
  color: red;
}
</style>
