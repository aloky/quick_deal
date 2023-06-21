<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const name = ref('');

const addTodo = () => {
  store.commit('addTodo', {
    id: Date.now(),
    name: name.value
  })
  name.value = ''
}
</script>

<template>
  <form @submit.prevent="addTodo" class="todo-form">
    <div>Добавление todo</div>
    <input v-model="name" type="text" class="input" placeholder="Название" required>
    <button class="button">Добавить</button>
  </form>
</template>

<style scoped>
.todo-form {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 300px;
  margin: auto;
  border: 1px solid #1a1a1a;
  border-radius: 8px;
  padding: 1em;
}
</style>