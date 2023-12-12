import React, { useState, useEffect } from 'react';
import { Footer } from './Footer.js';
import { AllCards, Card } from './Cards.js';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, updateProfile } from 'firebase/auth'
import { getDatabase, ref, onValue, set as firebaseSet} from 'firebase/database';
import { CreateCards } from './Tracker.js';

export function Account(props) {

    let profilePic = props.currentUser.userImg;
    const fullName = props.currentUser.userName;
    const joinedDate = props.currentUser.joinedDate;
    const formattedJoinedDate = new Date(joinedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
    });

    // const [newUsername, setNewUsername] = useState(props.currentUser.userName);
    const [userName, setUserName] = useState(props.currentUser.userName); // State to store the fetched username
    const [activeTab, setActiveTab] = useState('posts');
    const [editMode, setEditMode] = useState(false);
    const [imageFile, setImageFile] = useState(undefined)
    const [imageUrl, setImageUrl] = useState(profilePic)

    const db = getDatabase();

    // Fetch the userName from the database
    useEffect(() => {
        const userNameRef = ref(db, "users/" + props.currentUser.userId + "/userName");
        onValue(userNameRef, (snapshot) => {
            const userNameFromDatabase = snapshot.val();
            setUserName(userNameFromDatabase);
        });
    }, [props.currentUser.userId, db]);

    const handleEditProfile = async (event) => {
        event.preventDefault();

        try {
            // Update the user's display name in Firebase Authentication
            await updateProfile(props.currentUser, {
                userName: userName,
            });

            // Update the user's profile data in the real-time database
            const userRef = ref(db, 'users/' + props.currentUser.userId);
            await firebaseSet(userRef, {
                userName: userName,
            });

            // Set edit mode to false
            setEditMode(false);
        } catch (error) {
            console.error('Error updating profile:', error);
            // Handle errors appropriately
        }
    };


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const renderProfileContent = () => {
        if (editMode) {
            return renderEditProfileForm();
        } else {
            return renderUserProfile();
        }
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
                            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
                        </label>
                    </div>
                    <div className='flex-box'>
                        <button type="submit" className='nav__button'>Save Changes</button>
                        <button type="button" className='nav__button' onClick={toggleEditMode}> Cancel </button>
                    </div>
                </form>
            </div>
        </div>
    );

    const renderUserProfile = () => (
        <div className="block-container">
          <div className="account-data">
            <h2> @{userName} </h2>
          </div>
          <img className="profile-picture" src={profilePic} alt="profile picture" />
          <div className="account-data">
            <p> {fullName} </p>
            <p> Joined {formattedJoinedDate}</p>
          </div>
          <div className="flex-box">
            <button className="nav__button" onClick={toggleEditMode}>
              Edit Profile
            </button>
          </div>
          <div className="flex-box">
            {['posts', 'saved', 'tasted'].map(tab => (
              <div
                key={tab}
                className={'account-tabs profile-content ' + (activeTab === tab ? 'active' : '')}
                onClick={() => handleTabClick(tab)}
              >
                <h2> {tab.charAt(0).toUpperCase() + tab.slice(1)} </h2>
              </div>
            ))}
          </div>
          <div>
            {renderContent()}
          </div>
        </div>
    );
      
    const renderContent = () => {
        const tabMapping = {
            'posts': 'users/' + props.currentUser.userId + '/posted drinks',
            'saved': 'users/' + props.currentUser.userId + '/saved drinks',
            'tasted': 'users/' + props.currentUser.userId + '/tasted drinks',
        };
    
        return (
            <div className="allCards" key={activeTab}>
                <CreateCards tableName={tabMapping[activeTab]} />
            </div>
        );
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

