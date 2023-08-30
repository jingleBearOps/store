
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{       
    [ApiController]
    [Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {   
        private readonly StoreContext context;
        public ProductsController(StoreContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public ActionResult<List<Product>> GetProduct(){
            var products = context.Products.ToList();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            return context.Products.Find(id);
        }
    }
}