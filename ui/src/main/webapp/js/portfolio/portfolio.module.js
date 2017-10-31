/**
 * Imports modules containing state information
 */
import session from './session/session.module'
  import sessionAbout from './session/about/about.module'
    import sessionAboutBio from './session/about/bio/bio.module'
    import sessionAboutEducation from './session/about/education/education.module'
    import sessionAboutInterests from './session/about/interests/interests.module'
    import sessionAboutResume from './session/about/resume/resume.module'
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
    sessionAboutBio,
    sessionAboutEducation,
    sessionAboutInterests,
    sessionAboutResume,
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
        abstract: true,
        name: 'session.about',
        url: '/about',
        component: 'aboutComponent'
      }

      const bioState = {
        name: 'session.about.bio',
        url: '/bio',
        component: 'bioComponent'
      }

      const educationState = {
        name: 'session.about.education',
        url: '/education',
        component: 'educationComponent'
      }

      const interestsState = {
        name: 'session.about.interests',
        url: '/interests',
        component: 'interestsComponent'
      }

      const resumeState = {
        name: 'session.about.resume',
        url: '/resume',
        component: 'resumeComponent'
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
                        .state(bioState)
                        .state(educationState)
                        .state(interestsState)
                        .state(resumeState)
                      .state(projectsState)
                        .state(contentState)
                        .state(sourceState)
                        .state(infoState)
                      .state(linksState)

      $urlRouterProvider.otherwise('/session/about/bio')
    }
  ])
  .constant('apiUrl', apiUrl)
  .name