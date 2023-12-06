import React from 'react';
import { Link } from 'react-router-dom';

const coffeeTypes = [
    {value: "espresso", type: "Espresso"},
    {value: "macchiato", type: "Macchiato"},
    {value: "cappucino", type: "Cappucino"},
    {value: "mocha", type: "Mocha"},
    {value: "flat-white", type: "Flat White"},
    {value: "americano", type: "Americano"},
    {value: "latte", type: "Latte"},
    {value: "custom", type: "Custom"}
];

const temperature = [
    {value: "hot", temp: "Hot"},
    {value: "cold", temp: "Cold"}
]

const milkTypes = [
    {value: "whole", type: "Whole"},
    {value: "soy", type: "Soy"},
    {value: "hazelnut", type: "Hazelnut"},
    {value: "almond", type: "Almond"},
    {value: "coconut", type: "Coconut"},
    {value: "oat", type: "Oat"},
    {value: "goat", type: "Goat"},
    {value: "skimmed", type: "Skimmed"},
    {value: "none", type: "None"}

]

export function Tracker2(props) {

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
                        <label id="coffeeType" htmlFor="filtering">Type of Coffee</label>
                        <select name="coffeetype">
                            {optionCoffeeArray}
                        </select>
                    </div>

                    <div className="filtering">
                        <label id="temperature" htmlFor="filtering">Temperature</label>
                        <select id="temperature" name="temperature">
                            {optionTempArray}
                        </select>
                    </div>

                    <div className="filtering">
                        <label id="milktype" htmlFor="filtering">Type of Milk</label>
                        <select id="milktype" name="milktype">
                            {optionMilkArray}
                        </select>
                    </div>

                    <div className="filtering">
                        <label className="explanation">Syrup</label>
                        <input type="text" />
                    </div>

                    <div className="filtering">
                        <button className="primary-button">Apply Filter</button>
                    </div>

                </div>
            </div>

            <AllCards />

        </main>
    );
}

export function Card(props) {
    return (
        <div className="card">
            <div>
                <div className="user-attribute">
                    <img src="/img/profile-picture.jpg" alt="avatar" className="avatar" />
                    <Link to="#" className="avatarUsername">@athenalovescoffee</Link>
                </div>

                <div>
                    <img className="coffeeimg" src="/img/dairyfreemocha.jpg" alt="coffee with ice" />
                    <h2>Coffee Drink</h2>
                    <p>Short description of the drink</p>
                </div>

                <div className="sectionTracker">
                    <h3>Ingredients</h3>
                    <p>[#] shots of [coffee type, e.g. espresso]</p>
                    <p>[ounce] of [milk type]</p>
                    <p>sweetness level</p>
                    <p>volume</p>
                    <p>[type of syrup] syrup</p>
                </div>

                <div className="sectionTracker">
                    <h3 className="h3tracker">Tags</h3>
                    <span className="tag">Temperature</span>
                    <span className="tag">Milk</span>
                    <span className="tag">Syrup</span>
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
    return (
        <div className="allCards">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}