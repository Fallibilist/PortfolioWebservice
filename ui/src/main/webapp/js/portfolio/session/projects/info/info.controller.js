/* @ngInject */
class InfoController {

    constructor(infoService, $state) {
        this.infoService = infoService
        this.$state = $state
    }

}

export default InfoController