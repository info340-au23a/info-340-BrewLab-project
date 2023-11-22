import React from 'react';

export function Explore(props) {
    return (
        <main>
        <h1 class="otherHeader">Explore New Drinks</h1>
    
        <div class="filter">
          <div class="filter-container">
    
            <div class="filtering">
              <label for="filtering">Type of Coffee</label>
              <select name="coffeetype">
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
    
            <div class="filtering">
              <label for="filtering">Temperature</label>
              <select name="temperature">
                <option value="hot">Hot</option>
                <option value="cold">Cold</option>
              </select>
            </div>
    
            <div class="filtering">
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
    
            <div class="filtering">
              <label class="explanation">Syrup</label>
              <input type="text" />
            </div>
    
            <div class="filtering">
              <button class="primary-button">Apply Filter</button>
            </div>
          </div>
        </div>
    
        <div class="allCards">
          <div class="card">
            <div>
              <div class="user-attribute">
                <img src="./img/profile-picture.jpg" alt="avatar" class="avatar" />
                <a href="#" class="avatarUsername">@athenalovescoffee</a>
              </div>
    
              <div>
                <img class="coffeeimg" src=".public/img/dairyfreemocha.jpg" alt="coffee with ice" />
                <h3>Coffee Drink</h3>
                <p>Short description of the drink</p>
              </div>
    
              <div class="sectionTracker">
                <h4 class="h3tracker">Ingredients</h4>
                <p>[#] shots of [coffee type, e.g. espresso]</p>
                <p>[ounce] of [milk type]</p>
                <p>sweetness level</p>
                <p>volume</p>
                <p>[type of syrup] syrup</p>
              </div>
    
              <div class="sectionTracker">
                <h4 class="h3tracker">Tags</h4>
                <span class="tag">Temperature</span>
                <span class="tag">Milk</span>
                <span class="tag">Syrup</span>
              </div>
            </div>
    
            <div class="buttons">
              <button class="primary-button">Add Drink</button>
              <button class="favbutton">
                <img class="favicon" src=".public/img/starv4x.png" alt="starpng" />
              </button>
            </div>
          </div>
    
          <div class="card">
            <div>
              <div class="user-attribute">
                <img src="./img/profile-picture.jpg" alt="avatar" class="avatar" />
                <a href="#" class="avatarUsername">@athenalovescoffee</a>
              </div>
    
              <div>
                <img class="coffeeimg" src=".public/img/dairyfreemocha.jpg" alt="coffee with ice" />
                <h3>Coffee Drink</h3>
                <p>Short description of the drink</p>
              </div>
    
              <div class="sectionTracker">
                <h4 class="h3tracker">Ingredients</h4>
                <p>[#] shots of [coffee type, e.g. espresso]</p>
                <p>[ounce] of [milk type]</p>
                <p>sweetness level</p>
                <p>volume</p>
                <p>[type of syrup] syrup</p>
              </div>
    
              <div class="sectionTracker">
                <h4 class="h3tracker">Tags</h4>
                <span class="tag">Temperature</span>
                <span class="tag">Milk</span>
                <span class="tag">Syrup</span>
              </div>
            </div>
    
            <div class="buttons">
              <button class="primary-button">Add Drink</button>
              <button class="favbutton">
                <img class="favicon" src=".public/img/starv4x.png" alt="starpng" />
              </button>
            </div>
          </div>
    
          <div class="card">
            <div>
              <div class="user-attribute">
                <img src="./img/profile-picture.jpg" alt="avatar" class="avatar" />
                <a href="#" class="avatarUsername">@athenalovescoffee</a>
              </div>
    
              <div>
                <img class="coffeeimg" src=".public/img/dairyfreemocha.jpg" alt="coffee with ice" />
                <h3>Coffee Drink</h3>
                <p>Short description of the drink</p>
              </div>
    
              <div class="sectionTracker">
                <h4 class="h3tracker">Ingredients</h4>
                <p>[#] shots of [coffee type, e.g. espresso]</p>
                <p>[ounce] of [milk type]</p>
                <p>sweetness level</p>
                <p>volume</p>
                <p>[type of syrup] syrup</p>
              </div>
    
              <div class="sectionTracker">
                <h4 class="h3tracker">Tags</h4>
                <span class="tag">Temperature</span>
                <span class="tag">Milk</span>
                <span class="tag">Syrup</span>
              </div>
            </div>
    
            <div class="buttons">
              <button class="primary-button">Add Drink</button>
              <button class="favbutton">
                <img class="favicon" src=".public/img/starv4x.png" alt="starpng" />
              </button>
            </div>
          </div>
    
          <div class="card" onClick="expand(this)">
            <div class="user-attribute">
              <img src="./img/profile-picture.jpg" alt="avatar" class="avatar" />
              <a href="#" class="avatarUsername">@athenalovescoffee</a>
            </div>
    
            <div class="coffee-info">
              <img class="coffeeimg" src=".public/img/dairyfreemocha.jpg" alt="coffee with ice" />
              <h3>Coffee Drink</h3>
              <p>Short description of the drink</p>
            </div>
    
            <div class="drink-data">
              <div class="sectionTracker">
                <h4 class="h3tracker">Ingredients</h4>
                <p>[#] shots of [coffee type, e.g. espresso]</p>
                <p>[ounce] of [milk type]</p>
                <p>sweetness level</p>
                <p>volume</p>
                <p>[type of syrup] syrup</p>
              </div>
    
              <div class="sectionTracker">
                <h4 class="h3tracker">Tags</h4>
                <span class="tag">Temperature</span>
                <span class="tag">Milk</span>
                <span class="tag">Syrup</span>
              </div>
    
              <div class="buttons">
                <button class="primary-button">Add Drink</button>
                <button class="favbutton">
                  <img class="favicon" src=".public/img/starv4x.png" alt="starpng" />
                </button>
              </div>
            </div>
    
          </div>
    
        </div>
      </main>
    );
}