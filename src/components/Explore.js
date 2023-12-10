import React, { useState } from 'react';
import { AllCards } from './Cards.js';
import { Link } from 'react-router-dom';

export function Explore(props) {
    const [userSelectedFilters, setUserSelectedFilters] = useState({});
    console.log(userSelectedFilters);

    const coffeeTypes = props.coffeeTypes;
    const temperature = props.temperature;
    const milkTypes = props.milkTypes;

    const handleChangeCoffee = (event) => {
        setUserSelectedFilters({...userSelectedFilters, coffeeType: event.target.type});
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

    const handleClickFilter = (event) => {
        console.log(userSelectedFilters);
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

    return (
        <main>
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

            <AllCards drinks={props.drinks}/>

        </main>
    );
}