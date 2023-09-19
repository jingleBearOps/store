using API.Data;
using API.DTOs;
using API.Extensions;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class PaymentsController : BaseApiController
    {
        private readonly PaymentService _paymentService;
        private readonly StoreContext _context;
        public PaymentsController(PaymentService paymentService, StoreContext context)
        {
            _context = context;
            _paymentService = paymentService;
        }
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<BasketDto>> CreateOrUpdatePaymentIntent()
        {
            var basket = await _context.Baskets
                .RetrieveBasketWithItems(User.Identity.Name)
                .FirstOrDefaultAsync();

            if (basket == null) return NotFound();

            var intent = await _paymentService.CreateOrUpdatePaymentIntent(basket);

            if (intent == null) return BadRequest(new ProblemDetails{Title = "problem creating payment intent"});

            basket.PaymentIntentId ??= intent.Id;
            basket.ClientSecret ??= intent.ClientSecret;

            _context.Update(basket);

            //save the results to out database
            var result = await _context.SaveChangesAsync() > 0;
            if (!result) return BadRequest(new ProblemDetails{Title = "Problem updating basket with intent"});

            return basket.MapBasketToDto();// if successful would return a 200 ok response
        }


    }
}