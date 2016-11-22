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
  body {
    background-color: #fafafa;
  }
</style>
