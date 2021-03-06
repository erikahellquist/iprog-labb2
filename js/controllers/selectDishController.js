//SelectDishController Object constructor
var SelectDishController = function(view, model, viewController) {
 	//

}

var GoToRecipeController = function(model, viewController, id) {

	var dish = "#goTo" + id;

	$(dish).click(function(){
		model.setSelectedDishId(id);
		viewController.showRecipeView(id);
	});
}

var DropdownController = function(model) {

	$("#selectList").click(function(){
		var choice = $('#selectList').val();

		$("#selectList select").val(choice);

		model.notifyObservers();
	});
}

var SearchFieldController = function(model) {

	$("#searchFieldButton").click(function(){
		var value = $('#searchField').val();

		$('#searchField').val(value);

		model.notifyObservers();
	});
}

