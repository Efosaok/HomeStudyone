class ShoppingCart{
  constructor(){
    this.total = 0;
    this.items = {};
    this.balance = 0;
    this.discount = 0;
  }
  
  addItemsToTheCart(quantity,price,nameOfItem){
    this.total += quantity * price;
    this.items[nameOfItem] = quantity;
  }
  
  removeItemsFromTheCart(quantity,price,nameOfItem){
    if (quantity >= this.items[nameOfItem]){
      this.total -= this.items[nameOfItem]* price;
      delete this.items[nameOfItem];
    }
    this.total -=quantity*price;
    this.items -= this.items[nameOfItem]* price;
  }
  
  checkOutWithYourCart(amountPaid){
    if(amountPaid < this.total){
      return "You have not paid enough";
    }
    this.balance += amountPaid - this.total;
    return this.balance
  }
  
  canAddMoreToYourCart(){
    if (this.total < 100){
      return "Sorry You cannot qualify for our add-more freebies to cart worth $5,spend up to $100 to qualify";
    }
    this.discount += 5;
    return "Hurray,You can add more stuffs worth $5 to your cart";
  }
  
  addItemsToTheCartWithDiscount(quantity,price,nameOfItem){
    if (this.discount < 1){
      return "Sorry you cannot use this service right now,check if you can and be granted your discount by running canAddMoreToYourCart() ";
    }
    else if(this.discount < (quantity*price)){
      return "You have exceeded your discount purchasing limit"
    }
    this.discount -= quantity * price;
    this.items[nameOfItem] = quantity;
  }
}


class ShoppingBag extends ShoppingCart{
  canAddMoreToYourCart(){
    if (this.total < 75){
      return "Sorry You cannot qualify for our add-more freebies to cart worth $5,spend up to $100 to qualify";
    }
    this.discount += 3;
    return "Hurray,You can add more stuffs worth $5 to your cart";
  }
}