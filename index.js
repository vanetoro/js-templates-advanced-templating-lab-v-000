function init() {
  //put any page initialization/handlebars initialization here
  var source = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(source)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})

  // template()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){

  // var ingredients =

  var recipe = {name: $('#name').val(), description: $(`description`).val()}
  var postHTML = template(recipe)

  $('#main').append(postHTML)
}


// Handlebars.registerPartial('recipePartial'.document.getElementById('recipeDetailsPartial').innerHTML)
