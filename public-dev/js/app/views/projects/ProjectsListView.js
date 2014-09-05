// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above,
  'app/models/project/ProjectModel',
  'app/collections/projects/ProjectsCollection',
  'text!templates/projects/projectsListTemplate.html'

], function($, _, Backbone, ProjectModel, ProjectsCollection, projectsListTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $("#projects-list"),

    render: function(){

      var data = {
        projects: this.collection.models,
        _: _
      };

      var compiledTemplate = _.template( projectsListTemplate);
      $("#projects-list").html( compiledTemplate(data) );
    }
  });
  return ProjectListView;
});
