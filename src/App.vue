<template>
  <div>
    <RouterLink :to="{ name: 'index' }">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </RouterLink>
  </div>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
