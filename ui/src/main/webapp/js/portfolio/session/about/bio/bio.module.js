import bioComponent from './bio.component.js'
import bioController from './bio.controller.js'
import bioService from './bio.service.js'

export default
  angular
    .module('bio', [])
    .component('bioComponent', bioComponent)
    .controller('bioController', bioController)
    .service('bioService', bioService)
    .name
