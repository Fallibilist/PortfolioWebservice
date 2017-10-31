import projectsComponent from './projects.component.js'
import projectsController from './projects.controller.js'
import projectsService from './projects.service.js'

export default
  angular
    .module('projects', [])
    .component('projectsComponent', projectsComponent)
    .controller('projectsController', projectsController)
    .service('projectsService', projectsService)
    .name
