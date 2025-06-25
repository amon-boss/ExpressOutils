
function searchRecipes() {
  const input = document.getElementById('ingredientInput').value.trim().toLowerCase();
  const ingredients = input.split(',')[0]; // TheMealDB ne supporte qu'1 ingrédient
  const recipesDiv = document.getElementById('recipes');
  recipesDiv.innerHTML = '⏳ Chargement...';

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=\${ingredients}`)
    .then(res => res.json())
    .then(data => {
      if (!data.meals) {
        recipesDiv.innerHTML = '<p>Aucune recette trouvée.</p>';
        return;
      }

      recipesDiv.innerHTML = '';
      data.meals.slice(0, 6).forEach(meal => {
        const div = document.createElement('div');
        div.className = 'recipe-item';
        div.innerHTML = \`
          <h3>\${meal.strMeal}</h3>
          <img src="\${meal.strMealThumb}" alt="\${meal.strMeal}" />
          <a href="https://www.themealdb.com/meal/\${meal.idMeal}" target="_blank">Voir la recette</a>
        \`;
        recipesDiv.appendChild(div);
      });
    })
    .catch(err => {
      recipesDiv.innerHTML = '<p>Erreur lors de la recherche.</p>';
    });
}
