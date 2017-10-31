import resumeComponent from './resume.component.js'
import resumeController from './resume.controller.js'
import resumeService from './resume.service.js'

export default
  angular
    .module('resume', [])
    .component('resumeComponent', resumeComponent)
    .controller('resumeController', resumeController)
    .service('resumeService', resumeService)
    .name
