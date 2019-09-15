import userService from "./userService";
export default {
	saveGroup(group){
		var groups = JSON.parse(localStorage.getItem("groups"));
		var userId = userService.getUserId();
		group.userId = userId;
		groups.push(group);
		localStorage.setItem("groups",JSON.stringify(groups));
		return "yes";
	},
	getGroupContacts(id){
		var userId = userService.getUserId();
		var groups = JSON.parse(localStorage.getItem("groups"));
		var group = _.find(groups,function(group){
			return group.id==id
		});
		var contacts = JSON.parse(localStorage.getItem("contacts"));
		var groupContacts = _.filter(contacts, function(contact){
					return (contact.groupId == id)&&(contact.userId == userId);
				});
		return [group,groupContacts];
	},
	getGroups() {
		var userId = userService.getUserId();
		var groups = JSON.parse(localStorage.getItem("groups"));
		var currentGroups = _.filter(groups, function(group){
			return group.userId == userId;
		});
		return currentGroups;
	},
	changeStatus(group){
		var groups = JSON.parse(localStorage.getItem("groups"));
		var updated = "no";
		for(var i=0;i<groups.length;i++){
			if(groups[i].id == group.id){
				groups[i].status = (group.status==1)?2:1;
				updated = "yes";
				break;
			}
		}
		localStorage.setItem("groups",JSON.stringify(groups));
		return updated;
	}
}
