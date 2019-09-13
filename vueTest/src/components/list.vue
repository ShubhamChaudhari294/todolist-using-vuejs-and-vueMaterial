<template>
<div>
        <md-list class="md-card">
          <md-list-item v-for="(task, index) in taskData">
            <span class="md-list-item-text">{{task}}</span>
            <md-button class="md-raised md-accent" v-on:click="deleteListItem(index)">Delete</md-button>
            <md-button class="md-raised md-primary" v-on:click="editListItem(task, index)">Edit</md-button>
          </md-list-item>
        </md-list>
        <md-dialog :md-active.sync="isDialog"> 
              <md-dialog-title>Edit Todo</md-dialog-title>
              <md-field>
                <md-input v-model="taskName"></md-input>
              </md-field>
                    <md-dialog-actions>
                    <md-button class="md-primary" v-on:click="toggleDialog()">Close</md-button>
                    <md-button class="md-primary" v-on:click="saveData()">Save</md-button>
                  </md-dialog-actions>
        </md-dialog>
</div>        
</template>
<script>
export default {
  name: 'list',
  props: ['taskData','isDialog','id','taskName'],
  data () {
    return {
      isDialog: false,
      taskName: '',
      id: ''
    }
  },
  beforeMount() {
    this.taskName = ''
  },
  methods: {
    deleteListItem (index) {
         var a = this.taskData.splice(index,1)
         localStorage.setItem('todo', JSON.stringify(this.taskData))
         this.taskData = JSON.parse(localStorage.getItem('todo'));
    },
    editListItem (task, index) {
        this.toggleDialog();
        this.taskName = task;
        this.id = index;
    },
    toggleDialog () {
        this.isDialog = !this.isDialog 
    },
    saveData () {
        this.taskData[this.id] = this.taskName;
        localStorage.setItem('todo', JSON.stringify(this.taskData))
        this.taskData = JSON.parse(localStorage.getItem('todo'));
        this.toggleDialog()
    }
  }
}
</script>
<style scoped>
</style>
