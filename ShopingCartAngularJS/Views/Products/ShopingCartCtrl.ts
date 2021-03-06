﻿

interface ShopingCartScope extends ng.IScope {

    mensajeBinvenida: string;
    getAllProducts();
    items: ShopingCartAngularJS.Models.ProductModel[];
    selectedItem: ShopingCartAngularJS.Models.ProductModel;
    shopingCart: ShopingCartAngularJS.Models.ShopingCartModel[];
    addProduct();
    getTotal(): number;
    save();
}


angularApp.controller('shopingCartCtrl', function ($scope: ShopingCartScope, $http: ng.IHttpService) {
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
            params: {

            }
        }).
            then(function (response: any) {
                // Esto es lo que me responde mi servidor o lo que me regresa C#
                debugger;
                $scope.items = response.data;
            });


    }

    $scope.addProduct = function () {

        var newProdctCart = <ShopingCartAngularJS.Models.ShopingCartModel>{};
        newProdctCart.Name = $scope.selectedItem.Name;
        newProdctCart.Price = $scope.selectedItem.Price;
        newProdctCart.Quantity = 1;

        $scope.shopingCart.push(newProdctCart);
    }

    //https://www.tutsmake.com/javascript-sum-array-object-values-examples/
    $scope.getTotal = function () {
        var sum = $scope.shopingCart.reduce(function (total, currentValue) {
            return total + (currentValue.Quantity * currentValue.Price);
        }, 0);

        return sum;

    }

    $scope.save = function () {


        $http({
            method: 'POST',
            url: '../Products/SaveCart',
            data: {
                shopingCart: $scope.shopingCart,
            }
        }).
            then(function (response: any) {
                alert("Compra realizada");
                $scope.shopingCart = [];
            });
    }

    //-----------------------------Llamada de funciones cuando se carga la pagina
    $scope.getAllProducts();

});
