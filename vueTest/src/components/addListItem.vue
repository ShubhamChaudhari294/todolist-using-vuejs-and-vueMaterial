<template>
<md-layout>
      <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-33"></div>
      <div class="md-layout-item md-size-33">
      <md-field md-inline  md-align="center" class="inputElements" >
          <label>Start typing</label>
          <md-input v-model="inputItem" ></md-input>
          <md-button class="md-raised md-primary" v-on:click="addListItem(inputItem)">Add</md-button>
      </md-field>
      </div>
      </div>
      <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25"></div>
      <div class="md-layout-item md-size-50">
      <list md-column md-gutter v-if="isTaskAvailable" :taskData = "savedData"></list>
      </div>
      </div>
</md-layout>
</template>
<script>
import list from './list'
export default {
  props: ['inputItem','isTaskAvailable'],
  name: 'HelloWorld',
  data: function () {
      return {
        isTaskAvailable: false,
        savedData: []
    }
  },
  components: {
    list
  },
  methods: {
    addListItem (item) {
          this.savedData.push(item.trim())
          localStorage.setItem('todo', JSON.stringify(this.savedData))
          // This is to refresh data
          this.savedData = JSON.parse(localStorage.getItem('todo'));
    }
  },
  beforeMount () {
    // To handle null condition for first time.
       this.savedData = localStorage.getItem('todo') ? localStorage.getItem('todo') : [];
       if(this.savedData.length > 0) { 
            this.isTaskAvailable = true;  
            this.savedData = JSON.parse(this.savedData)
       }
       this.isTaskAvailable = this.savedData ? true : false;
  }
}
</script>
<style scoped>
</style>
