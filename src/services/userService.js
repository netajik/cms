export default {
	loginUser(user){
		//var promise = new
		//var promise = $.Deferred();
		var users = JSON.parse(localStorage.getItem("users"));
		var userDetails = _.filter(users,function(obj){
			return (obj.username==user.username) && (obj.password==user.password);
		});console.log(userDetails);
		return userDetails[0].username == user.username;
	},
	saveUser(user) {
		localStorage.setItem("user", JSON.stringify(user));
	},
	getCurrentUser(){
		var user = localStorage.getItem("user");
		return JSON.parse(user);
	},
	getUserId() {
		var user = this.getCurrentUser();
		return user.userId;
	}
}
