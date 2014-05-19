ngBlog.controller('blogController', ['$scope', '$routeParams', 'Contentful', ''BLOGDOCTYPEID'', function ($scope, $routeParams, Contentful, BLOGDOCTYPEID) {

    Contentful.entries({ 'content_type': BLOGDOCTYPEID }).then(function (data) {
        $scope.posts = data;
        $scope.$apply();
    });

}]);