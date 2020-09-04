<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
  export default {
    name: "Avatar",
    props: {
      src: {
        type: String,
        default:
          "https://instagram.fyei1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/91263926_225407688572391_4380236136425979904_n.jpg?_nc_ht=instagram.fyei1-1.fna.fbcdn.net&_nc_ohc=ZKAXPz5JvS4AX8lL4L_&oh=d009a5c66b52edd5b69edfeeed43476f&oe=5F7B7458",
      },
      alt: {
        type: String,
      },
      size: {
        type: Number,
      },
    },
  };
</script>

<style scoped>
  .avatar {
      padding:2px;
      border-radius: 999px;
      display:inline-flex;
      background: rgb(184,63,140);
      background: linear-gradient(90deg, rgba(184,63,140,1) 0%, rgba(237,158,90,1) 100%);
    img {
      border-radius: inherit;
      border:2px solid #fff;
      
    }
  }
</style>
