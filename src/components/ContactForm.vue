<template>
	<div id="contact_form" class="modal fade " role="dialog" ref="modal">
	  <div class="modal-dialog modal-lg">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h4 class="modal-title">Contact</h4>
	      </div>
	      <div class="modal-body">
					<form action="/action_page.php">
						<div class="form-group">
							<div class="row">
								<div class="col-md-2">
									<label for="firstname">First Name:</label>
								</div>
								<div class="col-md-3">
									<input type="name" class="form-control" id="firstName" v-model="contact.firstname">
								</div>
							</div>
					  </div>
					  <div class="form-group">
					  	<div class="row">
								<div class="col-md-2">
									<label for="firstname">Last Name:</label>
								</div>
								<div class="col-md-3">
									<input type="name" class="form-control" id="lastName" v-model="contact.lastname">
								</div>
							</div>
					  </div>
					  <div class="form-group">
					  	<div class="row">
								<div class="col-md-2">
									<label for="email">Email address:</label>
								</div>
								<div class="col-md-3">
									<input type="email" class="form-control" id="email" v-model="contact.email">
								</div>
							</div>
					  </div>
					  <div class="form-group">
					  	<div class="row">
								<div class="col-md-2">
									<label for="aadhar">Aadhar Number:</label>
								</div>
								<div class="col-md-3">
									<input type="aadhar" class="form-control" id="aadhar" v-model="contact.aadhar">
								</div>
							</div>
					  </div>
					  <div class="form-group">
					  	<div class="row">
								<div class="col-md-2">
									<label for="phone">Phone:</label>
								</div>
								<div class="col-md-3">
									<input type="phone" class="form-control" id="phone" v-model="contact.phone">
								</div>
							</div>
					  </div>
					</form>
	      </div>
	      <div class="modal-footer">
	      	<button type="button" class="btn btn-primary" v-on:click="saveContact($event)">Submit</button>
	        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>
</template>
<script type="text/javascript">
import contactsService from "@/services/contactsService";
export default {
	data() {
		return {
			contact:{
				firstName: null,
				lastName: null,
				email: null,
				aadhar: null,
				phone: null,
				status: 1
			}
		}
	},
	create() {
	},
	mounted() {
		var that = this;
		this.$bus.$on("open-contact-modal", function(){
			$(that.$refs.modal).modal('show');
		});
	},
	methods: {
		saveContact(event) {
			var that = this;
			var dataSaved=contactsService.saveContact(that.contact);
			if(dataSaved == "yes"){
				$(this.$refs.modal).modal("hide");
				that.$bus.$emit("new-contact-added");
			}
		}
	}
}
</script>
