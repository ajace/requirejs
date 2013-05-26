define(['views/addView', 'models/user'], function(AddView, User){
 
    function start(){
        AddView.render();
        bindEvents();
    }

    function bindEvents(){
        document.getElementById('add').addEventListener('click', function(){
            var users = JSON.parse(localStorage.users);
            var userName = document.getElementById('user-name').value;
            users.push(new User(userName));  									// can call new User because it's defined as a dependency
            localStorage.users = JSON.stringify(users);

            // show the list after adding
            // require(['controllers/listController'], function(ListController){
            //     ListController.start();
            // });
            // remove above and replace with below since we now have routing
            window.location.hash = '#list';
        }, false);
    }
 
    return {
        start:start
    };
});