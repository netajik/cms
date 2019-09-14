<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
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
				  <a href="javascript:void(0)" ><i class="fa fa-fw fa-home"></i><router-link to="/dashboard">Dashboard</router-link></a>
				  <a href="javascript:void(0)" ><i class="fa fa-fw fa-wrench"></i><router-link to="/contacts">Contacts</router-link></a>
				  <a href="javascript:void(0)" ><i class="fa fa-fw fa-wrench"></i> <router-link to="/groups">Groups</router-link></a>
				</div>
			</template>
			<template>
				<div class="main">
					<router-view></router-view>
				  <!-- <h2>Sidebar with Icons</h2>
				  <p>This side navigation is of full height (100%) and always shown.</p>
				  <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
				  <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p> -->
				</div>
	    </template>
    </div>
  </div>
</template>
<script>
import mappings from './mappings';

export default {
  name: 'app',
  components: {

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
    	this.user = JSON.parse(localStorage.getItem("user"));
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
