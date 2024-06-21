// Function to fetch and handle category data
async function getCategoriesData() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Category Data:', data);
    } catch (error) {
        console.error('Something went wrong:', error);
    }
}

// Function to fetch and handle ingredient data
async function getIngredientData() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Ingredient Data:', data);
    } catch (error) {
        console.error('Something went wrong:', error);
    }
}

// Adding event listeners to the buttons
document.getElementById('get-category-data').addEventListener('click', getCategoriesData);
document.getElementById('get-ingredient-data').addEventListener('click', getIngredientData);
