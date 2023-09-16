<script setup>
console.log('main page!')
import TaskArea from "@/components/TaskArea.vue";
</script>

<template>
  <main>
    Main Page
    <TaskArea></TaskArea>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>