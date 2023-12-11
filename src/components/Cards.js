import { updateEmail } from 'firebase/auth';
import React from 'react';

export function Card(props) {
    const ingredients = props.ingredients;
    const quizFilter = props.quizAnswers;
    const exploreFilters = props.exploreFilters;
    console.log(exploreFilters);

    const ingredientsTemperature = ingredients.temperature;
    const lowercaseIngredientsTemperature = ingredientsTemperature.toLowerCase();
    const ingredientsSyrupType = ingredients.syrupType;
    const lowercaseIngredientsSyrupType = ingredientsSyrupType.toLowerCase();
    console.log(ingredients);
    // const exploreSyrupType = exploreFilters.syrupType;
    // const lowercaseExploreSyrupType = exploreSyrupType.toLowerCase();


    // ingredients.coffeeType === exploreFilters.coffeeType ||
    //     ingredients.milktype === exploreFilters.milkType ||
    //     lowercaseIngredientsTemperature === exploreFilters.temperature ||
    //     lowercaseIngredientsSyrupType === lowercaseExploreSyrupType

    // explore page filtering
    // if (ingredients.coffeeType === exploreFilters.coffeeType ||
    //     ingredients.milktype === exploreFilters.milkType ||
    //     lowercaseIngredientsTemperature === exploreFilters.temperature ||
    //     lowercaseIngredientsSyrupType === lowercaseExploreSyrupType) {
    //     return (
    //         <div className="card">
    //             <div>
    //                 <div className="user-attribute">
    //                     <img src="/img/profile-picture.jpg" alt="avatar" className="avatar" />
    //                     <p className="avatarUsername">@athenalovescoffee</p>
    //                 </div>

    //                 <div>
    //                     <img className="coffeeimg" src="/img/dairyfreemocha.jpg" alt="coffee with ice" />
    //                     <h2>{props.drink}</h2>
    //                     <p>Short description of the drink</p>
    //                 </div>

    //                 <div className="sectionTracker">
    //                     <h3>Ingredients</h3>
    //                     <p>{ingredients.numShots} shots of a {ingredients.coffeeType}</p>
    //                     <p>{ingredients.milkVolume} of {ingredients.milkType} milk</p>
    //                     <p>{ingredients.sweetnessLevel}</p>
    //                     <p>{ingredients.drinkVolume}</p>
    //                     <p>{ingredients.syrupType} syrup</p>
    //                 </div>

    //                 <div className="sectionTracker">
    //                     <h3 className="h3tracker">Tags</h3>
    //                     <span className="tag">{ingredients.temperature}</span>
    //                     <span className="tag">{ingredients.tagMilkType} Milk</span>
    //                     <span className="tag">{ingredients.syrupType}</span>
    //                 </div>
    //             </div>

    //             <div className="buttons">
    //                 <button className="primary-button">Add Drink</button>
    //                 <button className="favbutton">
    //                     <img className="favicon" src="/img/starv4x.png" alt="star icon" />
    //                 </button>
    //             </div>
    //         </div>
    //     );
    // }

    // quiz results based off preference filtering
    // const quizCoffeeType = quizFilter.coffeeType;
    // const lowercaseQuizCoffeeType = quizCoffeeType.toLowerCase();

    // if (ingredients.coffeeType === lowercaseQuizCoffeeType || 
    //     ingredients.tagMilkType === quizFilter.milkType || 
    //     ingredients.temperature === quizFilter.temperature || 
    //     ingredients.sweetnessLevel === quizFilter.sweetness) {
    //         return (
    //             <div className="card">
    //                 <div>
    //                     <div className="user-attribute">
    //                         <img src="/img/profile-picture.jpg" alt="avatar" className="avatar" />
    //                         <p className="avatarUsername">@athenalovescoffee</p>
    //                     </div>

    //                     <div>
    //                         <img className="coffeeimg" src="/img/dairyfreemocha.jpg" alt="coffee with ice" />
    //                         <h2>{props.drink}</h2>
    //                         <p>Short description of the drink</p>
    //                     </div>

    //                     <div className="sectionTracker">
    //                         <h3>Ingredients</h3>
    //                         <p>{ingredients.numShots} shots of a {ingredients.coffeeType}</p>
    //                         <p>{ingredients.milkVolume} of {ingredients.milkType} milk</p>
    //                         <p>{ingredients.sweetnessLevel}</p>
    //                         <p>{ingredients.drinkVolume}</p>
    //                         <p>{ingredients.syrupType} syrup</p>
    //                     </div>

    //                     <div className="sectionTracker">
    //                         <h3 className="h3tracker">Tags</h3>
    //                         <span className="tag">{ingredients.temperature}</span>
    //                         <span className="tag">{ingredients.tagMilkType} Milk</span>
    //                         <span className="tag">{ingredients.syrupType}</span>
    //                     </div>
    //                 </div>

    //                 <div className="buttons">
    //                     <button className="primary-button">Add Drink</button>
    //                     <button className="favbutton">
    //                         <img className="favicon" src="/img/starv4x.png" alt="star icon" />
    //                     </button>
    //                 </div>
    //             </div>
    //         );
    // }
}

export function AllCards(props) {
    const cardDrinkArray = props.drinks.map((eachDrink) => {
        const aDrink = <Card key={eachDrink.drinkName} drink={eachDrink.drinkName} ingredients={eachDrink.ingredients} quizAnswers={props.quizAnswers} exploreFilters={props.exploreFilters} />
        return aDrink;
    })

    return (
        <div className="allCards">
            {cardDrinkArray}
        </div>
    );
}