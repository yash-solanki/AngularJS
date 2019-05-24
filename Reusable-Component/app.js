let myApp = angular.module("myApp",[]);

myApp.controller("myCtrl", function($scope) {
    $scope.message = "Hello World";
    $scope.students = [
        {
            id: '1',
            name: 'yash',
            rollno: '150280116127'
        },
        {
            id: '2',
            name: 'aniket',
            rollno: '150280116002'
        },
        {
            id: '3',
            name: 'prem',
            rollno: '150280116114'
        }
    ]
});

myApp.directive("studentDir", function() {
    return {
        restrict: 'E',
        // templateUrl: './studentTemp.html',
        template: `
        <p ng-bind="data.id"></p>
        <p ng-bind="data.name"></p>
        <p ng-bind="data.rollno"></p>
        <input type="button" value="Click Here" ng-click="showMessage(data.name)">
        <p>{{data2}}</p>
        `,
        scope: {
            data: '=',
            data2: '='
        },
        link: function(scope, elem, attrs) {
            scope.data.name = scope.data.name.toUpperCase();
            console.log(scope.data);

            scope.showMessage = function(name) {
                console.log('hi, this is :'+name);
            }
        }

    }
});