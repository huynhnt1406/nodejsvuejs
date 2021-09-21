<template>
  <div class="admin-todos">
    <Header :isAdmin="isAdmin" />
    <div class="dashboard">
      <div class="todo-management">
        <b-alert show dismissible fade> Todos List </b-alert>
        <li class="each-item" v-for="(todo, id) in todos" :key="id">
          <div class="todo-detail">
            <b-icon
              icon="bookmark-fill"
              :class="todo.isCompleted ? 'completed' : 'not-completed'"
            ></b-icon>
            <div class="info">
              <span>{{ todo.name }}</span>
              <span>Created By: {{ todo.username }}</span>
            </div>
          </div>
          {{ todo.date }}
          <button>
            <b-icon class="completed" icon="check-square-fill "></b-icon>
          </button>
          <button>
            <b-icon class="not-completed" icon="bucket-fill"></b-icon>
          </button>
        </li>
      </div>
      <div class="user-management">
        <b-alert show dismissible fade> Users List </b-alert>
        <div class="add-user">
          <b-button v-b-modal.modal-1 variant="success">
            Add a new user
            <b-icon icon="plus-circle-fill"></b-icon>
          </b-button>

          <b-modal id="modal-1" title="Add a user">
            <b-form class="create-user">
              <b-form-group
                class="form-group"
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group"
                id="input-group-2"
                label="Your Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  placeholder="Enter name"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="form-group"
                id="input-group-3"
                label="Your Phone Number:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  placeholder="Enter phone number"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="form-group"
                id="input-group-4"
                label="Your Password:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  type="password"
                  placeholder="Enter password"
                  required
                ></b-form-input>
              </b-form-group>
            </b-form>
          </b-modal>
        </div>
        <li class="each-item" v-for="(todo, id) in todos" :key="id">
          <div class="user-info">
            <b-avatar
              :text="
                todo.username.charAt(0).toUpperCase() +
                todo.username.charAt(1)
              "
              variant="primary"
            ></b-avatar>
            <div class="info">
              <span>Username:{{ todo.username }}</span>
              <span>Email: {{ todo.email }}</span>
            </div>
          </div>
          <button>
            <b-icon class="not-completed" icon="bucket-fill"></b-icon>
          </button>
        </li>
      </div>
    </div>
  </div>
</template> 

<script>
import Header from "../../../utils/Header.vue";
import moment from "moment";
export default {
  components: { Header },
  data() {
    return {
      isAdmin: true,
      user: "",
      todos: [
        {
          id: 1,
          username: "huynh",
          name: "todo 1",
          isCompleted: false,
          email: "a@gmai.com",
          date: moment().format("MMMM Do YYYY, h:mm:ss a"),
        },
        {
          id: 2,
          username: "uyen",
          name: "todo 2",
          isCompleted: true,
          email: "b@gmai.com",
          date: moment().format("MMMM Do YYYY, h:mm:ss a"),
        },
        {
          id: 3,
          username: "nguyen",
          name: "todo 3",
          isCompleted: false,
          email: "c@gmai.com",
          date: moment().format("MMMM Do YYYY, h:mm:ss a"),
        },
      ],
    };
  },
};
</script>

<style scope>
.dashboard {
  display: grid;
  grid-template-columns: 55% 45%;
  margin: 5vh;
}

.todo-management {
  margin-right: 5vh;
}
.not-completed {
  color: red;
}
button {
  border: none;
  background-color: transparent;
}
.create-user .form-group {
  width: 100%;
}
.completed {
  color: green;
}
.not-completed {
  color: red;
}
.info {
  display: flex;
  flex-direction: column; 
  margin-left: 10px;
}
.each-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user-info {
  display: flex;
}
.b-avatar {
  background-color: bisque;
  margin-right: 5px;
  color: black;
}
.todo-detail{
  display: flex;
  align-items: center;
  flex:0.45;
}
</style>