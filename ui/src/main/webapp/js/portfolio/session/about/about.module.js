import aboutComponent from './about.component.js'
import aboutController from './about.controller.js'
import aboutService from './about.service.js'

export default
  angular
    .module('about', [])
    .component('aboutComponent', aboutComponent)
    .controller('aboutController', aboutController)
    .service('aboutService', aboutService)
    .name
