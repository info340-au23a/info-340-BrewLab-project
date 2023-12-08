import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Footer } from './Footer.js';

export function Tracker(props) {

    const [formData, setFormData] = useState({
        drinkName: '',
        coffeeType: '', 
        temperature: '', 
        drinkVolume: '', 
        milkType: '', 
        milkVolume: '', 
        foamVolume: '', 
        sweetnessLevel: '', 
        syrupType: '', 
        syrupPumps: '',
    })

    const handleChange = (event) => {
        const { key, userInput } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [key]: userInput,
        }))
    };

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);
    }

    // go to 
    if (submitted) {
        return <Navigate to="/explore" />;
    }

    return (
        <div>
            {/* <Nav /> */}
            <div className="tracker">
                <h1 className="trackerHeader">Log Your Drink</h1>
                <form className="logging" onSubmit={handleSubmit}>
                    <DrinkName onChange={handleChange} />
                    <CoffeeType onChange={handleChange} />
                    <TemperatureDrink onChange={handleChange} />
                    <DrinkVolume onChange={handleChange} />
                    <MilkType onChange={handleChange} />
                    <MilkVolume onChange={handleChange} />
                    <FoamVolume onChange={handleChange} />
                    <SweetLevel onChange={handleChange} />
                    <SyrupType onChange={handleChange} />
                    <SyrupPumps onChange={handleChange} />
                    <ImageUpload onChange={handleImageChange}/>
                    <LogDrink />
                </form>
            </div>
        </div>    
    );
}

function DrinkName(props) {
    return (
        <div className="tracker">
            <label htmlFor="drink-name">Name of Drink</label>
            <input id="drink-name" type="text" onChange={props.onChange} value={formData.drinkName} />
        </div>
    );
}

function CoffeeType(props) {
    return (
        <div className="tracker">
            <label htmlFor="coffee-type">Choose the type of coffee you're drinking</label>
            <select id="coffee-type" value={formData.coffeeType} onChange={props.onChange}>
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
                <label htmlFor="hot">Hot</label>
                <input type="radio" id="hot" name="temperature" className="hot" value="hot" />
            </div>
            <div>
                <label htmlFor="iced">Iced</label>
                <input type="radio" id="iced" name="temperature" className="iced" value="iced" />
            </div>
        </section>
    );
}

function DrinkVolume(props) {
    return (
        <div className="tracker">
            <label htmlFor="drink-volume" className="explanation">Amount of coffee you made</label>
            <select id="drink-volume" value={formData.drinkVolume} onChange={props.onChange}>
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
            <label htmlFor="milk-type" className="explanation">Choose the type of milk you used</label>
            <select id="milk-type" value={formData.milkType} onChange={props.onChange}>
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
            <label htmlFor="milk-volume" className="explanation">Amount of milk you added</label>
            <select id="milk-volume" value={formData.milkVolume} onChange={props.onChange}>
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
            <label htmlFor="foam-volume" className="explanation">Amount of foam you added</label>
            <select id="foam-volume" value={formData.foamVolume} onChange={props.onChange}>
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
            <label htmlFor="sweet-level" className="explanation">Amount of sweetness level</label>
            <select id="sweet-level" value={formData.sweetnessLevel} onChange={props.onChange}>
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
            <label htmlFor="syrup-type" className="explanation">Syrup You Used</label>
            <input id="syrup-type" value={formData.syrupType} onChange={props.onChange} type="text" />
        </div>
    );
}

function SyrupPumps(props) {
    return (
        <div className="tracker">
            <label htmlFor="syrup-pump" className="explanation">Pumps of Syrup</label>
            <input id="syrup-pump" value={formData.syrupPumps} onChange={props.onChange} type="text" />
        </div>
    );
}

function ImageUpload(props) {
    return (
        <div className="uploadImg">
            <input type="file" onChange={props.onChange} />
            <img src={props.selectedImage} />
        </div>
    );
}

function LogDrink() {
    return (
        <div className="tracker-buttons">
            <button type="submit" value="Submit" className="secondary-button">Log Drink</button>
        </div>
    )
}
