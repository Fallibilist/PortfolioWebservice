import educationComponent from './education.component.js'
import educationController from './education.controller.js'
import educationService from './education.service.js'

export default
  angular
    .module('education', [])
    .component('educationComponent', educationComponent)
    .controller('educationController', educationController)
    .service('educationService', educationService)
    .name
