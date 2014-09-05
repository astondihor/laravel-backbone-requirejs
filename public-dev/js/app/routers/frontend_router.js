define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/home/HomeView',
    'app/views/projects/ProjectsView',
    'app/views/footer/FooterView'
], function($, _, Backbone, HomeView, ProjectsView, FooterView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            'projects': 'showProjects',
            '*actions': 'defaultAction'
        },
		initialize: function(){
			var footerView = new FooterView();
			Backbone.history.start();
		},
		showProjects: function(){
			var projectsView = new ProjectsView();
			projectsView.render();
		},
		defaultAction: function (actions) {
			console.log("default Action");
			var homeView = new HomeView();
			homeView.render();
		},
    });
    return AppRouter;
});
