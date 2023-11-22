import React from 'react';

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

export function Explore(props) {

    const optionCoffeeArray = coffeeTypes.map((coffeeType) => {
        const transformed = <option key={coffeeType} value={coffeeType.value}>{coffeeType.type}</option>;
        return transformed;
    })

    const optionTempArray = temperature.map((temp) => {
        const transformed = <option key={temp} value={temp.value}>{temp.temp}</option>;
        return transformed;
    })

    const optionMilkArray = milkTypes.map((milkType) => {
        const transformed = <option key={milkType} value={milkType.value}>{milkType.type}</option>;
        return transformed;
    })

    return (
        <main>
            <h1 className="otherHeader">Explore New Drinks</h1>

            <div className="filter">
                <div className="filter-container">

                    <div className="filtering">
                        <label htmlFor="filtering">Type of Coffee</label>
                        <select name="coffeetype">
                            {optionCoffeeArray}
                        </select>
                    </div>

                    <div className="filtering">
                        <label htmlFor="filtering">Temperature</label>
                        <select name="temperature">
                            {optionTempArray}
                        </select>
                    </div>

                    <div className="filtering">
                        <label htmlFor="filtering">Type of Milk</label>
                        <select name="milktype">
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

            <div className="allCards">
                <div className="card">
                    <div>
                        <div className="user-attribute">
                            <img src="./img/profile-picture.jpg" alt="avatar" className="avatar" />
                            <a href="#" className="avatarUsername">@athenalovescoffee</a>
                        </div>

                        <div>
                            <img className="coffeeimg" src=".public/img/dairyfreemocha.jpg" alt="coffee with ice" />
                            <h3>Coffee Drink</h3>
                            <p>Short description of the drink</p>
                        </div>

                        <div className="sectionTracker">
                            <h4 className="h3tracker">Ingredients</h4>
                            <p>[#] shots of [coffee type, e.g. espresso]</p>
                            <p>[ounce] of [milk type]</p>
                            <p>sweetness level</p>
                            <p>volume</p>
                            <p>[type of syrup] syrup</p>
                        </div>

                        <div className="sectionTracker">
                            <h4 className="h3tracker">Tags</h4>
                            <span className="tag">Temperature</span>
                            <span className="tag">Milk</span>
                            <span className="tag">Syrup</span>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className="primary-button">Add Drink</button>
                        <button className="favbutton">
                            <img className="favicon" src=".public/img/starv4x.png" alt="starpng" />
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="user-attribute">
                            <img src="./img/profile-picture.jpg" alt="avatar" className="avatar" />
                            <a href="#" className="avatarUsername">@athenalovescoffee</a>
                        </div>

                        <div>
                            <img className="coffeeimg" src=".public/img/dairyfreemocha.jpg" alt="coffee with ice" />
                            <h3>Coffee Drink</h3>
                            <p>Short description of the drink</p>
                        </div>

                        <div className="sectionTracker">
                            <h4 className="h3tracker">Ingredients</h4>
                            <p>[#] shots of [coffee type, e.g. espresso]</p>
                            <p>[ounce] of [milk type]</p>
                            <p>sweetness level</p>
                            <p>volume</p>
                            <p>[type of syrup] syrup</p>
                        </div>

                        <div className="sectionTracker">
                            <h4 className="h3tracker">Tags</h4>
                            <span className="tag">Temperature</span>
                            <span className="tag">Milk</span>
                            <span className="tag">Syrup</span>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className="primary-button">Add Drink</button>
                        <button className="favbutton">
                            <img className="favicon" src=".public/img/starv4x.png" alt="starpng" />
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="user-attribute">
                            <img src="./img/profile-picture.jpg" alt="avatar" className="avatar" />
                            <a href="#" className="avatarUsername">@athenalovescoffee</a>
                        </div>

                        <div>
                            <img className="coffeeimg" src=".public/img/dairyfreemocha.jpg" alt="coffee with ice" />
                            <h3>Coffee Drink</h3>
                            <p>Short description of the drink</p>
                        </div>

                        <div className="sectionTracker">
                            <h4 className="h3tracker">Ingredients</h4>
                            <p>[#] shots of [coffee type, e.g. espresso]</p>
                            <p>[ounce] of [milk type]</p>
                            <p>sweetness level</p>
                            <p>volume</p>
                            <p>[type of syrup] syrup</p>
                        </div>

                        <div className="sectionTracker">
                            <h4 className="h3tracker">Tags</h4>
                            <span className="tag">Temperature</span>
                            <span className="tag">Milk</span>
                            <span className="tag">Syrup</span>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className="primary-button">Add Drink</button>
                        <button className="favbutton">
                            <img className="favicon" src=".public/img/starv4x.png" alt="starpng" />
                        </button>
                    </div>
                </div>
                
                {/* Fix onClick */}
                <div className="card" onClick="expand(this)">
                    <div className="user-attribute">
                        <img src="./img/profile-picture.jpg" alt="avatar" className="avatar" />
                        <a href="#" className="avatarUsername">@athenalovescoffee</a>
                    </div>

                    <div className="coffee-info">
                        <img className="coffeeimg" src=".public/img/dairyfreemocha.jpg" alt="coffee with ice" />
                        <h3>Coffee Drink</h3>
                        <p>Short description of the drink</p>
                    </div>

                    <div className="drink-data">
                        <div className="sectionTracker">
                            <h4 className="h3tracker">Ingredients</h4>
                            <p>[#] shots of [coffee type, e.g. espresso]</p>
                            <p>[ounce] of [milk type]</p>
                            <p>sweetness level</p>
                            <p>volume</p>
                            <p>[type of syrup] syrup</p>
                        </div>

                        <div className="sectionTracker">
                            <h4 className="h3tracker">Tags</h4>
                            <span className="tag">Temperature</span>
                            <span className="tag">Milk</span>
                            <span className="tag">Syrup</span>
                        </div>

                        <div className="buttons">
                            <button className="primary-button">Add Drink</button>
                            <button className="favbutton">
                                <img className="favicon" src=".public/img/starv4x.png" alt="starpng" />
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}

function Card(props) {
    return (
        <div className="card">
            <div>
                <div className="user-attribute">
                    <img src="./img/profile-picture.jpg" alt="avatar" className="avatar" />
                    <a href="#" className="avatarUsername">@athenalovescoffee</a>
                </div>

                <div>
                    <img className="coffeeimg" src=".public/img/dairyfreemocha.jpg" alt="coffee with ice" />
                    <h3>Coffee Drink</h3>
                    <p>Short description of the drink</p>
                </div>

                <div className="sectionTracker">
                    <h4 className="h3tracker">Ingredients</h4>
                    <p>[#] shots of [coffee type, e.g. espresso]</p>
                    <p>[ounce] of [milk type]</p>
                    <p>sweetness level</p>
                    <p>volume</p>
                    <p>[type of syrup] syrup</p>
                </div>

                <div className="sectionTracker">
                    <h4 className="h3tracker">Tags</h4>
                    <span className="tag">Temperature</span>
                    <span className="tag">Milk</span>
                    <span className="tag">Syrup</span>
                </div>
            </div>

            <div className="buttons">
                <button className="primary-button">Add Drink</button>
                <button className="favbutton">
                    <img className="favicon" src=".public/img/starv4x.png" alt="starpng" />
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
            <div className="card">
                <div className="user-attribute">
                    <img src="./img/profile-picture.jpg" alt="avatar" className="avatar" />
                    <a href="#" className="avatarUsername">@athenalovescoffee</a>
                </div>

                <div className="coffee-info">
                    <img className="coffeeimg" src=".public/img/dairyfreemocha.jpg" alt="coffee with ice" />
                    <h3>Coffee Drink</h3>
                    <p>Short description of the drink</p>
                </div>

                <div className="drink-data">
                    <div className="sectionTracker">
                        <h4 className="h3tracker">Ingredients</h4>
                        <p>[#] shots of [coffee type, e.g. espresso]</p>
                        <p>[ounce] of [milk type]</p>
                        <p>sweetness level</p>
                        <p>volume</p>
                        <p>[type of syrup] syrup</p>
                    </div>

                    <div className="sectionTracker">
                        <h4 className="h3tracker">Tags</h4>
                        <span className="tag">Temperature</span>
                        <span className="tag">Milk</span>
                        <span className="tag">Syrup</span>
                    </div>

                    <div className="buttons">
                        <button className="primary-button">Add Drink</button>
                        <button className="favbutton">
                            <img className="favicon" src=".public/img/starv4x.png" alt="starpng" />
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}