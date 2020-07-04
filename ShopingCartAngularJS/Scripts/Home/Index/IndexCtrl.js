var angularApp = angular.module('angularApp', []);
angularApp.controller('indexCtrl', function ($scope, $http) {
    $scope.message = "Hola, gracias por venir jejex";
    $scope.saludo = "Hola jeje";
    $scope.saludarNombre = function () {
        alert("Hola Rolando");
    };
    $scope.sumar = function () {
        alert("La suma es:" + ($scope.numero1 + $scope.numero2));
    };
});
//# sourceMappingURL=IndexCtrl.js.map