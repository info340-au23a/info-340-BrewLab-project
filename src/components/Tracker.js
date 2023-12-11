import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Footer } from './Footer.js';
import { getDatabase, ref, push, set, onValue } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

// import user authentication (adjust path to authentication context)

export function Tracker(props) {

    // navigation bar
    const [activeTab, setActiveTab] = useState('logging');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    // logging drink form, drinks i've posted, tasted drinks
    const renderContent = () => {
        if (activeTab === 'posts') {
            // render drinks that user logged 
            return renderPostsContent();
        } else if (activeTab === 'tasted') {
            // render coffee cards that user has tried 
            return renderTastedContent();
        } else {
            // render logging form
            return renderLoggingContent(); 
        }
    };

    const renderTastedContent = () => (
        <div>

        </div>
    )

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
                <button type="submit" value="Submit" className="secondary-button"> { submitted ? "Logged!" : "Log Drink" } </button>
            </form>
        </div>
    )

    const [selectedImage, setSelectedImage] = useState('./img/icedcoffee.jpg');

    const handleImageChange = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };

    const renderPostsContent = () => {
        // show cards of posted drinks here
        return (
            <div>
                <CreateCards/>
            </div>
        )
    }

    const handleChange = (event) => {
        var { name, value } = event.target;

        if (event.target.classList.contains("temperature")) {
            name = "temperature";
        } else {
            name = event.target.id;
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))

        // reset drink after user has submitted 
        setSubmitted(false);
    };

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const drinkData = {
            drinkName: formData.drinkName,
            drinkDescription: formData.drinkDescription,
            coffeeType: formData.coffeeType,
            temperature: formData.temperature,
            drinkVolume: formData.drinkVolume,
            milkType: formData.milkType,
            milkVolume: formData.milkVolume,
            foamVolume: formData.foamVolume,
            sweetnessLevel: formData.sweetnessLevel,
            syrupType: formData.syrupType,
            syrupPumps: formData.syrupPumps,
        };

        const db = getDatabase();
        const drinksRef = ref(db, 'posted drinks');

        
        // change image URL for firebase storage
        const imageF = await fetch(selectedImage).then(res => {
            return res.blob();
        })

        try {
            const newDrinkRef = push(drinksRef);

            const storage = getStorage();
            const formImagesRef = storageRef(storage, newDrinkRef.key);
            
            console.log(imageF);
            uploadBytes(formImagesRef, imageF).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });

            await set(newDrinkRef, drinkData);

            setFormData({
                drinkName: '',
                drinkDescription: '',
                coffeeType: '',
                temperature: '',
                drinkVolume: '',
                milkType: '',
                milkVolume: '',
                foamVolume: '',
                sweetnessLevel: '',
                syrupType: '',
                syrupPumps: '',
            });

            setSubmitted(true);

        } catch (error) {
            console.error('Error saving drink data to Firebase:', error);
        }
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
                            <div className="text-navi" href="tracker3.html">Tasted Drinks</div>
                        </div>
                    </div>
                </div>
            </div>

            {renderContent()}

        </div>
    );
}

// LOGGING INFORMATION
function DrinkName(props) {
    return (
        <div className="tracker">
            <label htmlFor="drinkName">Name of Drink</label>
            <input id="drinkName" type="text" onChange={props.onChange} value={props.formData.drinkName}/>
        </div>
    );
}

function DrinkDescription(props) {
    return (
        <div className="tracker">
            <label htmlFor="drinkDescription">Describe Your Drink</label>
            <input id="drinkDescription" type="text" onChange={props.onChange} value={props.formData.drinkDescription}/>
        </div>
    );
}

function CoffeeType(props) {
    return (
        <div className="tracker">
            <label htmlFor="coffeeType">Choose the type of coffee you're drinking</label>
            <select id="coffeeType" onChange={props.onChange} value={props.formData.coffeeType}>
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
                <input type="radio" id="hot" className="temperature" name="temperature" value="hot" onChange={props.temp} />
                <label htmlFor="hot">Hot</label>
            </div>
            <div>
                <input type="radio" id="iced" className="temperature" name="temperature" value="iced" onChange={props.temp} />
                <label htmlFor="iced">Iced</label>
            </div>
        </section>
    );
}

function DrinkVolume(props) {
    return (
        <div className="tracker">
            <label htmlFor="drinkVolume" className="explanation">Amount of coffee you made</label>
            <select id="drinkVolume" onChange={props.onChange} value={props.formData.drinkVolume}>
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
            <select id="milkType" onChange={props.onChange} value={props.formData.milkType}>
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
            <select id="milkVolume" onChange={props.onChange} value={props.formData.milkVolume}>
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
            <select id="foamVolume" onChange={props.onChange} value={props.formData.foamVolume}>
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
            <select id="sweetnessLevel" onChange={props.onChange} value={props.formData.sweetnessLevel}>
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
            <input id="syrupType" onChange={props.onChange} type="text" value={props.formData.syrupType}/>
        </div>
    );
}

function SyrupPumps(props) {
    return (
        <div className="tracker">
            <label htmlFor="syrupPumps" className="explanation">Pumps of Syrup</label>
            <input id="syrupPumps" onChange={props.onChange} type="text" value={props.formData.syrupPumps}/>
        </div>
    );
}

function ImageUpload(props) {
    return (
        <div className="uploadImg">
            <input type="file" onChange={props.onChange} />
            <img className="imageUpload" src={props.selectedImage} alt="preview of user's coffee drink" />
        </div>
    );
}

// create cards from firebase realtime database + storage
function CreateCards() {

    const [drinkData, setDrinkData] = useState([]);
    const storage = getStorage();

    useEffect(() => {
        // Fetch data from Firebase when the component mounts
        const db = getDatabase();
        const drinksRef = ref(db, 'posted drinks');
    
        // fetch data from realtime database
        const fetchData = onValue(drinksRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Convert the data object into an array and set it in the state
            const dataArray = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            setDrinkData(dataArray);
            fetchURL();
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

        // get drink image
        const fetchURL = async () => {
            const images = await Promise.all(drinkData.map((drink) => getDownloadURL(storageRef(storage, drink.id))));

            setDrinkData((drinks) => drinks.map((drink, idx) => ({
                ...drink,
                selectedImage: images[idx]
            })));
        }

    return (
        <div className="allCards">
            {drinkData.map((drink) => (
            <div key={drink.id} className="card">
            {/* <div className="user-attribute">
                <img src="/img/profile-picture.jpg" alt="avatar" className="avatar" />
                <p className="avatarUsername">@athenalovescoffee</p>
            </div> */}

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

            </div>
        ))}
        </div>
    );
}

// favorited drinks
// async function FavoriteDrinks (drinkInformation) {
//     const db = getDatabase();
//         const drinksRef = ref(db, 'favorited drinks');

//         try {
//             const newDrinkRef = push(drinksRef);

//             await set(newDrinkRef, drinkData);

//             setFormData({
//                 drinkName: '',
//                 drinkDescription: '',
//                 coffeeType: '',
//                 temperature: '',
//                 drinkVolume: '',
//                 milkType: '',
//                 milkVolume: '',
//                 foamVolume: '',
//                 sweetnessLevel: '',
//                 syrupType: '',
//                 syrupPumps: '',
//             });

//             setSubmitted(true);

//         } catch (error) {
//             console.error('Error saving drink data to Firebase:', error);
//         }
    
// }