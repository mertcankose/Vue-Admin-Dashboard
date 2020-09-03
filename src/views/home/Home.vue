<template>
  <div class="home">
    <div class="home-head">
      <div>1</div>
      <div>2</div>
    </div>
    <div class="home-mid">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
    <div class="home-bot">
      <div>1</div>
      <div>2</div>
    </div>
  </div>
</template>

<script>
//import CustomText from "@/components/CustomText"; //@ = alias(kısayol)
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped lang="postcss">
h1 {
  color: red;
  @media (--t) {
    color: blue;
  }
}
.home {
  display: grid;
  grid-template-rows: 380px 2fr 380px;
  gap: 20px;
  div {
    border: 1px solid black;
  }
  .home-head {
    display: grid;
    grid-template-columns: 3fr 1fr;
    @media (--t) {
      grid-template-columns: 1fr;
    }
  }
  .home-mid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (--t) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .home-bot {
    display: grid;
    grid-template-columns: 1fr 3fr;
    @media (--t) {
      grid-template-columns: 1fr;
    }
  }
}
</style>