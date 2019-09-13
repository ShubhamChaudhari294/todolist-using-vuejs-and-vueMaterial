<template>
  <div id="app" class="page-container">
  <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <span class="md-title">Todo</span>
      </md-app-toolbar>
  </md-app>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
