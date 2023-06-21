<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex';

const store = useStore()

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  }
})

const isEditName = ref(false)
const todoName = ref(props.todo.name)


const saveTodo = () => {
  store.commit('editTodo', {
    name: todoName.value,
    id: props.todo.id
  })
  isEditName.value = false
}

const deleteTodo = () => {
  store.commit('deleteTodo', props.todo.id);
}
</script>

<template>
  <div class="todo-item">
    <input v-if="isEditName" v-model="todoName" class="input">
    <div v-else class="todo-item-title">
      {{ todo.name }}
    </div>
    <div class="todo-item-actions">
      <button v-if="isEditName" class="button" @click="saveTodo">Сохранить</button>
      <button v-else class="button" @click="isEditName = true">Редактировать</button>
      <button class="button button-error" @click="deleteTodo">Удалить</button>
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  border: 1px solid #1a1a1a;
  border-radius: 8px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.todo-item-title {
  font-size: 24px;
}

.todo-item-actions {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
}
</style>