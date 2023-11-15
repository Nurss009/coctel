const row = document.querySelector('.row')


const handleGetCountries = ()=> {
fetch(`https://www.thecocktaildb.com/api/json/v2/1/popular.php`)
    .then(res => res.json())
    .then(data => {
            data.drinks.forEach(drink => {
                row.innerHTML += `
        <div class = "col-4"> 
            <div class="card">
                <img src="${drink.strDrinkThumb}" alt="">
               <p>${drink.strDrink}</p> 
               <p>${drink.strAlcoholic}</p> 
            </div>
        </div>
        `
            })
        })
}


handleGetCountries ()