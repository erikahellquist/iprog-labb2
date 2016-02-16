var RecipeView = function (container, model) {
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishId = container.find("#dishId");
	this.dishName = container.find("#dishName")

	
	this.numberOfGuests.html(model.getNumberOfGuests);
	dishId = model.getSelectedDishId()
	this.dishId.html(dishId);
	
	dish  = model.getDish(dishId)
	
	this.dishName.html(dish.name)
	
	this.leftSide = container.find("#leftHalf")
	
	dishDisc = "<h1>" + dish.name + "</h1>"
	dishDisc = dishDisc + "<img src='images/" + dish.image + "'></img><br>"
	dishDisc = dishDisc + "<br>"
	dishDisc = dishDisc + dish.description
	dishDisc = dishDisc + "<br>"
	
	this.leftSide.html(dishDisc)
	
	this.rightSide = container.find("#rightHalf")
	
	dishDisc = "<h3> INGREDIENTS FOR " + model.getNumberOfGuests()+ " PEOPLE</h3>"
	dishDisc = dishDisc + "<hr>"
	totalpris = 0
	for(i = 0; i < dish.ingredients.length; i++)
	{
		dishDisc = dishDisc +"	" +  dish.ingredients[i].quantity
		dishDisc = dishDisc +"	" +  dish.ingredients[i].unit
		dishDisc = dishDisc +"	" +  dish.ingredients[i].name
		dishDisc = dishDisc +"	SEK " +  dish.ingredients[i].price * model.getNumberOfGuests()
		dishDisc = dishDisc + "<br>"
		totalpris = totalpris + dish.ingredients[i].price * model.getNumberOfGuests()
	}
	dishDisc = dishDisc + "<hr>"
	dishDisc = dishDisc + "              SEK : " + totalpris
	
	
	
	this.rightSide.html(dishDisc)
	
	
	
	
}
 
