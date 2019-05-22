let app = angular
            .module('myModule',[])
            .controller('myController', function($scope) {
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
            });