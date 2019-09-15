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
	      	<button type="button" class="btn btn-primary">Submit</button>
	        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>
</template>
<script type="text/javascript">
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
		$(this.$refs.modal).on("hide.bs.modal", function() {
     // that.$emit("hide");
    });
	},
	mounted() {
		var that = this;
		this.$bus.$on("open-group-modal", function(){
			$(that.$refs.modal).modal('show');
		});
	},
	methods: {

	}
}
</script>
