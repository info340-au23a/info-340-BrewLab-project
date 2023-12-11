import { updateEmail } from 'firebase/auth';
import { getDatabase, ref, push, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import React from 'react';

export function Card(props) {
    const ingredients = props.ingredients;
    const quizFilter = props.quizAnswers;
    const exploreFilters = props.exploreFilters;
    const currentPage = props.pageResult;


    // add drink: tasted drink
    const addDrink = async (drink) => {
        const db = getDatabase();
        const drinksRef = ref(db, 'tasted drink');

        // get drink image
        const storage = getStorage();
        const fetchURL = async () => {
            const images = await Promise.all(drinksRef.map((drink) => getDownloadURL(storageRef(storage, drink.id))));

            drinksRef((drinks) => drinks.map((drink, idx) => ({
                ...drink,
                selectedImage: images[idx]
            })));
        }

        try {
            const newDrinkRef = push(drinksRef);

            const storage = getStorage();

            await set(newDrinkRef, drink);
        
        }catch (error) {
            console.error('Error saving drink data to Firebase:', error);
        }
    };

    // star button: save drink for future use
    const savedDrink = async (drink) => {
        const db = getDatabase();
        const drinksRef = ref(db, 'saved drink');

        try {
            const newDrinkRef = push(drinksRef);

            const storage = getStorage();

            await set(newDrinkRef, drink);
        
        }catch (error) {
            console.error('Error saving drink data to Firebase:', error);
        }
    };

    // explore page filtering
    if (currentPage === "explore") {
        const ingredientsTemperature = ingredients.temperature.toLowerCase();
        const ingredientsSyrupType = ingredients.syrupType.toLowerCase();

        if (ingredients.coffeeType === exploreFilters.coffeeType ||
            ingredients.milkType === exploreFilters.milkType ||
            ingredientsTemperature === exploreFilters.temperature ||
            ingredientsSyrupType === exploreFilters.syrupType) {
            return (
                <div className="card">
                    <div>
                        <div className="user-attribute">
                            <img src="/img/profile-picture.jpg" alt="avatar" className="avatar" />
                            <p className="avatarUsername">@athenalovescoffee</p>
                        </div>

                        <div>
                            <img className="coffeeimg" src="/img/dairyfreemocha.jpg" alt="coffee with ice" />
                            <h2>{props.drink}</h2>
                            <p>Short description of the drink</p>
                        </div>

                        <div className="sectionTracker">
                            <h3>Ingredients</h3>
                            <p>{ingredients.numShots} shots of a {ingredients.coffeeType}</p>
                            <p>{ingredients.milkVolume} of {ingredients.milkType} milk</p>
                            <p>{ingredients.sweetnessLevel}</p>
                            <p>{ingredients.drinkVolume}</p>
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
                            <img className="favicon" src="/img/starv4x.png" alt="star icon" />
                        </button>
                    </div>
                </div>
            );
        }
    } // quiz results based off preference filtering
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
                        <div className="user-attribute">
                            <img src="/img/profile-picture.jpg" alt="avatar" className="avatar" />
                            <p className="avatarUsername">@athenalovescoffee</p>
                        </div>

                        <div>
                            <img className="coffeeimg" src="/img/dairyfreemocha.jpg" alt="coffee with ice" />
                            <h2>{props.drink}</h2>
                            <p>Short description of the drink</p>
                        </div>

                        <div className="sectionTracker">
                            <h3>Ingredients</h3>
                            <p>{ingredients.numShots} shots of a {ingredients.coffeeType}</p>
                            <p>{ingredients.milkVolume} of {ingredients.milkType} milk</p>
                            <p>{ingredients.sweetnessLevel}</p>
                            <p>{ingredients.drinkVolume}</p>
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
                            <img className="favicon" src="/img/starv4x.png" alt="star icon" />
                        </button>
                    </div>
                </div>
            );
        }
    }
}

export function AllCards(props) {
    const cardDrinkArray = props.drinks.map((eachDrink) => {
        const aDrink = <Card key={eachDrink.drinkName} drink={eachDrink.drinkName} ingredients={eachDrink.ingredients} quizAnswers={props.quizAnswers} exploreFilters={props.exploreFilters} pageResult={props.pageResult} />
        return aDrink;
    })

    return (
        <div className="allCards">
            {cardDrinkArray}
        </div>
    );
}

