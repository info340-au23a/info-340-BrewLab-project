import React from 'react';

export function Card(props) {
    const ingredients = props.drinks.ingredients;

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