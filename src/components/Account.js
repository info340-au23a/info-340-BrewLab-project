import React, { useState, useEffect } from 'react';
import { Footer } from './Footer.js';
import { AllCards, Card } from './Cards.js';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, updateProfile } from 'firebase/auth'
import { getDatabase, ref, onValue } from 'firebase/database';
import { CreateCards } from './Tracker.js';

export function Account(props) {

    const displayName = props.currentUser.userName;
    const profilePic = props.currentUser.userImg
    const joinedDate = props.currentUser.joinedDate;
    const formattedJoinedDate = new Date(joinedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
    });

    const [newUsername, setNewUsername] = useState(props.currentUser.userId);
    const [activeTab, setActiveTab] = useState('posts');
    const [editMode, setEditMode] = useState(false);
    const [imageFile, setImageFile] = useState(undefined)
    let initialURL = props.currentUser.userImg;
    const [imageUrl, setImageUrl] = useState(initialURL)

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
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

    const renderProfileContent = () => {
        if (editMode) {
            return renderEditProfileForm();
        } else {
            return renderUserProfile();
        }
    };

    const renderUserProfile = () => (
        <div className="block-container">
            <div className="account-data">
                <h2> @{newUsername} </h2>
            </div>
            <img className="profile-picture" src={profilePic} alt="profile picture" />
            <div className="account-data">
                <p> {displayName} </p>
                <p> Joined {formattedJoinedDate}</p>
            </div>
            <div className="flex-box">
                <button className="nav__button" onClick={toggleEditMode}>
                    Edit Profile
                </button>
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
        </div> 
    );

    const renderPostsContent = () => {
        // Render posts content here
        return (
        <div className="allCards" key="posted">
            <CreateCards tableName="posted drinks"/>
        </div>
        )
    };

    const renderSavedContent = () => {
        return (
            <div className="allCards" key="saved" >
                <CreateCards tableName="saved drink"/>
            </div>
        )
    };

    const renderTastedContent = () => {
        return (
            <div className="allCards" key="tasted">
            <CreateCards tableName="tasted drink"/>
            </div>
        )
    };

    const renderEditProfileForm = () => (
        <div className='block-container'>
            <div className="account-data">
                <h2> Edit Profile </h2>
            </div>
            <div className="edit-data">
                <div className='flex-box'>
                    <img src={imageUrl} alt="user avatar preview" className="profile-picture-edit"/>
                </div>
                <div className='flex-box'>
                    <label htmlFor="imageUploadInput" className="nav__button">Choose Image</label>
                    <button className="nav__button" onClick={handleImageUpload}>Save to Profile</button>
                    <input type="file" name="image" id="imageUploadInput" className="hide" onChange={handleChange}/>
                </div>
            </div>
            <div className='flex-box'>
                <form onSubmit={handleEditProfile}>
                    <div className='flex-box'>
                        <label className='nav__button'>
                            Username : 
                            <input type="text" value={newUsername} onChange={(event) => setNewUsername(event.target.value)} />
                        </label>
                    </div>
                    <div className='flex-box'>
                        <button type="submit" className='nav__button'>Save Changes</button>
                        <button type="button" className='nav__button' onClick={toggleEditMode}>
                        Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
    
    const handleEditProfile = (event) => {
        event.preventDefault();
        setEditMode(false);
    };

    //image uploading!
    const handleChange = (event) => {
        if(event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0]
            setImageFile(imageFile);
            setImageUrl(URL.createObjectURL(imageFile));
        }
    };

    const handleImageUpload = async (event) => {
        console.log("Uploading", imageFile);

        const storage = getStorage();
        const imageRef = storageRef(storage, "userImages/"+ props.currentUser.uid + ".png")

        await uploadBytes(imageRef, imageFile)
        const url = await getDownloadURL(imageRef)
        console.log(url);
        updateProfile(props.currentUser, {photoURL: url})
    
    }

    return (
        <main>
            {renderProfileContent()}
        </main>
    )
}