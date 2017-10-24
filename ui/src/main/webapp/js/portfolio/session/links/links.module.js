import linksComponent from './links.component.js'
import linksController from './links.controller.js'
import linksService from './links.service.js'

export default
  angular
    .module('links', [])
    .component('linksComponent', linksComponent)
    .controller('linksController', linksController)
    .service('linksService', linksService)
    .name
