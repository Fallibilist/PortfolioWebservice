/* @ngInject */
class ResumeController {

    constructor(resumeService, $state) {
        this.resumeService = resumeService
        this.$state = $state
    }

}

export default ResumeController