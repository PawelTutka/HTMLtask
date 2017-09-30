var app = angular.module("voteApp", []);

app.controller("MainCtrl", function ($scope) {
    $scope.upVote = function () {
        $scope.vote++;
    }

    $scope.downVote = function () {
        $scope.vote--;
    }

    $scope.vote = 0;
});
