import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'

import './style.css'

const addTodoStorage = ({ todoList }) => localStorage.setItem('todo-list', JSON.stringify(todoList))

const store = createStore({
  state() {
    return {
      count: localStorage.getItem('count') || 0,
      todoList: JSON.parse(localStorage.getItem('todo-list')) || []
    }
  },
  mutations: {
    increment(state) {
      state.count++
      localStorage.setItem('count', state.count)
    },
    addTodo(state, { name, id }) {
      state.todoList.push({ name, id });
      addTodoStorage(state)
    },
    editTodo(state, { name, id }) {
      state.todoList = state.todoList.map((el) => el.id === id ? { name, id } : el)
      addTodoStorage(state)
    },
    deleteTodo(state, id) {
      state.todoList = state.todoList.filter((el) => el.id !== id)
      addTodoStorage(state)
    }
  }
})

import App from '~/App.vue'

import Home from 'pages/Home.vue'
import TodoList from 'pages/TodoList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', name: 'index', component: Home,
    },
    {
      path: '/todo-list', name: 'todo-list', component: TodoList,
    }
  ]
})

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
