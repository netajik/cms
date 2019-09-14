<template>
	<div>
		<table class="table table-bordered">
	    <thead>
	      <tr>
	        <th>Firstname</th>
	        <th>Lastname</th>
	        <th>Email</th>
	        <th>Aadhar</th>
	        <th>Phone</th>
	        <th>Status</th>
	      </tr>
	    </thead>
	    <tbody>
	      <tr v-for="contact in contacts">
	        <td><icon name="phone" class="text-info" style="margin-right:5px;"></icon></i>{{contact.firstName}}</td>
	        <td>{{contact.lastName}}</td>
	        <td>{{contact.email}}</td>
	        <td>{{contact.phone}}</td>
	        <td>{{contact.aadhar}}</td>
	        <td>
	        	<button v-show="contact.status==1"
	        					class="btn btn-success"
	        					>Make Inactive</button>
	        	<button
	        					v-show="contact.status==2"
	        					class="btn btn-danger"
	        					>Make Active</button>
	        </td>
	      </tr>
	    </tbody>
	  </table>
	  <pagination></pagination>
	</div>
</template>
<script type="text/javascript">
import Pagination from "@/components/helpers/Pagination";
import Icon from 'vue-awesome/components/Icon';
export default {
	components:{
		Pagination,
		Icon
	},
	props: {
		groupId: null
	},
	data(){
		return {
			contacts: null
		}
	},
	created(){

	},
	mounted() {
		this.getContacts(this.groupId);
	},
	methods: {
		getContacts: function(id){
			var contacts = [
				{firstName:"Rama",lastName:"Rao",aadhar:"234523456781",email:"@inmar.com",phone:"9945678945",status:1,groupId:1},
				{firstName:"Pavan",lastName:"kumar",aadhar:"234523456782",email:"@inmar.com",phone:"9945678945",status:1,groupId:1},
				{firstName:"Ram",lastName:"Varma",aadhar:"234523456789234523456783",email:"@inmar.com",phone:"9945678945",status:1,groupId:1},
				{firstName:"Poorna",lastName:"Shekar",aadhar:"234523456784",email:"@inmar.com",phone:"9945678945",status:1,groupId:2 },
				{firstName:"Veera",lastName:"Bhadram",aadhar:"234523456785",email:"@inmar.com",phone:"9945678945",status:1,groupId:2 },
				{firstName:"Shankar",lastName:"Rao",aadhar:"234523456786",email:"@inmar.com",phone:"9945678945",status:1,groupId:3 },
				{firstName:"Appala",lastName:"Naidu",aadhar:"23452345677",email:"@inmar.com",phone:"9945678945",status:1,groupId:3 }
			];
			if(id){
				this.contacts = _.filter(contacts, function(contact){
					return contact.groupId == id;
				});
			} else{
				this.contacts = contacts;
			}
		}
	}
}
</script>
