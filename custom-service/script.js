
let app = angular
            .module("myModule", [])
            .controller("myController", function($scope, stringService) {
                $scope.transformString = function(input) {
                   
                    $scope.output = stringService.processString(input);
                }
            });