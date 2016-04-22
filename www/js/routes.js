angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.chennaiTransportAid', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/chennaiTransportAid.html',
        controller: 'chennaiTransportAidCtrl'
      }
    }
  })

  .state('menu.routes', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/routes.html',
        controller: 'routesCtrl'
      }
    }
  })

  .state('menu.contactUs', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});