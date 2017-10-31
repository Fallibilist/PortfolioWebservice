import contentComponent from './content.component.js'
import contentController from './content.controller.js'
import contentService from './content.service.js'

export default
  angular
    .module('content', [])
    .component('contentComponent', contentComponent)
    .controller('contentController', contentController)
    .service('contentService', contentService)
    .name
