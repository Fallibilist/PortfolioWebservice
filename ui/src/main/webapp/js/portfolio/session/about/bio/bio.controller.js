/* @ngInject */
class BioController {

    constructor(bioService, $state) {
        this.bioService = bioService
        this.$state = $state
    }

}

export default BioController