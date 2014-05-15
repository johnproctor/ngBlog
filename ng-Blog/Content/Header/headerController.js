ngBlog.controller('headerController', ['$scope', 'Blog', function ($scope, Blog) {

    $scope.model = Blog.get();

}]);