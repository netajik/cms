import userService from "./userService";
export default {
	getGroup(id){
		var userId = userService.getUserId();
		var groups = JSON.parse(localStorate.geItem("groups"));
		var group = _.find(groups,{'id',id});
		var contacts = JSON.parse(localStorate.getItem("contacts"));
		groupContacts = _.filter(contacts, function(contact){
					return (contact.groupId == id)&&(contact.userId == userId);
				});
		return [group,contacts];
	}
}
