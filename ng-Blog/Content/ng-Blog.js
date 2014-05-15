var ngBlog = angular.module('ngBlog', ['ngResource', 'ngRoute']);

ngBlog.constant('APPURL', 'fullUrlAndToken');
ngBlog.constant('ACCESSTOKEN', 'token');
ngBlog.constant('SPACE', 'space');

//Wrapper for contentful api so we can inject it in ng
ngBlog.factory('contentfulService', function() {
    return contentful;
});

//Can do it via a resource and make the rest calls
ngBlog.factory('Blog', ['$resource', 'APPURL', function ($resource, APPURL) {
    return $resource(APPURL, {}, {
        list : {
            method: 'GET',
            cache : true
        }
    });
    }
]);

//Factory that creates a new client using contentful
ngBlog.factory('Contentful', ['contentfulService', 'ACCESSTOKEN', 'SPACE', function (contentfulService, ACCESSTOKEN, SPACE) {
        return new contentfulService.createClient({
            accessToken: ACCESSTOKEN,
            space: SPACE
        });
    }
]);