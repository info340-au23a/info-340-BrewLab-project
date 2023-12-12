import React, { useState, useEffect } from 'react';
import { AllCards } from './Cards.js';
import { getDatabase, ref, onValue } from 'firebase/database';

export function Explore(props) {
    const [userSelectedFilters, setUserSelectedFilters] = useState({});
    const [finalFilters, setFinalFilters] = useState({});

    const coffeeTypes = props.coffeeTypes;
    const temperature = props.temperature;
    const milkTypes = props.milkTypes;

    const handleChangeCoffee = (event) => {
        setUserSelectedFilters({...userSelectedFilters, coffeeType: event.target.value});
    }

    const handleChangeTemp = (event) => {
        setUserSelectedFilters({...userSelectedFilters, temperature: event.target.value});
    }

    const handleChangeMilk = (event) => {
        setUserSelectedFilters({...userSelectedFilters, milkType: event.target.value});
    }

    const handleChangeSyrup = (event) => {
        setUserSelectedFilters({...userSelectedFilters, syrupType: event.target.value});
    }

    const handleClickFilter = () => {
        if (userSelectedFilters.syrupType !== undefined) {
            setFinalFilters({...userSelectedFilters, syrupType: userSelectedFilters.syrupType.toLowerCase()});
        } else {
            setFinalFilters(userSelectedFilters);
        }
    }

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

    // FIREBASE CODE
    const [drinkData, setDrinkData] = useState([]);

    useEffect(() => {
        // Fetch data from Firebase when the component mounts
        const db = getDatabase();

        // Update the user's profile data in the real-time database
        // const drinksRef = ref(db, userRef + '/posted drinks');
        const drinksRef = ref(db, '/posted drinks');

        // fetch data from realtime database
        const fetchData = onValue(drinksRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Convert the data object into an array and set it in the state
            const dataArray = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            
            const cardsArray = dataArray.map((key) => ({
                drinkName: key.drinkName,
                ingredients: key
            }))

            setDrinkData(cardsArray);
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
        <main className="main-explore-padding">
            <h1 className="otherHeader">Explore New Drinks</h1>

            <div className="filter">
                <div className="filter-container">

                    <div className="filtering">
                        <label htmlFor="coffee-type">Type of Coffee</label>
                        <select id="coffee-type" name="coffeetype" onChange={handleChangeCoffee}>
                            {optionCoffeeArray}
                        </select>
                    </div>

                    <div className="filtering">
                        <label htmlFor="temperature">Temperature</label>
                        <select id="temperature" name="temperature" onChange={handleChangeTemp}>
                            {optionTempArray}
                        </select>
                    </div>

                    <div className="filtering">
                        <label htmlFor="milk-type">Type of Milk</label>
                        <select id="milk-type" name="milktype" onChange={handleChangeMilk}>
                            {optionMilkArray}
                        </select>
                    </div>

                    <div className="filtering">
                        <label htmlFor="syrup" className="explanation">Syrup</label>
                        <input id="syrup" type="text" onChange={handleChangeSyrup} />
                    </div>

                    <div className="filtering">
                        <button className="primary-button" onClick={handleClickFilter}>Apply Filter</button>
                    </div>

                </div>
            </div>

            <AllCards currentUser={props.currentUser} drinks={drinkData} exploreFilters={finalFilters} pageResult="explore" />

        </main>
    );
}