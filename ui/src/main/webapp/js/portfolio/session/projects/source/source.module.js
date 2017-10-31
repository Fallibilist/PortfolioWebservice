import sourceComponent from './source.component.js'
import sourceController from './source.controller.js'
import sourceService from './source.service.js'

export default
  angular
    .module('source', [])
    .component('sourceComponent', sourceComponent)
    .controller('sourceController', sourceController)
    .service('sourceService', sourceService)
    .name
