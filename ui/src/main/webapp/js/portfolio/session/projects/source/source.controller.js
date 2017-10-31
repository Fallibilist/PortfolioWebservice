/* @ngInject */
class SourceController {

    constructor(sourceService, $state) {
        this.sourceService = sourceService
        this.$state = $state
    }

}

export default SourceController