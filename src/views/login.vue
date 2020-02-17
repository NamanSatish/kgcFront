<template>
  <div id="login">
    <h1>KGC Contractor Login</h1>
    <p>
      You
      <b>must</b> be authorized to use this tool. The username &amp; password are
      <b>capital sensitive</b>.
    </p>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button
      type="button"
      id="loginbutton"
      class="btn btn-outline-success"
      v-bind:class="{'btn btn-outline-danger':nonet==true}"
      v-on:click="login()"
    >{{btnText}}</button>
  </div>
</template>

<script>
/*eslint no-unused-vars: "error"*/
import axios from "axios";
export default {
  name: "Login",

  data() {
    return {
      btnText: "Login",
      nonet: false,
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username != this.$parent.mockAccount.username &&
          this.input.password != this.$parent.mockAccount.password
        ) {
          alert("The username and / or password is incorrect");
          return;
        }
      } else {
        alert("A username and password must be present");
        return;
      }
      this.btnText = "Loading...";

      if (
        this.input.username == this.$parent.mockAccount.username &&
        this.input.password == this.$parent.mockAccount.password
      ) {
        this.$emit("authenticated", true);
        this.$router.replace({
          name: "secure"
        });
      } else {
        alert("The username and / or password is incorrect");
      }
    }
  }
};
</script>

<style scoped>
#login {
  width: 600px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
  text-align: center;
  vertical-align: middle;
}
</style>