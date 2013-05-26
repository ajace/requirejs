//


// example
// require(['MyMath'], function(MyMath){   // calls MyMath after ['dependency'] is loaded; modules passed as parameters
     
//     console.log(MyMath.add(1, 2)); 
 
// });

require(['models/user', 
	// 'controllers/listController', 
	// 'controllers/addController'],
	'router'],
	function(User, 
		// listController, 
		// addController
		Router){
     
	    var users = [new User('Barney'),
	                 new User('Cartman'),
	                 new User('Sheldon')];
	     
	    for (var i = 0, len = users.length; i < len; i++){
	        console.log(users[i].name);
	    }
	     
	    localStorage.users = JSON.stringify(users);  // HTML5 local storage; .stringify does not work in IE7

	    // listController.start(); 
	    // addController.start();
	    // added routing
	    Router.startRouting();

});