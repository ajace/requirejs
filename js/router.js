define(['jquery', 'hashchange', 'controllers/listController', 'controllers/addController'], 
    function($, hashchange, listController, addController){  
 
        var routes = [{hash:'#list', controller:'listController'},
                      {hash:'#add',  controller:'addController'}];
        var defaultRoute = '#list';
        var currentHash = '';

        function startRouting(){
            $(window).hashchange( function(){
                window.location.hash = location.hash || defaultRoute;
                console.log(window.location.hash);
            });   
            $(window).hashchange();
            setInterval(hashCheck, 100);
        }

        function hashCheck(){
            if (window.location.hash != currentHash){
                for (var i = 0, currentRoute; currentRoute = routes[i++];){
                    if (window.location.hash == currentRoute.hash)
                        loadController(currentRoute.controller);
                }
                currentHash = window.location.hash;
            }
        }
         
        function loadController(controllerName){

            if (controllerName === 'addController') {
                addController.start();
            } else { 
                listController.start(); 
            }  
        }
            
        return {
            startRouting:startRouting      // name of public method : name of method inside this function
        };
});