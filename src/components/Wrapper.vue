<template>
  <div class="home shadow-xl bg-gray-200 w-8/12 mx-auto p-8 md:p-20">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  min-height: 200px;
}

@media screen and (max-width: 720px) {
  .home {
    min-height: 150px;
  }
}

</style>
