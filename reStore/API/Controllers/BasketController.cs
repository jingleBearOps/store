using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Route("[controller]")]
    public class BasketController : Controller
    {
        private readonly StoreContext _context;

        public BasketController( StoreContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            var basket  = await _context.Baskets
                .Include(i => i.Items)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync( x => x.BuyerId == Request.Cookies["buyerId"]);
            if (basket == null) return NotFound();
            return basket;
        }
        [HttpPost]
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            //get basket
            //create basket
            //get product
            //add item
            //save changes
            return StatusCode(201);
        }
        [HttpDelete]
        public async Task<ActionResult> removeBasketItem(int productId, int quantity)
        {
            //get basket
            //remove item or reduce quantity
            //save changes
            return Ok();
        }
    }
}