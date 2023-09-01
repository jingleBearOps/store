using Microsoft.AspNetCore.Http.Features;

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }

        public string BuyerId {get; set; }
        public List<BasketItem> Items{get; set; } = new List<BasketItem>();
        public void AddItem(Product product, int quantity)
        {
            if (Items.All(item => item.ProductId != product.Id))//find the item
            {
                Items.Add(new BasketItem{Product = product, Quantity = quantity});
            }
            var existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);
            if (existingItem != null) existingItem.Quantity = existingItem.Quantity += quantity;// add the quantity of the goods
        }
         public void RemoveItem(int productId, int quantity){
            var item = Items.FirstOrDefault(item => item.ProductId == productId);
            if (item == null) return;
            item.Quantity -= quantity;
        if (item.Quantity == 0) Items.Remove(item);
         }
    }
}