<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText class="a1" tag="p">p-Merhaba Dünya</CustomText>
    <CustomText class="a2" tag="p" size="small">Merhaba Dünya</CustomText>
    <CustomText class="a3" tag="p" size="xsmall">Merhaba Dünya</CustomText>
    <CustomText class="a4" tag="p" size="xxsmall">Merhaba Dünya</CustomText>
    <IconHome width="60" height="60" color="red"></IconHome>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText' //@ = alias(kısayol)
import IconHome from '../../icons/Home.svg'
export default {
  name: 'Home',
  components: {
    CustomText,
    IconHome
  }
}
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
}
.a1 {
  color: var(--c-nav-background-color);
}
.a2 {
  color: var(--c-main-text-color);
}
.a3 {
  color: var(--c-main-text-color-dull);
}
.a4 {
  color: var(--c-big-buttons-color);
}
</style>