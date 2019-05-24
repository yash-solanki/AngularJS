let app = angular.module('Demo',['ngRoute'])
                .config(function($routeProvider) {
                    $routeProvider
                        .when("/home", {
                            template: `
                                        <h1>{{message}}</h1>

                                        <div>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a provident nisi dolorum fugit ipsum quibusdam dolor consequatur, qui fugiat, sapiente dicta temporibus nesciunt amet error! Assumenda dignissimos iste eligendi?
                                        </div>
                                        <ul>
                                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, amet at! Esse mollitia voluptates assumenda beatae vel doloribus voluptate tempore adipisci aut, obcaecati, pariatur expedita. Delectus fugit placeat aliquid natus?</li>
                                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, amet at! Esse mollitia voluptates assumenda beatae vel doloribus voluptate tempore adipisci aut, obcaecati, pariatur expedita. Delectus fugit placeat aliquid natus?</li>
                                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, amet at! Esse mollitia voluptates assumenda beatae vel doloribus voluptate tempore adipisci aut, obcaecati, pariatur expedita. Delectus fugit placeat aliquid natus?</li>
                                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, amet at! Esse mollitia voluptates assumenda beatae vel doloribus voluptate tempore adipisci aut, obcaecati, pariatur expedita. Delectus fugit placeat aliquid natus?</li>
                                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, amet at! Esse mollitia voluptates assumenda beatae vel doloribus voluptate tempore adipisci aut, obcaecati, pariatur expedita. Delectus fugit placeat aliquid natus?</li>
                                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, amet at! Esse mollitia voluptates assumenda beatae vel doloribus voluptate tempore adipisci aut, obcaecati, pariatur expedita. Delectus fugit placeat aliquid natus?</li>
                                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, amet at! Esse mollitia voluptates assumenda beatae vel doloribus voluptate tempore adipisci aut, obcaecati, pariatur expedita. Delectus fugit placeat aliquid natus?</li>
                                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, amet at! Esse mollitia voluptates assumenda beatae vel doloribus voluptate tempore adipisci aut, obcaecati, pariatur expedita. Delectus fugit placeat aliquid natus?</li>
                                        </ul>
                                    `,
                            templateUrl: "Templates/home.html",
                            controller: "homeController"
                        })
                        .when("/courses", {
                            template: `
                                        <h1>Courses We Offer</h1>
                                        <ul>
                                            <li ng-repeat="course in courses">
                                                {{course}}
                                            </li>
                                        </ul>
                                    `,
                            templateUrl: "../Templates/courses.html",
                            controller: "coursesController"
                        })
                        .when("/students", {
                            template: `
                                        <h1>
                                        List Of Students
                                    </h1>
                                    <ul>
                                        <li ng-repeat="student in students">
                                            {{student.toUpperCase()}}
                                        </li>
                                    </ul>
                                    `,
                            templateUrl: "../Templates/students.html",
                            controller: "studentsController"
                        })
                        .otherwise({
                            redirectTo: "/home"
                        })
                })
                .controller("homeController", function($scope) {
                    $scope.message = "Home Page"
                })
                .controller("coursesController", function($scope) {
                    $scope.courses = [
                                        'JavaScript',
                                        'NodeJS',
                                        'Angulr',
                                        'GO',
                                        'React',
                                        'Python'
                                    ];
                })
                .controller("studentsController", function($scope) {
                    $scope.students = [
                                        'yash',
                                        'abhay',
                                        'tirth',
                                        'aniket',
                                        'prem',
                                        'ronak',
                                        'vijay',
                                        'rishi',
                                        'hardik',
                                        'rutvik',
                                        'mayank'
                                    ]
                })