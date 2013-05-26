// Revealing Module Pattern

define(function(){       // define is a function of requirejs
 
    function add(a, b){
        return a + b;
    }
     
    return {
        add:add  		// reminder: declare the function in the returned object
    };
});