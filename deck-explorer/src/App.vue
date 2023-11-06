<template>
  <div id="app">
    <CardGrid />
  </div>
</template>

<script>
import CardGrid from './components/CardGrid.vue';

export default {
  components: {
    CardGrid,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: grey;
  margin-top: 60px;
}
</style>
