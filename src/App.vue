<template>
  <div class="app">
    <MasterNavigation></MasterNavigation>

    <router-view />
  </div>
</template>



<script>
import MasterNavigation from "@/components/Navigation";
export default {
  name: "App",
  components: {
    MasterNavigation
  }
};
</script>
