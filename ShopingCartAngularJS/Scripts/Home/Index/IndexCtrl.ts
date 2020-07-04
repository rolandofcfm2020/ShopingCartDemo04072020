var angularApp = angular.module('angularApp', []);

interface ScopeIndex extends ng.IScope {
    message: string;
    saludo: string;
    saludarNombre();
    numero1: number;
    numero2: number;
    sumar();
}
angularApp.controller('indexCtrl', function ($scope: ScopeIndex, $http: ng.IHttpService) {

    $scope.message = "Hola, gracias por venir jejex";
    $scope.saludo = "Hola jeje";

    $scope.saludarNombre = function () {
        alert("Hola Rolando");
    }

    $scope.sumar = function () {
        alert("La suma es:" + ($scope.numero1 + $scope.numero2));
    }

});
