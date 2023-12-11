import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';


export function Tracker3(props) {
    const [drinkData, setDrinkData] = useState([]);
    
    // fetch data from firebase when the component mounts
    useEffect(() => {
        // Fetch data from Firebase when the component mounts
        const db = getDatabase();
        const drinksRef = ref(db, 'drinks');
    
        const fetchData = onValue(drinksRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Convert the data object into an array and set it in the state
            const dataArray = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            setDrinkData(dataArray);
          } else {
            // Handle the case when there is no data
            setDrinkData([]);
          }
        });
    
        // Clean up the event listener when the component unmounts
        return () => {
          fetchData(); // This will unsubscribe from the onValue event
        };
      }, []);

    return (
        <div>
        {drinkData.map((drink) => (
            <div key={drink.id} className="card">
            <div className="user-attribute">
                <img src="/img/profile-picture.jpg" alt="avatar" className="avatar" />
                <p className="avatarUsername">@athenalovescoffee</p>
            </div>

            <div>
                <img className="coffeeimg" src={drink.selectedImage} alt="coffee with ice" />
                <h2>{drink.drinkName}</h2>
                <p>{drink.drinkDescription}</p>
            </div>

            <div className="sectionTracker">
                <h3>Ingredients</h3>
                <p>{drink.numShots} shots of a {drink.coffeeType}</p>
                <p>{drink.milkVolume} of {drink.milkType}</p>
                <p>{drink.sweetnessLevel}</p>
                <p>{drink.drinkVolume}</p>
                <p>{drink.syrupType} syrup</p>
            </div>

            <div className="sectionTracker">
                <h3 className="h3tracker">Tags</h3>
                <span className="tag">{drink.temperature}</span>
                <span className="tag">{drink.milkType}</span>
                <span className="tag">{drink.syrupType}</span>
            </div>

            <div className="buttons">
                <button className="primary-button">Add Drink</button>
                <button className="favbutton">
                <img className="favicon" src="/img/starv4x.png" alt="star icon" />
                </button>
            </div>
            </div>
        ))}
        </div>
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