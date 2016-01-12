let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      controller: 'AboutController',
      templateUrl: 'templates/about.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      controller: 'ContactController',
      templateUrl: 'templates/contact.tpl.html'
    })
    .state('root.list', {
      url: '/admin',
      controller: 'ListController',
      templateUrl: 'templates/list.tpl.html'
    })
    .state('root.single', {
      url: '/single/:contactId',
      controller: 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;