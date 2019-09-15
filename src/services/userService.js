export default {
	loginUser(user){
		var users = JSON.parse(localStorage.getItem("users"));
		var userDetails = _.filter(users,function(obj){
			return (obj.username==user.username) && (obj.password==user.password);
		});
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
		var users = JSON.parse(localStorage.getItem("users"));
		var user = JSON.parse(localStorage.getItem("user"));
		var userDetails = _.filter(users,function(obj){
			return (obj.username==user.username);
		});
		return userDetails[0].userId;
	}

}
