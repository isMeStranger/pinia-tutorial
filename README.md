### Setup store state
make sure to return {state, getters, fetchers} in your store

```
// ./src/store/TaskStore.ts:

import { defineStore } from "pinia";
import { ref } from "vue";

export const useTasksStore = defineStore("tasks", () => {
  // our state, we want to keep track of this
  const tasks = ref(["item1", "item2", "item3"]);

  return { tasks }; //                              <<<<<<<<< return state
});

```

### Use State 
```
<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { useTasksStore } from './store/TasksStore'; //          <<<<<< import store
import { storeToRefs } from 'pinia';                            <<<<<< keep references 

const tasksStore = useTasksStore();                             <<<<<< use store
const { tasks } = storeToRefs(tasksStore);                      <<<<<< get state
</script>

<template>
  <header>
    <h1> Pinia Tasks </h1>
  </header>

  <div class="tasks-list">
    <ul>
            vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv <<<< use state
      <li class="task-item" v-for="task in tasks">{{ task }}</li>          
    </ul>
  </div>
</template>
```
