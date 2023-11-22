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

export function Explore(props) {

    const optionCoffeeArray = coffeeTypes.map((coffeeType) => {
        const transformed = <option value={coffeeType.value}>{coffeeType.type}</option>
        return transformed;
    })

    return (
        <main>
            <h1 className="otherHeader">Explore New Drinks</h1>

            <div className="filter">
                <div className="filter-container">

                    <div className="filtering">
                        <label for="filtering">Type of Coffee</label>
                        <select name="coffeetype">
                            {/* <option value="espresso">Espresso</option>
                            <option value="macchiato">Macchiato</option>
                            <option value="cappucino">Cappucino</option>
                            <option value="mocha">Mocha</option>
                            <option value="flat-white">Flat White</option>
                            <option value="americano">Americano</option>
                            <option value="latte">Latte</option>
                            <option value="custom">Custom</option> */}
                            {optionCoffeeArray}
                        </select>
                    </div>

                    <div className="filtering">
                        <label for="filtering">Temperature</label>
                        <select name="temperature">
                            <option value="hot">Hot</option>
                            <option value="cold">Cold</option>
                        </select>
                    </div>

                    <div className="filtering">
                        <label for="filtering">Type of Milk</label>
                        <select name="milktype">
                            <option value="whole">Whole</option>
                            <option value="soy">Soy</option>
                            <option value="hazelnut">Hazelnut</option>
                            <option value="almond">Almond</option>
                            <option value="coconut">Coconut</option>
                            <option value="oat">Oat</option>
                            <option value="goat">Goat</option>
                            <option value="skimmed">Skimmed</option>
                            <option value="none">None</option>
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