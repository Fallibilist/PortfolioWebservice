import interestsComponent from './interests.component.js'
import interestsController from './interests.controller.js'
import interestsService from './interests.service.js'

export default
  angular
    .module('interests', [])
    .component('interestsComponent', interestsComponent)
    .controller('interestsController', interestsController)
    .service('interestsService', interestsService)
    .name
