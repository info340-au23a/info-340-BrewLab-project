import React, { useState } from 'react';
import { Footer } from './Footer.js';
import { Card } from './Explore.js';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, updateProfile } from 'firebase/auth'

export function Account(props) {

    const displayName = props.currentUser.userName;
    const profilePic = props.currentUser.userImg
    const userName = props.currentUser.userId;

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
                <h2> @{userName} </h2>
            </div>
            <img className="profile-picture" src={profilePic} alt="profile picture" />
            <div className="account-data">
                <p> {displayName} </p>
                <p> Joined date xx/xxxx</p>
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

    const renderPostsContent = () => (
        // Render posts content here
        <div className="allCards">
            {/* <Card /> */}
        </div>
    );

    const renderSavedContent = () => (
       <div className="allCards">
            {/* <Card />
            <Card />
            <Card /> */}
        </div>
    );

    const renderTastedContent = () => (
        <div className="allCards">
            {/* <Card />
            <Card />
            <Card />
            <Card /> */}
        </div>
    );

    const renderEditProfileForm = () => (
        <div className='block-container'>
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
                    
                    <button type="submit" className='nav__button'>Save Changes</button>
                    <button type="button" className='nav__button' onClick={toggleEditMode}>
                        Cancel
                    </button>
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
    }

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
            {/* <div className="block-container">
            <div className="account-data">
                <h2> @Username </h2>
            </div>
            <img className="profile-picture" src={profilePic} alt="profile picture"/>
            <div className="account-data">
                <p> {displayName} </p>
                <p> Joined date xx/xxxx</p>
            </div>
            <div className="flex-box">
                <button className="nav__button" onClick={editProfile}> Edit profile </button>
            </div>
            </div> */}

            {renderProfileContent()}

        
        </main>

    )
}