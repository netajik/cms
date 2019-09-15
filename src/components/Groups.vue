<template>
	<div>
		<div class="text-right mb-2">
			<button type="button" class="btn btn-info" v-on:click="$bus.$emit('open-group-modal')">Create Group</button>
		</div>
		<table class="table table-bordered">
	    <thead>
	      <tr>
	        <th>Name</th>
	        <th>Status</th>
	      </tr>
	    </thead>
	    <tbody>
	      <tr v-for="(group,index) in groups"
	      		class="clickable">
	        <td v-on:click="gotoGroup(group)"><icon name="users" class="text-info" style="margin-right:5px;"></icon> {{group.name}}</td>
	        <td>
	        	<button v-show="group.status==1"
	        					class="btn btn-success"
	        					v-on:click="changeStatus($event,group,index)"
	        					>Make Inactive</button>
	        	<button
	        					v-show="group.status==2"
	        					class="btn btn-danger"
	        					v-on:click="changeStatus($event,group,index)"
	        					>Make Active</button>
	        </td>
	      </tr>
	      <tr v-if="groups.length==0">
        	<td colspan="2">No data found</td>
        </tr>
	    </tbody>
	  </table>
	  <group-form></group-form>
	</div>
</template>
<script type="text/javascript">
import mappings from '@/mappings';
import Icon from 'vue-awesome/components/Icon';
import GroupForm from '@/components/GroupForm';
import groupService from '@/services/groupService';
export default {
	components: {
		Icon,
		GroupForm
	},
	data() {
		return{
			groups: []
		}
	},
	created() {

	},
	mounted() {
		var that = this;
		this.getGroups();
		this.$bus.$on("new-group-added", function(){
			that.getGroups();
		});
	},
	methods: {
		getGroups() {
			this.groups = groupService.getGroups();
		},
		gotoGroup(group) {
			if(group.status ==1){
				var url = mappings.GROUP_URL.replace(":groupId",group.id);
				this.$router.push(url);
			}else{
				window.alert("Please change group status to Active to view the group details.");
			}

		},
		changeStatus(event,group,index){
			var that = this;
			var updateStatus = "";
			updateStatus= groupService.changeStatus(group);
			event.preventDefault();
			if(updateStatus =="yes"){
				this.groups[index].status = (group.status==1)?2:1;
			} else{}
		}
	}
}
</script>
