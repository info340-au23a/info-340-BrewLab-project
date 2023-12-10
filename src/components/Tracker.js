import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Footer } from './Footer.js';

// import user authentication (adjust path to authentication context)

export function Tracker(props) {

    // navigation bar
    const [activeTab, setActiveTab] = useState('logging');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    // logging drink form, drinks i've posted, tasted drinks
    const renderContent = () => {
        // if (activeTab === 'posts') {
        //     // render drinks that user logged 
        //     return renderPostsContent();
        // } else if (activeTab === 'tasted') {
        //     // render coffee cards that user has tried 
        //     return renderTastedContent();
        // } else {
        //     // render logging form
        //     return renderLoggingContent(); 
        // }

        return renderLoggingContent();
    };

    const [formData, setFormData] = useState({
        drinkName: '',
        drinkDescription: '',
        coffeeType: 'Espresso', 
        temperature: '', 
        drinkVolume: 'extra small: 4 oz.', 
        milkType: 'Whole', 
        milkVolume: 'extra small: 4 oz.',
        foamVolume: '30 mL', 
        sweetnessLevel: '0% - no sugar', 
        syrupType: '', 
        syrupPumps: '',
    })

    // logging form
    const renderLoggingContent = () => (
        <div>
            <h1 className="trackerHeader">Log Your Drink</h1>
            <form className="logging" onSubmit={handleSubmit}>
                <DrinkName onChange={handleChange} formData={formData} />
                <DrinkDescription onChange={handleChange} formData={formData} />
                <CoffeeType onChange={handleChange} formData={formData} />
                <TemperatureDrink temp={handleChange} formData={formData} />
                <DrinkVolume onChange={handleChange} formData={formData} />
                <MilkType onChange={handleChange} formData={formData} />
                <MilkVolume onChange={handleChange} formData={formData} />
                <FoamVolume onChange={handleChange} formData={formData} />
                <SweetLevel onChange={handleChange} formData={formData} />
                <SyrupType onChange={handleChange} formData={formData} />
                <SyrupPumps onChange={handleChange} formData={formData} />
                <ImageUpload selectedImage={selectedImage} onChange={handleImageChange} />
                <LogDrink />
            </form>
        </div>
    )

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };


    const renderPostsContent = () => {
        // show cards of posted drinks here
    }

    // form data that user submitted 
    

    const handleChange = (event) => {
        var { name, value } = event.target;
        console.log(event.target);
        console.log(name);
        console.log(value);

        if (event.target.classList.contains("temperature")) {
            name = "temperature";
        } else {
            name = event.target.id;
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))

        console.log(event.target.classList);
    };

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();


        setSubmitted(true);
    }

    // once user submits, what happens?
    if (submitted) {
        return <Navigate to="/explore" />;
    }

    return (

        <div className="tracker">
            {/* navigation */}
            <div className="tracker-nav">
                <div className="tracker-buttons">

                    <div className={`t-button ${activeTab === 'logging' ? 'active' : ''}`} onClick={() => handleTabClick('logging')}>
                        <div className="content-navi">
                            <div className="text-navi">Log Drink</div>
                        </div>
                    </div>

                    <div className={`t-button ${activeTab === 'posts' ? 'active' : ''}`} onClick={() => handleTabClick('posts')}>
                        <div className="content-navi">
                            <div className="text-navi">Posted Drinks</div>
                        </div>
                    </div>

                    <div className={`t-button ${activeTab === 'saved' ? 'active' : ''}`} onClick={() => handleTabClick('saved')}>
                        <div className="content-navi">
                            <div className="text-navi" href="tracker3.html">Saved Drinks</div>
                        </div>
                    </div>
                </div>
            </div>

            {renderContent()}

        </div>
    );
}

function DrinkName(props) {
    return (
        <div className="tracker">
            <label htmlFor="drinkName">Name of Drink</label>
            <input id="drinkName" type="text" onChange={props.onChange} />
        </div>
    );
}

function DrinkDescription(props) {
    return (
        <div className="tracker">
            <label htmlFor="drinkDescription">Describe Your Drink</label>
            <input id="drinkDescription" type="text" onChange={props.onChange} />
        </div>
    );
}

function CoffeeType(props) {
    return (
        <div className="tracker">
            <label htmlFor="coffeeType">Choose the type of coffee you're drinking</label>
            <select id="coffeeType" onChange={props.onChange}>
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
            <label htmlFor="temperature">Temperature</label>
            <div>
                <input type="radio" id="hot" className="temperature" name="temperature" value="hot" onChange={props.temp}/>
                <label htmlFor="hot">Hot</label>
            </div>
            <div>
                <input type="radio" id="iced" className="temperature" name="temperature" value="iced" onChange={props.temp}/>
                <label htmlFor="iced">Iced</label>
            </div>
        </section>
    );
}

function DrinkVolume(props) {
    return (
        <div className="tracker">
            <label htmlFor="drinkVolume" className="explanation">Amount of coffee you made</label>
            <select id="drinkVolume" onChange={props.onChange}>
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
            <label htmlFor="milkType" className="explanation">Choose the type of milk you used</label>
            <select id="milkType" onChange={props.onChange}>
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
            <label htmlFor="milkVolume" className="explanation">Amount of milk you added</label>
            <select id="milkVolume" onChange={props.onChange}>
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
            <label htmlFor="foamVolume" className="explanation">Amount of foam you added</label>
            <select id="foamVolume" onChange={props.onChange}>
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
            <label htmlFor="sweetnessLevel" className="explanation">Amount of sweetness level</label>
            <select id="sweetnessLevel" onChange={props.onChange}>
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
            <label htmlFor="syrupType" className="explanation">Syrup You Used</label>
            <input id="syrupType" onChange={props.onChange} type="text" />
        </div>
    );
}

function SyrupPumps(props) {
    return (
        <div className="tracker">
            <label htmlFor="syrupPumps" className="explanation">Pumps of Syrup</label>
            <input id="syrupPumps" onChange={props.onChange} type="text" />
        </div>
    );
}

function ImageUpload(props) {
    return (
        <div className="uploadImg">
            <input type="file" onChange={props.onChange} />
            <img src={props.selectedImage} alt="preview of user's coffee drink" />
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
