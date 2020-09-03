<template>
  <div class="home">
    <div>a</div>
    <div>b</div>
    <div>c</div>
  </div>
</template>

<script>
//import CustomText from "@/components/CustomText"; //@ = alias(kısayol)
//import IconHome from "../../icons/Home.svg";
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
h1 {
  color: red;
  @media (--t) {
    color: blue;
  }
}
.home {
  background-color: var(--c-primary-color);
  display: grid;
  grid-template-rows: 300px 2fr 300px;
  gap: 20px;
  div {
    border: 1px solid black;
  }
}
</style>