import React, {useState} from 'react';
import { Footer } from './Footer.js';

export function Tracker(props) {

    return (
        <div> 
            <DrinkName />
            <CoffeeType />
            <TemperatureDrink />
            <DrinkVolume />
            <MilkType />
            <MilkVolume />
            <FoamVolume />
            <SweetLevel />
            <SyrupType />
            <SyrupPumps />
        </div>
    );
}

function DrinkName(props) {

    const [inputValue, setInputValue] = useState ('');

    const handleChange = (event) => {
        let newValue = event.target.value 
        setInputValue(newValue);
    }

    return (
        <div className="tracker">
            <label for="name">Name of Drink</label>
            <input type="text" onChange={handleChange} value={inputValue}/>
        </div>
    );
}

function CoffeeType(props) {
    return (
        <div className="tracker">
            <label for="tracker">Choose the type of coffee you're drinking</label>
            <select>
            <option value="espresso">Espresso</option>
            <option value="macchiato">Macchiato</option>
            <option value="cappucino">Cappucino</option>
            <option value="mocha">Mocha</option>
            <option value="flat-white">Flat White</option>
            <option value="americano">Americano</option>
            <option value="latte">Latte</option>
            <option value="custom">Custom</option>
            </select>
        </div>
    );
}

function TemperatureDrink(props) {
    return (
        <section className="drink-temp">
            <div>
                <input type="radio" className="hot" value="hot"/>
                <label for="hot">Hot</label>
            </div>
            <div> 
                <input type="radio" className="iced" value="iced"/>
                <label for="iced">Iced</label>
            </div>
        </section>
    );
}

function DrinkVolume(props) {
    return (
        <div className="tracker">
            <label className="explanation">Amount of coffee you made</label>
            <select>
            <option value="xsmall">extra small: 4 oz.</option>
            <option value="small">small: 6 oz.</option>
            <option value="medium">medium: 8 oz.</option>
            <option value="large">large: 16 oz.</option>
            <option value="xlarge">extra large: 24 oz.</option>
            <option value="xxlarge">2x large: 32oz.</option>
            </select>
        </div>
    );
}

function MilkType(props) {
    return (
        <div className="tracker">
            <label className="explanation">Choose the type of milk you used</label>
            <select name="milk">
              <option value="whole">Whole</option>
              <option value="soy">Soy</option>
              <option value="hazelnut">Hazelnut</option>
              <option value="almond">Almond</option>
              <option value="coconut">Coconut</option>
              <option value="oat">Oat</option>
              <option value="goat">Goat</option>
              <option value="skimmed">Skimmed</option>
              <option value="skimmed">None</option>
            </select>
        </div>
    );
}

function MilkVolume(props) {
    return (
        <div className="tracker">
            <label className="explanation">Amount of milk you added</label>
            <select>
              <option value="xsmall">extra small: 4 oz.</option>
              <option value="small">small: 6 oz.</option>
              <option value="medium">medium: 8 oz.</option>
              <option value="large">large: 16 oz.</option>
              <option value="xlarge">extra large: 24 oz.</option>
              <option value="xxlarge">2x large: 32oz.</option>
            </select>
        </div>
    );
}

function FoamVolume(props) {
    return (
        <div className="tracker">
            <label className="explanation">Amount of foam you added</label>
            <select>
              <option value="small">30mL</option>
              <option value="medium">60mL</option>
              <option value="large">120mL</option>
            </select>
        </div>
    );
}

function SweetLevel(props) {
    return (
        <div className="tracker">
            <label clasName="explanation">Amount of sweetness level</label>
            <select>
              <option value="zero">0% - no sugar</option>
              <option value="25">25% - 1/4 sugar</option>
              <option value="50">50% - 1/2 sugar</option>
              <option value="75">75% - less sugar</option>
              <option value="100">100% - normal sugar</option>
              <option value="150">150% - more sugar</option>
            </select>
        </div>
    );
}

function SyrupType(props) {
    return (
        <div className="tracker">
            <label className="explanation">Syrup You Used</label>
            <input type="text" />
        </div>
    );
}

function SyrupPumps(props) {
    return (
        <div className="tracker">
            <label className="explanation">Pumps of Syrup</label>
            <input type="text" />
        </div>
    );
}

function ImageUpload(props) {
    return (
        <section className="image-upload">
            <div class="uploadImg"> 
                <label for="photo">Add Photo of Your Drink</label>
                <div> 
                    <input type="file" name="photo" accept="image/*"/>
                </div>
            </div>
        </section>
    );
}

// By default, any <button> inside a <form> will submit it. This can be surprising! If you have your own custom Button React component, consider returning <button type="button"> instead of <button>. Then, to be explicit, use <button type="submit"> for buttons that are supposed to submit the form.