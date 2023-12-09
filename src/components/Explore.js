import React from 'react';
import { Link } from 'react-router-dom';

export function Explore(props) {
    const coffeeTypes = props.coffeeTypes;
    const temperature = props.temperature;
    const milkTypes = props.milkTypes;

    const optionCoffeeArray = coffeeTypes.map((coffeeType) => {
        const transformed = <option key={coffeeType.value} value={coffeeType.value}>{coffeeType.type}</option>;
        return transformed;
    })

    const optionTempArray = temperature.map((temp) => {
        const transformed = <option key={temp.value} value={temp.value}>{temp.temp}</option>;
        return transformed;
    })

    const optionMilkArray = milkTypes.map((milkType) => {
        const transformed = <option key={milkType.value} value={milkType.value}>{milkType.type}</option>;
        return transformed;
    })

    return (
        <main>
            <h1 className="otherHeader">Explore New Drinks</h1>

            <div className="filter">
                <div className="filter-container">

                    <div className="filtering">
                        <label htmlFor="coffee-type">Type of Coffee</label>
                        <select id="coffee-type" name="coffeetype">
                            {optionCoffeeArray}
                        </select>
                    </div>

                    <div className="filtering">
                        <label htmlFor="temperature">Temperature</label>
                        <select id="temperature" name="temperature">
                            {optionTempArray}
                        </select>
                    </div>

                    <div className="filtering">
                        <label htmlFor="milk-type">Type of Milk</label>
                        <select id="milk-type" name="milktype">
                            {optionMilkArray}
                        </select>
                    </div>

                    <div className="filtering">
                        <label htmlFor="syrup" className="explanation">Syrup</label>
                        <input id="syrup" type="text" />
                    </div>

                    <div className="filtering">
                        <button className="primary-button">Apply Filter</button>
                    </div>

                </div>
            </div>

            <AllCards drinks={props.drinks} />

        </main>
    );
}

export function Card(props) {
    const ingredients = props.ingredients;

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
                    <p>{ingredients.milkVolume} of {ingredients.milkType}</p>
                    <p>{ingredients.sweetnessLevel}</p>
                    <p>{ingredients.drinkVolume}</p>
                    <p>{ingredients.syrupType} syrup</p>
                </div>

                <div className="sectionTracker">
                    <h3 className="h3tracker">Tags</h3>
                    <span className="tag">{ingredients.temperature}</span>
                    <span className="tag">{ingredients.tagMilkType}</span>
                    <span className="tag">{ingredients.syrupType}</span>
                </div>
            </div>

            <div className="buttons">
                <button className="primary-button">Add Drink</button>
                <button className="favbutton">
                    <img className="favicon" src="/img/starv4x.png" alt="star icon" />
                </button>
            </div>
        </div>
    );
}

function AllCards(props) {
    const drinkArray = props.drinks.map((eachDrink) => {
        const aDrink = <Card key={eachDrink.drinkName} drink={eachDrink.drinkName} ingredients={eachDrink.ingredients} />
        return aDrink;
    })

    return (
        <div className="allCards">
            {drinkArray}
        </div>
    );
}