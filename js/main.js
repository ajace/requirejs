require(['models/user', 'router'], function(User, Router){
     
	    var users = [new User('Barney'),
	                 new User('Cartman'),
	                 new User('Sheldon')];
	     
	    for (var i = 0, len = users.length; i < len; i++){
	        console.log(users[i].name);
	    }
	     
	    localStorage.users = JSON.stringify(users);  // HTML5 local storage; .stringify does not work in IE7

	    Router.startRouting();

});