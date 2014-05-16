ngBlog.controller('pageController', ['$scope', 'Contentful', 'MarkdownConverter','HOMEPAGEID', 'BLOGDOCTYPEID', function ($scope, Contentful, MarkdownConverter, HOMEPAGEID, BLOGDOCTYPEID) {

    Contentful.entry(HOMEPAGEID).then(function(data) {
        $scope.content = data.fields;
        $scope.$apply();
    });

    Contentful.entries({ 'content_type': BLOGDOCTYPEID }).then(function (data) {
        var length = data.length - 1;
        var fields = data[length].fields;
        $scope.title = fields.title;
        $scope.date = fields.date;
        $scope.post = MarkdownConverter.makeHtml(fields.post); //Contentful returns markdown, so need to convert
        $scope.$apply();
    });

}]);