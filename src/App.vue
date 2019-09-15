<template>
  <div>
    <nav class="navbar navbar-dark bg-info">
      <a class="navbar-brand" href="#">
        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="40" height="40" class="d-inline-block align-top" alt="">
        <img :src="require('./assets/logo.png')" class="logo" alt="">
      </a>
      <h1 class="mx-auto" style="color: #fff">Contact Management System</h1>
      <div class="text-right" v-if="user && user.username">
	      <strong><i class="fa fa-user"></i>{{user.username}}</strong>
	      <button style="margin-left: 5px;" class="btn btn-primary btn-sm" @click="logout">
	        Logout
	      </button>
	    </div>
    </nav>
    <div class="container-fluid">
	    <template v-if="user && user.username">
	      <div class="sidebar">
				  <router-link to="/dashboard"><icon name="home"></icon> Dashboard</router-link>
				  <router-link to="/contacts"><icon name="phone"></icon> Contacts</router-link>
				  <router-link to="/groups"><icon name="users"></icon> Groups</router-link>
				</div>
			</template>
			<template>
				<div class="main">
					<router-view></router-view>

				</div>
	    </template>
    </div>
  </div>
</template>
<script>
import mappings from './mappings';
import Icon from "vue-awesome/components/Icon";
import userService from "@/services/userService";
export default {
  name: 'app',
  components: {
  	Icon
  },
  data() {
  	return {
  		user:null
    }
  },
  mounted() {
   if (!localStorage.getItem("user")) {
      this.$router.push(mappings.LOGIN_URL);
    }else{
    	this.user = userService.getCurrentUser();
    	console.log(this.user);
      this.$router.push(mappings.DASHBOARD);
    }
  },
  methods: {
  	logout() {
  		this.user = null;
      localStorage.removeItem("user");
      this.$router.push(mappings.LOGIN_URL);
    },
  }
}

</script>
<style>
.logo {
  height: 50px;

}
</style>
