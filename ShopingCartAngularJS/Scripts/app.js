var angularApp = angular.module('angularApp', []);
angularApp.controller('indexCtrl', function ($scope, $http) {
    $scope.message = "Hola, gracias por venir a mi página";
    $scope.saludo = "Hola";
    $scope.saludarNombre = function () {
        alert("Hola Rolando");
    };
    $scope.sumar = function () {
        alert("La suma es:" + ($scope.numero1 + $scope.numero2));
    };
});
angularApp.controller('shopingCartCtrl', function ($scope, $http) {
    //----------------------------FUNCIONES
    $scope.mensajeBinvenida = "Gracias por usar el carrito de compras";
    $scope.shopingCart = [];
    $scope.getAllProducts = function () {
        //peticion Ajax al servidor o al backend (C#)
        // Controlador/Funcion
        // Products/GetAllProducs
        $http({
            method: 'GET',
            url: '../Products/GetAllProducts',
            params: {}
        }).
            then(function (response) {
            // Esto es lo que me responde mi servidor o lo que me regresa C#
            debugger;
            $scope.items = response.data;
        });
    };
    $scope.addProduct = function () {
        var newProdctCart = {};
        newProdctCart.Name = $scope.selectedItem.Name;
        newProdctCart.Price = $scope.selectedItem.Price;
        newProdctCart.Quantity = 1;
        $scope.shopingCart.push(newProdctCart);
    };
    //https://www.tutsmake.com/javascript-sum-array-object-values-examples/
    $scope.getTotal = function () {
        var sum = $scope.shopingCart.reduce(function (total, currentValue) {
            return total + (currentValue.Quantity * currentValue.Price);
        }, 0);
        return sum;
    };
    $scope.save = function () {
        $http({
            method: 'POST',
            url: '../Products/SaveCart',
            data: {
                shopingCart: $scope.shopingCart,
            }
        }).
            then(function (response) {
            alert("Compra realizada");
            $scope.shopingCart = [];
        });
    };
    //-----------------------------Llamada de funciones cuando se carga la pagina
    $scope.getAllProducts();
});
//# sourceMappingURL=app.js.map