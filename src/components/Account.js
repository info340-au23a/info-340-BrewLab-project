import React, { useState } from 'react';
import { Footer } from './Footer.js';
import { Card } from './Explore.js';

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
        <div className="allCards">
            <Card />
        </div>
    );

    const renderSavedContent = () => (
       <div className="allCards">
            <Card />
            <Card />
            <Card />
        </div>
    );

    const renderTastedContent = () => (
        <div className="allCards">
            <Card />
            <Card />
            <Card />
            <Card />
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