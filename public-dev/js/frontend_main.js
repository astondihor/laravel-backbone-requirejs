require.config({
	paths: {
		jquery: 'vendor/jquery.min',
		underscore: 'vendor/underscore-min',
		backbone: 'vendor/backbone',
		bootstrap: 'vendor/bootstrap',
		text: 'vendor/text',
		templates: 'app/templates'
	},
	shim: {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_',
		},
		backbone: {
			exports: 'Backbone',
			deps: ['jquery', 'underscore']
		},
		bootstrap: {
			exports: 'Bootstrap',
			deps: ['jquery']
		}
	}
});

require(['app/frontend_app'], function(App){
	new App;
}, function (err) {
	console.log(err.requireType);
	console.log(err.requireModules);
});

requirejs.onError = function (err) {
    console.log(err.requireType);
};
