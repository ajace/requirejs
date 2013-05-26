/* Config file to load in all dependencies */

requirejs.config({

	baseUrl: 'js',
	paths: {
		'modernizr': 'vendors/modernizr',				// with .load() for polyfills
		'jquery': 'vendors/jquery-1.10.0',
		'hashchange': 'vendors/jquery.ba-hashchange'
	},
	shim: {
		'hashchange': ['jquery']
	}
});

// load main app module
requirejs(["main"]);