import userService from './userService'
export default {
	getContacts() {
		var userId = userService.getUserId();
		console.log(localStorage.getItem("contacts"));
		var contacts = JSON.parse(localStorage.getItem("contacts"));
		var currentContacts = _.filter(contacts, function(contact){
			console.log(contact);
			return contact.userId = userId;
		});
	}
}
