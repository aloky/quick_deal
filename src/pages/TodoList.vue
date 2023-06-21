<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import TodoForm from 'components/TodoForm.vue';
import TodoItem from 'components/TodoItem.vue';

const store = useStore()

const todoList = computed(() => store.state.todoList)
</script>

<template>
  <TodoForm />
  <div class="todo-items">
    <template v-if="!todoList.length">Задач нет</template>
    <TodoItem v-for="todo in todoList" :todo="todo" />
  </div>
</template>

<style scoped>
.todo-items {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  gap: 8px;
}
</style>