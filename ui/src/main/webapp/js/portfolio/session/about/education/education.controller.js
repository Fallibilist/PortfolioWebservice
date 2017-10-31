/* @ngInject */
class EducationController {

    constructor(educationService, $state) {
        this.educationService = educationService
        this.$state = $state
    }

}

export default EducationController