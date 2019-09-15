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
	      <tr v-for="group in groups"
	      		class="clickable"
	      		v-on:click="gotoGroup(group)">
	        <td><icon name="users" class="text-info" style="margin-right:5px;"></icon> {{group.name}}</td>
	        <td>
	        	<button v-show="group.status==1"
	        					class="btn btn-success"
	        					>Make Inactive</button>
	        	<button
	        					v-show="group.status==2"
	        					class="btn btn-danger"
	        					>Make Active</button>
	        </td>
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
export default {
	components: {
		Icon,
		GroupForm
	},
	data() {
		return{
			groups: null
		}
	},
	created() {

	},
	mounted() {
		this.getGroups();
	},
	methods: {
		getGroups() {
			this.groups = groups;
		},
		changeStatus() {

		},
		gotoGroup(group) {console.log(group);
			var url = mappings.GROUP_URL.replace(":groupId",group.id);
			console.log(url);
			this.$router.push(url);
		}
	}
}
</script>
