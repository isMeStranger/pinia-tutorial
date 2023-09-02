<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { useTasksStore } from './store/TasksStore';
import { storeToRefs } from 'pinia';
import TaskItem from './components/TaskItem.vue';

const tasksStore = useTasksStore();
const { tasks } = storeToRefs(tasksStore);
</script>

<template>
  <header>
    <h1> Pinia Tasks </h1>
  </header>

  <div class="tasks-list">
    <ul>
      <TaskItem class="task-item" v-for="task in tasks" :task="task"></TaskItem>
    </ul>
  </div>
</template>

<style scoped>
.task-item {
  font-size: larger;
}

header {
  background-color: #434343;
  color: white;
  width: 100%;
}
</style>
