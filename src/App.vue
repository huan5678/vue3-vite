<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Count from '@/components/Count.vue';
import Demo from '@/components/Demo.vue';
import Demo2 from '@/components/Demo2.vue';
</script>

<template>
  <Count />
  <Demo msg="獨立音樂" />
  <Demo2 msg="演唱會" />
</template>

<style>
@font-face {
  font-family: 'Noto Sans TC';
  src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
}
#app {
  font-family: 'Advent Pro', 'Noto Sans TC', Avenir, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
