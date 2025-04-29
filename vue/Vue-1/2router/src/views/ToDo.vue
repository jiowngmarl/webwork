<script>
export default {
      data(){
        return{
          todos : [ ]
        }       
      },
      methods : {},
      mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(response => this.todos = response.filter( t => t.id<=5 ))
      }
    }
</script>

<template>
    <div id="myDIV" class="header">
      <h2 style="margin:5px">My To Do List</h2>
      <input type="text" id="myInput" placeholder="Title...">
      <span onclick="newElement()" class="addBtn">Add</span>
    </div>

    <ul id="myUL">
      <li v-for="todo in todos" :class="{checked:todo.completed}">{{todo.title}}</li>
    </ul>
</template>

<style></style>