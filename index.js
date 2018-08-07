function init() {
  //put any page initialization/handlebars initialization here
  var source = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(source)
  // debugger
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})


}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){

  var recipe = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipe)
  var recipeName = document.getElementById('name').value
  var recipeDescrip = document.getElementById('description').value
  var ingredients = document.getElementsByName('ingredients')
  var ingredientsList = []
  for(var i = 0; i<ingredients.length; i++){
    if (ingredients[i].value !== ''){
   ingredientsList.push(ingredients[i].value)
 }
  }
  document.getElementsByTagName('main')[0].innerHTML = template({'name': recipeName, 'description': recipeDescrip, 'ingredients': ingredientsList})
}

function editRecipe() {

  var recipe = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipe)


  var name = document.getElementById('recipeName').innerHTML
  var description = document.getElementById("recDesc").innerHTML
  var ingredients = document.getElementsByClassName('ingred')
  var ingredientsList = []
  for(var i = 0; i<ingredients.length; i++){
   ingredientsList.push(ingredients[i].innerHTML)

 }
 debugger
 document.getElementsByTagName('main')[0].innerHTML = template({'name': name, 'description': description, 'ingredients': ingredientsList, 'submitAction': 'updateRecipe()'})
}

function updateRecipe(){
  createRecipe()
}




// Handlebars.registerPartial('recipePartial'.document.getElementById('recipeDetailsPartial').innerHTML)
