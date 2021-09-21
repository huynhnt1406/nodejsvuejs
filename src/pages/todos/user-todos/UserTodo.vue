<template>
  <div class="user-todos">
    <Header/>
    <div class="todos">
      <div class="add-todo">
        <b-form-group class="form-group-input" id="input-group-1">
          <b-form-input
            id="input-1"
            type="text"
            v-model="todo.name"
            placeholder="Add a todo"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="form-group-btn">
          <b-button @click="addTodo" variant="success">Add</b-button>
        </b-form-group>
      </div>
      <div>
        <div class="todo-list">
          <div class="todo-function">
            <span>Filter By:</span>
            <button @click="filterByCompleted"><b-icon icon="check-circle-fill" title="Completed"></b-icon></button>
            <button @click="filterByNotCompleted"><b-icon icon="x-square-fill" title="Not Completed"></b-icon></button>
            <button @click="sortByTime"><b-icon icon="clock-fill" title="Time"></b-icon></button>
          </div>
          <div class="todos-items" v-for="(item, id) in items" :key="id">
            <div class="each-item">
              <b-icon
                icon="bookmark-fill"
                :class="item.isCompleted ? 'completed' : 'not-completed'"
              ></b-icon>
              <span>{{ item.name }}</span>
              <span>{{ item.createdat }}</span>
              <button @click="markTask(item.id)">
                <b-icon
                  class="completed"
                  icon="check-square-fill 
"
                ></b-icon>
              </button>
              <button @click="removeTask(item.id)">
                <b-icon class="not-completed" icon="bucket-fill"></b-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import Header from '../../../utils/Header.vue';
export default {
  data() {
    return {
      todo: {
        id: 1,
        name: "",
        isCompleted: false,
        createdat: "",
      },
      items: [],
    };
  },
  components:{
    Header
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: this.todo.id++,
        name: this.todo.name,
        createdat: this.todo.createdat = moment().format(
          "MMMM Do YYYY, h:mm:ss a"
        ),
        isCompleted: this.todo.isCompleted,
      };
      this.items = [...this.items, newTodo];
    },
    markTask(idx) {
      const todo = this.items.find((item) => item.id === idx);
      if (todo != null) {
        todo.isCompleted = !todo.isCompleted;
        console.log(todo);
      }
    },
    removeTask(idx) {
      this.items = this.items.filter((item) => item.id !== idx);
    },
    filterByCompleted() {
      if (this.items.length > 0) {
        this.items = this.items.filter((item) => item.isCompleted !== false);
      }else{
        alert('not current list available')
      }
    },
    filterByNotCompleted() {
      if (this.items.length > 0) {
        this.items = this.items.filter((item) => item.isCompleted !== true);
      }else{
        alert('not current list available')
      }
    },
    sortByTime(){
      if(this.items.length>0){
        this.items = this.items.reverse()
      }else{
        alert('not current list available')
      }
    }
  },
};
</script>

<style scope>
.todos {
  margin: 5vh;
}
.todos-items .each-item {
  display: grid;
  grid-template-columns: 4% 30% 30% 4% 4% 28%;
  padding-top: 5px;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
}
.each-item  button {
  border: none;
  background-color: transparent;
}
.todo-function button {
   border: none;
  background-color: transparent;
}
.todo-function {
  display: flex;
}
.add-todo {
  display: flex;
}
.todo-list {
  margin: 20px;
}
.completed {
  color: green;
}
.not-completed {
  color: red;
}
</style>