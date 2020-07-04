using Newtonsoft.Json;
using ShopingCartAngularJS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShopingCartAngularJS.Controllers
{
    public class ProductsController : Controller
    {
        // GET: Products
        public ActionResult ShopingCart()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GetAllProducts()
        {
            DataAccess.ShopingCartProductsEntities DataBase = new DataAccess.ShopingCartProductsEntities();
            var listProductsFromDB = DataBase.Products
                .Select(productInDatabase => new ProductModel
                {
                    Name = productInDatabase.Name,
                    Id = productInDatabase.Id,
                    Price = productInDatabase.Price,
                }).ToList();

            return GetJsonNetResult(listProductsFromDB);
        }

        [HttpPost]
        public ActionResult SaveCart(List<ShopingCartModel> shopingCart)
        {
            //guardar en Base de datos
            return null;
        }
        public JsonNetResult GetJsonNetResult(object data)
        {
            JsonNetResult jsonNetResult = new JsonNetResult();
            jsonNetResult.Formatting = Formatting.Indented;
            jsonNetResult.Data = data;
            return jsonNetResult;

        }

        public object SerializeJSONData(object data)
        {
            var result = JsonConvert.SerializeObject(data, Newtonsoft.Json.Formatting.None,
            new Newtonsoft.Json.JsonSerializerSettings
            {
                StringEscapeHandling =
                Newtonsoft.Json.StringEscapeHandling.EscapeHtml
            });

            return result;
        }

    }
}