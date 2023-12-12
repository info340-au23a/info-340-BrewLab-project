import { updateEmail } from 'firebase/auth';
import { getDatabase, ref, push, set } from 'firebase/database';
import React from 'react';

export function Card(props) {
    const ingredients = props.ingredients;
    const quizFilter = props.quizAnswers;
    const exploreFilters = props.exploreFilters;
    const currentPage = props.pageResult;

    const userInfo = props.currentUser;

    // Define state to keep track of button click
    const [isStarred, setIsStarred] = React.useState(false);

    // add drink: tasted drink
    const addDrink = async (drink) => {
        const db = getDatabase();
        const drinksRef = ref(db, 'users/' + userInfo.userId + '/tasted drinks');

        try {
            const newDrinkRef = push(drinksRef);

            await set(newDrinkRef, drink);

        } catch (error) {
            console.error('Error saving drink data to Firebase:', error);
        }
    };

    // star button: save drink for future use
    const savedDrink = async (drink) => {
        const db = getDatabase();
        const drinksRef = ref(db, 'users/' + userInfo.userId + '/saved drinks');

        try {
            const newDrinkRef = push(drinksRef);
            
            if (isStarred) {
                setIsStarred(false);
            } else {
                await set(newDrinkRef, drink);
                setIsStarred(true);
            }
        } catch (error) {
            console.error('Error saving drink data to Firebase:', error);
        }
    };

    // explore page filtering
    if (currentPage === "explore") {
        const ingredientsCoffeeType = ingredients.coffeeType.toLowerCase();
        const ingredientsMilkType = ingredients.milkType.toLowerCase();
        const ingredientsTemperature = ingredients.temperature.toLowerCase();
        const ingredientsSyrupType = ingredients.syrupType.toLowerCase();

        
        if (ingredientsCoffeeType === exploreFilters.coffeeType ||
            ingredientsMilkType === exploreFilters.milkType ||
            ingredientsTemperature === exploreFilters.temperature ||
            ingredientsSyrupType === exploreFilters.syrupType) {
            return (
                <div className="card">
                    <div>
                        <div>
                            <img className="coffeeimg" src="/img/dairyfreemocha.jpg" alt="user's uploaded drink" />
                            <h2>{props.drink}</h2>
                            <p>Short description of the drink</p>
                        </div>

                        <div className="sectionTracker">
                            <h3>Ingredients</h3>
                            <p>{ingredients.numShots} shots of {ingredients.coffeeType}</p>
                            <p>{ingredients.milkVolume} of {ingredients.milkType} milk</p>
                            <p>{ingredients.sweetnessLevel}</p>
                            <p>{ingredients.syrupType} syrup</p>
                            <p>{ingredients.foamVolume} of foam</p>
                        </div>

                        <div className="sectionTracker">
                            <h3 className="h3tracker">Tags</h3>
                            <span className="tag">{ingredients.temperature}</span>
                            <span className="tag">{ingredients.tagMilkType} Milk</span>
                            <span className="tag">{ingredients.syrupType}</span>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className="primary-button" onClick={()=>addDrink(ingredients)}>Add Drink</button>
                        <button className={`favbutton ${isStarred ? 'active' : ''}`} onClick={() => savedDrink(ingredients)}>
                            <span className="material-icons"> star </span>
                        </button>
                    </div>
                </div>
            );
        } 
    }
    // quiz filtering
    else if (currentPage === "quiz") {
        const quizCoffeeType = quizFilter.coffeeType;
        const lowercaseQuizCoffeeType = quizCoffeeType.toLowerCase();

        if (ingredients.coffeeType === lowercaseQuizCoffeeType ||
            ingredients.tagMilkType === quizFilter.milkType ||
            ingredients.temperature === quizFilter.temperature ||
            ingredients.sweetnessLevel === quizFilter.sweetness) {
            return (
                <div className="card">
                    <div>
                        <div>
                            <img className="coffeeimg" src={props.drinkImg} alt="coffee with ice" />
                            <h2>{props.drink}</h2>
                            <p>{props.drinkDescript}</p>
                        </div>

                        <div className="sectionTracker">
                            <h3>Ingredients</h3>
                            <p>{ingredients.numShots} shots of {ingredients.coffeeType}</p>
                            <p>{ingredients.milkVolume} of {ingredients.milkType} milk</p>
                            <p>{ingredients.sweetnessLevel}</p>
                            <p>{ingredients.syrupType} syrup</p>
                        </div>

                        <div className="sectionTracker">
                            <h3 className="h3tracker">Tags</h3>
                            <span className="tag">{ingredients.temperature}</span>
                            <span className="tag">{ingredients.tagMilkType} Milk</span>
                            <span className="tag">{ingredients.syrupType}</span>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className="primary-button" onClick={()=>addDrink(ingredients)}>Add Drink</button>
                        <button className="favbutton" onClick={()=>savedDrink(ingredients)}>
                            <span className="material-icons"> star </span>
                        </button>
                    </div>
                </div>
            );
        }
    }
}

    export function AllCards(props) {
        const db = getDatabase();
        const drinksRef = ref(db, 'posted drinks');

        const cardDrinkArray = props.drinks.map((eachDrink, index) => {
            const aDrink = <Card currentUser={props.currentUser} key={index} drink={eachDrink.drinkName} drinkImg={eachDrink.drinkImg} drinkDescript={eachDrink.drinkDescription} ingredients={eachDrink.ingredients} quizAnswers={props.quizAnswers} exploreFilters={props.exploreFilters} pageResult={props.pageResult} />
            return aDrink;
        })

        return (
            <div className="allCards">
                {cardDrinkArray}
            </div>
        );
    }

