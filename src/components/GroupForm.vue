<template>
	<div id="contact_form" class="modal fade " role="dialog" ref="modal">
	  <div class="modal-dialog modal-lg">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h4 class="modal-title">Group</h4>
	      </div>
	      <div class="modal-body">
					<form action="/action_page.php">
						<div class="form-group">
							<div class="row">
								<div class="col-md-2">
									<label for="firstname">Name:</label>
								</div>
								<div class="col-md-3">
									<input type="name" class="form-control" id="firstName" v-model="group.name">
								</div>
							</div>
					  </div>
					</form>
	      </div>
	      <div class="modal-footer">
	      	<button type="button" class="btn btn-primary" v-on:click="saveGroup($event)">Submit</button>
	        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>
</template>
<script type="text/javascript">
import groupService from "@/services/groupService";
export default {
	data() {
		return {
			group:{
				name: null,
				status: 1,
				userId: null
			}
		}
	},
	create() {
	},
	mounted() {
		var that = this;
		this.$bus.$on("open-group-modal", function(){
			$(that.$refs.modal).modal('show');
		});
	},
	methods: {
		saveGroup(event) {
			var that = this;
			var dataSaved=groupService.saveGroup(that.group);
			if(dataSaved){
				$(this.$refs.modal).modal("hide");
				that.$bus.$emit("new-group-added");
			}
		}
	}
}
</script>
