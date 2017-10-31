/* @ngInject */
class EducationService {
    
    constructor($http, apiUrl) {
        this.$http = $http
        this.apiUrl = apiUrl
    }
    
}

export default EducationService