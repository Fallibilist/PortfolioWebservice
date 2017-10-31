/* @ngInject */
class InterestsService {
    
    constructor($http, apiUrl) {
        this.$http = $http
        this.apiUrl = apiUrl
    }
    
}

export default InterestsService