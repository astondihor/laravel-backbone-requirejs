define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/sidebar/sidebarTemplate.html'
], function($, _, Backbone, sidebarTemplate){
	var SidebarView = Backbone.View.extend({
		initialize: function(){
			this.template = _.template( sidebarTemplate );
		},
		render: function(){
			var backbone_ad = {
				site_url : "http://www.backbonejs.org" ,
				image_url : "../../img/backbone_logo.png",
				title : "Backbone.js",
				description: "Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface."
			};
			var require_ad = {
				site_url : "http://www.requirejs.org" ,
				image_url : "../../img/require_logo.png",
				title : "Require.js",
				description: "RequireJS is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node."
			};
			var dataAdd = {
				ads: [backbone_ad, require_ad]
			};
			$(".sidebar").append( this.template( dataAdd ) );
		}
	});
	return SidebarView;
});
