/**
 * Imports modules containing state information
 */
import session from './session/session.module'
  import sessionAbout from './session/about/about.module'
  import sessionProjects from './session/projects/projects.module'
    import sessionProjectsContent from './session/projects/content/content.module'
    import sessionProjectsSource from './session/projects/source/source.module'
    import sessionProjectsInfo from './session/projects/info/info.module'
  import sessionLinks from './session/links/links.module'
  
  import apiUrl from './api.url'  

/**
 * Exports the primary module which defines all states
 */
export default
angular
  .module('portfolio', [
    'ui.router',

    session,
    sessionAbout,
    sessionProjects,
    sessionProjectsContent,
    sessionProjectsSource,
    sessionProjectsInfo,
    sessionLinks
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      const sessionState = {
        abstract: true,
        name: 'session',
        url: '/session',
        component: 'sessionComponent'
      }

      const aboutState = {
        name: 'session.about',
        url: '/about',
        component: 'aboutComponent'
      }

      const projectsState = {
        abstract: true,
        name: 'session.projects',
        url: '/projects',
        component: 'projectsComponent'
      }
      
      const contentState = {
        name: 'session.projects.content',
        url: '/content',
        component: 'contentComponent'
      }
      
      const sourceState = {
        name: 'session.projects.source',
        url: '/source',
        component: 'sourceComponent'
      }
      
      const infoState = {
        name: 'session.projects.info',
        url: '/info',
        component: 'infoComponent'
      }

      const linksState = {
        name: 'session.links',
        url: '/links',
        component: 'linksComponent'
      }

      $stateProvider.state(sessionState)
                      .state(aboutState)
                      .state(projectsState)
                        .state(contentState)
                        .state(sourceState)
                        .state(infoState)
                      .state(linksState)

      $urlRouterProvider.otherwise('/session/about')
    }
  ])
  .constant('apiUrl', apiUrl)
  .name