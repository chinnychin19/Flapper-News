angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];

  $scope.addPost = function(){
    // Don't allow submission with a blank title
    if(!$scope.title || $scope.title === '') { return; }

    $scope.posts.push({title: $scope.title, upvotes: 0});
    $scope.title = ''; // reset $scope.tile to empty string after the post has been made
  };

}]);
