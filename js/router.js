define(["jquery", "hashchange"], function($, hashchange){
 
    var routes = [{hash:'#list', controller:'listController'},
                  {hash:'#add',  controller:'addController'}];
    var defaultRoute = '#list';
    var currentHash = '';
     
    function startRouting(){
        window.location.hash = window.location.hash || defaultRoute;
        setInterval(hashCheck, 100);
    }

    // replace with hashchange
    // very simple manual monitoring of hashchange event
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
        require(['controllers/' + controllerName], function(controller){
            controller.start();
        });
    }
        
    return {
        startRouting:startRouting
    };
});