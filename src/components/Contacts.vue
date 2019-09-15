<template>
	<div>
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
	      <tr v-for="(contact,index) in contacts">
	        <td><icon name="phone" class="text-info" style="margin-right:5px;"></icon></i>{{contact.firstName}}</td>
	        <td>{{contact.lastName}}</td>
	        <td>{{contact.email}}</td>
	        <td>{{contact.phone}}</td>
	        <td>{{contact.aadhar}}</td>
	        <td>
	        	<button v-show="contact.status==1"
	        					class="btn btn-success"
	        					v-on:click="changeStatus(contact,index)"
	        					>Make Inactive</button>
	        	<button
	        					v-show="contact.status==2"
	        					class="btn btn-danger"
	        					v-on:click="changeStatus(contact,index)"
	        					>Make Active</button>
	        </td>
	      </tr>
	      <tr v-if="contacts.length==0">
        	<td colspan="6">No data found</td>
        </tr>
	    </tbody>
	  </table>
	  <contact-form></contact-form>
	</div>
</template>
<script type="text/javascript">
import mappings from "@/mappings";
import Icon from "vue-awesome/components/Icon";
import ContactForm from "@/components/ContactForm";
import contactsService from "@/services/contactsService";
import groupService from "@/services/groupService";
export default {
	components:{
		Icon,
		ContactForm
	},
	props: {
		groupId: null
	},
	data(){
		return {
			contacts: [],
			group: null,
		}
	},
	created(){

	},
	mounted() {
		var that = this;
		if(this.groupId){
			this.getGroupContacts(this.groupId);
		}else{
			this.getContacts();
		}
		this.$bus.$on("new-contact-added", function(){
			that.getContacts();
		});
	},
	methods: {
		getGroupContacts: function(groupId){
			var groupContacts = groupService.getGroupContacts(groupId);
			this.group = groupContacts[0];
			this.contacts = groupContacts[1];
		},
		getContacts() {
			this.contacts = contactsService.getContacts();
		},
		changeStatus(contact,index){
			var that = this;
			var updateStatus = "";
			updateStatus=contactsService.changeStatus(contact);
			if(updateStatus =="yes"){
				this.contacts[index].status = (contact.status==1)?2:1;
			} else{}
		}
	}
}
</script>
