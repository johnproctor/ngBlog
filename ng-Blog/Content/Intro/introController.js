ngBlog.controller('introController', ['$scope', 'Contentful', function ($scope, Contentful) {


    Contentful.entry('27D44QVk00c0skioK8QqgI').then(function(data) {
        $scope.model = data;
    });


}]);