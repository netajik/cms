import userService from './userService'
export default {
	saveContact(contact){
		var contacts = JSON.parse(localStorage.getItem("contacts"));
		var userId = userService.getUserId();
		contact.userId = userId;
		contacts.push(contact);
		localStorage.setItem("contacts",JSON.stringify(contacts));
		return "yes";
	},
	getContacts() {
		var userId = userService.getUserId();
		var contacts = JSON.parse(localStorage.getItem("contacts"));
		var currentContacts = _.filter(contacts, function(contact){
			return contact.userId == userId;
		});
		return currentContacts;
	},
	changeStatus(contact){
		var contacts = JSON.parse(localStorage.getItem("contacts"));
		var updated = "no";
		for(var i=0;i<contacts.length;i++){
			if(contacts[i].id == contact.id){
				contacts[i].status = (contact.status==1)?2:1;
				updated = "yes";
				break;
			}
		}
		localStorage.setItem("contacts",JSON.stringify(contacts));
		return updated;
	}
}
