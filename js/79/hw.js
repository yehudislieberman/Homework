(async function () {
    'use strict';

    const Selector = $('#recipeSelector');
    const name = $('#recipeName');
    const recipeImage = $('#image');
    const displayIng = $('#ing');
    const ingredientList = $('#ingredients');

    try {
        const response = await fetch('menu.json');
        if (!response.ok) {
            throw new Error(`${response.status} ${response.text}`);
        }

        const recipes = await response.json();

        recipes.forEach(e => {
            Selector.append(`<option>${e.name}</option>`);
        });

        Selector.change(async function (e) {
            const response = await fetch(`${this.value}.json`);
            const chosenRecipe = await response.json();
            name.text(chosenRecipe.name)
            recipeImage.attr('src', chosenRecipe.picture)
            ingredientList.empty();
            displayIng.show()
            chosenRecipe.ingredients.forEach(e => {
                ingredientList.append(`<li> ${e}</li>`);
            })
        });
    } catch (error) {
        console.error('Error: ', error.message);
    }
}());