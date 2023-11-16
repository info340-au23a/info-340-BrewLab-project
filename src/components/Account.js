import React from 'react';
import { Footer } from './Footer.js';

export function Account(props) {
    return (
    <main>
        <div class="block-container">
        <div class="account-data">
            <h2> @Username </h2>
        </div>
        <img class="profile-picture" src="img/profile-picture.jpg" alt="profile picture"/>
        <div class="account-data">
            <p> First Name, Last Name </p>
            <p> Joined date xx/xxxx</p>
        </div>
        <div class="flex-box">
            <button class="nav__button"> Edit profile </button>
        </div>
        </div>

        <div class="flex-box">
            <div class="posts-title profile-content">
                <h2> Posts </h2>
            </div>
            <div class="saved-drinks profile-content">
                <h2> Saved </h2>
            </div>
            <div class="tried-drinks profile-content">
                <h2> Tasted </h2>
            </div>
        </div>

    <div class="flex-box post-cards">
        <div>
            {/* <!-- Post 1 --> */}
            <div>
                <img src="img/icedcoffee.jpg" alt="iced coffee"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, laborum.</p>
            </div>
            {/* <!-- Post 2 --> */}
            <div>
                <img src="img/mintcoldbrew.jpg" alt="mint cold brew"/>
                <p>Doloremque commodi unde eaque! Et natus dolorum corrupti ut numquam.</p>
            </div>
            {/* <!-- Post 3 --> */}
            <div>
                <img src="img/milkyespresso.jpg" alt="milky espresso"/>
                <p>Odio praesentium cum nemo nesciunt architecto, quam voluptate porro inventore.</p>
            </div>
            {/* <!-- Post 4 --> */}
            <div>
                <img src="img/dairyfreemocha.jpg" alt="dairy free mocha"/>
                <p>Dignissimos consequuntur maxime harum debitis ratione, culpa iure pariatur quaerat?</p>
            </div>
            {/* <!-- Post 5 --> */}
            <div>
                <img src="img/pumpkinblend.jpg" alt="pumpkin blend"/>
                <p>Odit id earum commodi tempora voluptatum mollitia dolorum, perspiciatis nulla!</p>
            </div>
        </div>
    </div>
  </main>

    )
}