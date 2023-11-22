import React, { useState } from 'react';
import { Footer } from './Footer.js';

// function PostCard({ src, alt, text }) {
//     return (
//       <div>
//         <img src={src} alt={alt} />
//         <p>{text}</p>
//       </div>
//     );
// }

export function Account(props) {

    const [activeTab, setActiveTab] = useState('posts');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderContent = () => {
        if (activeTab === 'saved') {
          return renderSavedContent();
        } else if (activeTab === 'tasted') {
          return renderTastedContent();
        } else {
          return renderPostsContent();
        }
    };

    const renderPostsContent = () => (
        // Render posts content here
        <div className="flex-box post-cards">
            <div>
                {/* <!-- Post 1 --> */}
                <div>
                    <img src="/img/icedcoffee.jpg" alt="iced coffee"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, laborum.</p>
                </div>
                {/* <!-- Post 2 --> */}
                <div>
                    <img src="/img/mintcoldbrew.jpg" alt="mint cold brew"/>
                    <p>Doloremque commodi unde eaque! Et natus dolorum corrupti ut numquam.</p>
                </div>
            </div>
        </div>
    );

    const renderSavedContent = () => (
        // Render saved content here
        <div className="flex-box post-cards">
            <div>
                {/* <!-- Post 3 --> */}
                <div>
                    <img src="/img/milkyespresso.jpg" alt="milky espresso"/>
                    <p>Odio praesentium cum nemo nesciunt architecto, quam voluptate porro inventore.</p>
                </div>
                {/* <!-- Post 4 --> */}
                <div>
                    <img src="/img/dairyfreemocha.jpg" alt="dairy free mocha"/>
                    <p>Dignissimos consequuntur maxime harum debitis ratione, culpa iure pariatur quaerat?</p>
                </div>
            </div>
        </div>
    );

    const renderTastedContent = () => (
        // Render tasted content here
        <div className="flex-box post-cards">
            <div>
                {/* <!-- Post 5 --> */}
                <div>
                    <img src="/img/pumpkinblend.jpg" alt="pumpkin blend"/>
                    <p>Odit id earum commodi tempora voluptatum mollitia dolorum, perspiciatis nulla!</p>
                </div>
            </div>
        </div>
    );
    
    return (
        <main>
            <div className="block-container">
            <div className="account-data">
                <h2> @Username </h2>
            </div>
            <img className="profile-picture" src="/img/profile-picture.jpg" alt="profile picture"/>
            <div className="account-data">
                <p> First Name, Last Name </p>
                <p> Joined date xx/xxxx</p>
            </div>
            <div className="flex-box">
                <button className="nav__button"> Edit profile </button>
            </div>
            </div>

            <div className="flex-box">
                <div className={`account-tabs profile-content ${activeTab === 'posts' ? 'active' : ''}`} onClick={() => handleTabClick('posts')}>
                    <h2> Posts </h2>
                </div>
                <div className={`account-tabs profile-content ${activeTab === 'saved' ? 'active' : ''}`} onClick={() => handleTabClick('saved')}>
                    <h2> Saved </h2>
                </div>
                <div className={`account-tabs profile-content ${activeTab === 'tasted' ? 'active' : ''}`} onClick={() => handleTabClick('tasted')}>
                    <h2> Tasted </h2>
                </div>
            </div>
            <div>
            {renderContent()}
            </div>
        
        </main>

    )
}