function chercherRecette() {
  const ingr = document.getElementById("ingredient").value.trim();
  const result = document.getElementById("resultatRecette");
  result.innerHTML = "⏳ Recherche en cours...";
  if (!ingr) {
    result.innerHTML = "❌ Entrez un ingrédient valide.";
    return;
  }

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingr}`)
    .then(res => res.json())
    .then(data => {
      if (data.meals) {
        const meal = data.meals[Math.floor(Math.random() * data.meals.length)];
        result.innerHTML = `
          <div class="recipe">
            <img src="${meal.strMealThumb}" alt="plat" />
            <h3>${meal.strMeal}</h3>
            <a href="https://www.themealdb.com/meal.php?c=${meal.idMeal}" target="_blank">Voir la recette complète</a>
          </div>
        `;
      } else {
        result.innerHTML = "😢 Aucune recette trouvée pour cet ingrédient.";
      }
    })
    .catch(() => {
      result.innerHTML = "⚠️ Erreur lors de la recherche.";
    });
}
