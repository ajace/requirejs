define(['views/listView'], function(ListView){  		// loads in listView
     
    function start(){
        var users = JSON.parse(localStorage.users);  	// parses the previously created users json
        ListView.render({users:users});					// calls render method of listView
    }
     
    return {
        start:start
    };
});