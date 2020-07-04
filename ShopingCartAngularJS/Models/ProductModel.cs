using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TypeLite;

namespace ShopingCartAngularJS.Models
{

    [TsClass]
    public class ProductModel
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public Guid Id { get; set; }
    }
}