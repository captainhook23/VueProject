<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{ content }}</h3>
    </header>
    <body>
      <p> Alle User Accounts </p>
      <div v-for="users in allUsers :key="users">
       <div> 
       <p> Username: </p>
       {{user.name}}

  </div>
      </div>
    </body>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "AdminView",
  data() {
    return {
      content: "",
    };
  },
  computed:  
  {
     allUsers(){
       return allUsers;
     }
  }
  mounted() {
    UserService.getAdminBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
