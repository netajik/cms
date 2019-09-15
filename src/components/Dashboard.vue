<template>
	<div>
		<div class="row">
			<div class="col-md-3">
				<router-link to="/contacts">
					<div class="panel panel-default">
					  <div class="panel-body">
					  	<div class="box clickable text-center">
					  		<icon name="phone"></icon> Contacts
					  	</div>
					  </div>
					</div>
				</router-link>
			</div>
			<div class="col-md-3">
				<router-link to="/groups">
					<div class="panel panel-default">
					  <div class="panel-body">
					  	<div class="box clickable text-center">
					  		<icon name="users"></icon> Groups
					  	</div>
					  </div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import Icon from "vue-awesome/components/Icon";
export default {
	components:{
		Icon
	}
}
</script>
