<template>
  <div id="app">
    <Posts />
  </div>
</template>



<script>
import Posts from './components/Posts'
export default {
  name: 'app',
  components: {
    Posts
  }
}
</script>

<style lang="scss">
*   {
  margin: 0;
  padding: 0;
}

#app {
  margin-top: 60px;
}
</style>
