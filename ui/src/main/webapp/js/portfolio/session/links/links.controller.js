/* @ngInject */
class LinksController {

    constructor(linksService, $state) {
        this.linksService = linksService
        this.$state = $state
    }

}

export default LinksController