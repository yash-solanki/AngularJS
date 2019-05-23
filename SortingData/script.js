let app = angular
            .module('myModule',[])
            .directive('markdown', function() {
                var converter = new Showdown.converter();
                return {
                    restrict: 'E',
                    link: function(scope, element, attrs) {
                        var htmlText = converter.makeHtml(element.text());
                        element.html(htmlText);
                    }
                }
            })
            .controller('myController', function($scope , $http) {

                // let jsonData = [];
                $http.get("https://jsonplaceholder.typicode.com/todos")
                    .then(function(response) {
                    jsonData = response.data;
                    console.log($scope.jsonData);
                });
                setTimeout(()=> {
                    $scope.jsonData=jsonData;
                },1000);
                // $scope.jsonData=jsonData;
                let employees = [
                    {
                        name: 'Yash',
                        dateOfBirth: new Date('August 2,1998'),
                        gender: 'Male',
                        salary: 60000
                    },
                    {
                        name: 'Abhay',
                        dateOfBirth: new Date('Jun 25,1992'),
                        gender: 'Male',
                        salary: 70000
                    },
                    {
                        name: 'Tirth',
                        dateOfBirth: new Date('July 4,1998'),
                        gender: 'Male',
                        salary: 30000
                    },
                    {
                        name: 'Arkisha',
                        dateOfBirth: new Date('May 24,1998'),
                        gender: 'Female',
                        salary: 45000
                    },
                ];
                $scope.employees = employees;
                $scope.sortColumn = 'name';
                $scope.reverseSort = false;

               //  $scope.jsonData = jsonData;

                $scope.sortData = function (column) {
                    $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false
                    $scope.sortColumn = column;  
                }

                $scope.getSortClass = function(column) {
                    if($scope.sortColumn == column) {
                        return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
                    }
                    return '';
                } 
            }
            // .directive('markDown', function() {
            //     let converter = new Showdown.converter();
            //     return {
            //         restrict : 'E',
            //         link: function(scope, element, attrs) {
            //             let htmlText = converter.makeHtml(element.text());
            //             element.html(htmlText);
            //         }
            //     }
            // })
        );