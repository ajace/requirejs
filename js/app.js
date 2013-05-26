/* Config file to load in all dependencies */

requirejs.config({

	"baseUrl": "js",
	"shim": {
		"modernizr": ["vendors/modernizr"],
		"jquery": ["vendors/jquery-1.10.0"],
		"hashchange": ["vendors/jquery.ba-hashchange"]
	}
});

// load main app module
requirejs(["main"]);