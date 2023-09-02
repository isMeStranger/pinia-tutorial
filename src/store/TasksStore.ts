import {defineStore} from 'pinia';
import { ref } from 'vue';

export const useTasksStore = defineStore('tasks', ()=>{

    // our state, we want to keep track of this 
    const tasks = ref(['item1', 'item2', 'item3']);  
    
})