define([
    'jquery',
    'underscore',
    'backbone',
    'app/routers/frontend_router',
	'bootstrap',
], function($, _, Backbone, Router, Bootstrap){
	var App = Backbone.View.extend({
		initialize: function(){
			new Router;
		}
	});
	return App;
});
