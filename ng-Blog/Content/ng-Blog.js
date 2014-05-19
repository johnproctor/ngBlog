var ngBlog = angular.module('ngBlog', ['ngResource', 'ngRoute', 'ngSanitize']);

ngBlog.constant('ACCESSTOKEN', 'yourToken');
ngBlog.constant('SPACE', 'yourSpace');

//Setup Page and DocType IDs as constants to remove magic strings
ngBlog.constant('HOMEPAGEID', 'pageId');
ngBlog.constant('BLOGDOCTYPEID', 'docTypeId');

//Create wrappers for 3rd party libs to inject via angular
ngBlog.factory('contentfulService', function() {
    return contentful;
});
ngBlog.factory('_', function () {
    return _;
});
ngBlog.factory('MarkdownConverter', function () {
    return new Markdown.Converter();
});

//Factory that creates a new client using contentful
ngBlog.factory('Contentful', ['contentfulService', 'ACCESSTOKEN', 'SPACE', function (contentfulService, ACCESSTOKEN, SPACE) {
        return new contentfulService.createClient({
            accessToken: ACCESSTOKEN,
            space: SPACE
        });
    }
]);

//Configure routing
ngBlog.config(['$routeProvider',  '$locationProvider',
  function ($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', {
            controller: 'pageController'
        }).
        when('/blogs', {
              templateUrl: 'Content/Blog/blogTemplate.html',
              controller: 'blogController'
          }).
        when('/contact', {
            templateUrl: 'Content/Contact/contactTemplate.html',
            controller: 'contactController'
        }).
        otherwise({
            redirectTo: '/'
        });

      $locationProvider.html5Mode(true);

  }]);