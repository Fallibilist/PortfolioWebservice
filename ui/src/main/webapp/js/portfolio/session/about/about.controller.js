/* @ngInject */
class AboutController {

    constructor(aboutService, $state) {
        this.aboutService = aboutService
        this.$state = $state
    }

}

export default AboutController