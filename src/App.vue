<template>
  <div>
    <category-navigation></category-navigation>
  </div>
</template>

<script>
  import CategoryNavigation from './CategoryNavigation.vue';
export default {
  name: 'app',
  components: {
    [CategoryNavigation.name]: CategoryNavigation
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #fafafa;
  }
</style>
