define(function(){  				// no need for define since this is not dependent
     
    function render(parameters){
        var appDiv = document.getElementById('app');
        appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
    }
     
    return {
        render:render
    };
});