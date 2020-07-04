using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TypeLite;

namespace ShopingCartAngularJS.Models
{
    [TsClass]
    public class ShopingCartModel
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}