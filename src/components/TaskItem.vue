<script setup lang="ts">
const props = defineProps({
    task: String
})

</script>
<template>
    <li>
        <div class="">{{ props.task }} (from TaskItem)
            <i class="material-icons">delete</i>
            <i class="material-icons">favorite</i>
        </div>

    </li>
</template>

<style lang="sass" scoped>
.task-item{
    display:flex;
    align-items:center,
    
}
</style>