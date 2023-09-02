<script setup lang="ts">
const props = defineProps({
    task: String
})

</script>
<template>
    <li>
        {{ props.task }} (from TaskItem)
    </li>
</template>

<style lang="sass" scoped>

</style>