describe("General test suite for Shopping cart class",function(){
	"use strict"
	const app = require("../apps/OOPimplementation.js")
	describe("testcase for adding items to the cart",function(){
		it("should return an object of itemname and quantity pairs",function(){
			let efosa = new ShoppingCart()
			let items = efosa.addItemsToTheCart(3,50,"barbecue")
			expect(items).toBe({"barbecue" : 3})
		})
	})
})
