/* @ngInject */
class ContentController {

    constructor(contentService, $state) {
        this.contentService = contentService
        this.$state = $state
    }

}

export default ContentController