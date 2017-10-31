/* @ngInject */
class BioService {
    
    constructor($http, apiUrl) {
        this.$http = $http
        this.apiUrl = apiUrl
    }
    
}

export default BioService