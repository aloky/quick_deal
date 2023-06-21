<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex'

const store = useStore()

defineProps({
  msg: String,
})

const count = computed(() => store.state.count)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button class="button" @click="store.commit('increment')">Store count: {{ count }}</button>
  </div>
  <div class="card">
    <RouterLink :to="{ name: 'todo-list' }" custom v-slot="{ navigate }">
      <button class="button" @click="navigate">Todo list page</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
