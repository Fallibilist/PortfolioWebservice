/* @ngInject */
class ProjectsController {

    constructor(projectsService, $state) {
        this.projectsService = projectsService
        this.$state = $state
    }

}

export default ProjectsController