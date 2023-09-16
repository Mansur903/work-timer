<script setup>
import { ref } from 'vue'

const tasks = ref([
  {id: 1, name: 'task 1'},
  {id: 2, name: 'task 2'},
  {id: 3, name: 'task 3'},
])

const newTask = ref('')
const addTask = () => {
  tasks.value.push({id: tasks.value.length + 1, name: newTask.value})
  newTask.value = ''
}
</script>

<template>
  <div class="tasks-area">
    <input v-model.trim="newTask" class="new-task" type="text" placeholder="New task">
    <button @:click="addTask">Add Task</button>
    <ul>
      <li
          v-for="task in tasks"
          :key="task.id"
      >
        {{task.name}}
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .tasks-area {
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
}
</style>