<template>
	<div>
		<div>
			<span></span>
		</div>
		<div class="text-right mb-2">
			<button type="button" class="btn btn-info" v-on:click="$bus.$emit('open-contact-modal')">Create Contact</button>
		</div>
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
	  <contact-form></contact-form>
	</div>
</template>
<script type="text/javascript">
import mappings from "@/mappings";
import Pagination from "@/components/helpers/Pagination";
import Icon from "vue-awesome/components/Icon";
import ContactForm from "@/components/ContactForm";
import contactsService from "@/services/contactsService";
export default {
	components:{
		Pagination,
		Icon,
		ContactForm
	},
	props: {
		groupId: null
	},
	data(){
		return {
			contacts: null,
			group: null,
		}
	},
	created(){

	},
	mounted() {
		if(this.groupId){
			this.getGroupContacts(this.groupId);
		}else{
			this.getContacts();
		}
	},
	methods: {
		getGroupContacts: function(groupId){
			var groupContacts = groupService.getGroupContacts(groupId);
			this.group = groupContacts[0];
			this.contacts = groupContacts[1];
		},
		getContacts() {
			this.contacts = contactsService.getContacts();
		}
	}
}
</script>
