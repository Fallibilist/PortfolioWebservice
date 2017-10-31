/* @ngInject */
class SourceService {
    
    constructor($http, apiUrl) {
        this.$http = $http
        this.apiUrl = apiUrl
    }
    
}

export default SourceService