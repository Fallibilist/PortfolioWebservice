/* @ngInject */
class InterestsController {

    constructor(interestsService, $state) {
        this.interestsService = interestsService
        this.$state = $state
    }

}

export default InterestsController