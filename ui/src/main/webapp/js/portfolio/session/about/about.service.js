/* @ngInject */
class AboutService {
    
    constructor($http, apiUrl) {
        this.$http = $http
        this.apiUrl = apiUrl
    }
    
}

export default AboutService