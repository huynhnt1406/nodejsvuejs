<template>
  <div class="app">
    <div class="app-title">
      <h3>TODO APPLICATION</h3>
    </div>
    <div class="register">
      <b-form class="form" v-if="isLoggedIn == false">
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
            v-model="form.email"
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
            v-model="form.name"
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
            v-model="form.phonenumber"
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
            v-model="form.password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="form-group-btn">
          <b-button @click="register" variant="success">Register</b-button>
        </b-form-group>
        <b-alert show variant="primary"
          >Have an account ?
          <b-link @click="isLogged()" href="#">Login now</b-link></b-alert
        >
      </b-form>
      <div class="register" v-else-if="isLoggedIn == true">
        <b-form class="form">
          <b-form-group
            class="form-group"
            id="input-group-5"
            label="Your Name:"
            label-for="input-5"
          >
            <b-form-input
              id="input-5"
              placeholder="Enter name"
              v-model="form.name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            class="form-group"
            id="input-group-6"
            label="Your Password:"
            v-model="form.password"
            label-for="input-6"
          >
            <b-form-input
              id="input-5"
              type="password"
              placeholder="Enter password"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group class="form-group-btn">
            <b-button @click="login" variant="success">Login</b-button>
          </b-form-group>
          <b-alert show variant="primary">
            <b-link @click="isLogged()" href="#">Go back to register!</b-link>
          </b-alert>
        </b-form>
      </div>
      <div class="o-register">
        <h3>Or login with social website !</h3>
        <b-form-group class="form-group-btn">
          <b-button variant="danger">Login with Google</b-button>
        </b-form-group>
        <b-form-group class="form-group-btn">
          <b-button variant="primary">Login with Facebook</b-button>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      form: {
        email: "",
        name: "",
        phonenumber: "",
        password: "",
        isAdmin: false,
      },
    };
  },
  methods: {
    isLogged() {
      this.isLoggedIn = !this.isLoggedIn;
    },
    register(event) {
      event.preventDefault();
      console.log(
        "register",
        this.form.name,
        this.form.phonenumber,
        this.form.email,
        this.form.password,
        this.form.isAdmin
      );
    },
    login(event) {
      event.preventDefault();
      console.log("login", this.form.name, this.form.isAdmin);
    },
  },
};
</script>

<style scope>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.register {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
}
.form-group.form-group{
  width: 300px;
  margin: 0;
  margin-bottom: 15px;
}
.form {
  padding-right: 20px;
  border-right: 1px solid lightgray;
}
.o-register {
  padding-left: 20px;
}
</style>