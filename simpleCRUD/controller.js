let app = angular.module("mainApp",[]);

app.controller("CRUDController", function($scope) {

    $scope.EmpList = [];

    $scope.AddData = function() {

        let emp = {
        Id : $scope.EmpList.length + 1,
        Name : $scope.name,
        Salary : $scope.salary
        };

        $scope.EmpList.push(emp);
        console.log($scope.EmpList);
        ClearModel();
    };

    $scope.DeleteData = function(emp) {

        let index = $scope.EmpList.indexOf(emp);

        $scope.EmpList.splice(index, 1);

    };

    $scope.BindSelectedData = function(emp) {

        $scope.Id = emp.Id;
        $scope.name = emp.Name;
        $scope.salary = emp.Salary;

    };

    $scope.UpdateData = function() {

        $.grep($scope.EmpList, function(e) {

            if(e.Id == $scope.Id) {
                e.Name = $scope.name;
                e.Salary = $scope.salary;
            }

        });

    };

    function ClearModel() {
        $scope.Id = 0;
        $scope.name = '';
        $scope.salary = 0;
    }

});