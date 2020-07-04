
 
 

 

/// <reference path="Enums.ts" />

declare namespace ShopingCartAngularJS.Models {
	interface ProductModel {
		Id: System.Guid;
		Name: string;
		Price: number;
	}
	interface ShopingCartModel {
		Name: string;
		Price: number;
		Quantity: number;
	}
	interface TestModel {
		MyProperty: number;
		MyProperty2: number;
	}
}
declare namespace System {
	interface Guid {
	}
}


