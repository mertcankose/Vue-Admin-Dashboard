<template>
  <div class="data">
    <div class="cards">
      <h1>Systems</h1>
      <Cards />
    </div>
    <div class="boxes">
      <ActivityCard />
      <Progress />
      <Permissions />
    </div>
  </div>
</template>

<script>
import ActivityCard from "../../components/DataPage/Activity";
import Progress from "../../components/DataPage/Progress";
import Cards from "../../components/DataPage/Cards";
import Permissions from "../../components/DataPage/Permissions";

export default {
  name: "Notification",
  components: {
    ActivityCard,
    Progress,
    Cards,
    Permissions
  }
};
</script>

<style scoped lang="postcss">
.data {
  display: grid;
  grid-template-rows: 1fr 2fr;
  @media (--t) {
    grid-template-rows: 400px 2fr;
  }

  .header {
    font-size: 30px;
    font-weight: bold;
  }
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (--t) {
    }
  }
}

.boxes {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  @media (--t) {
    grid-template-columns: 1fr;
  }
  @media (--tl) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
}
</style>
