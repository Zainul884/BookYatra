
import React, { useState } from 'react';

const UserProfile = () => {
  // Initial user data - replace this with data fetched from your backend.
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    avatarUrl: 'https://via.placeholder.com/150', // Placeholder avatar URL
    favorites: [], // Placeholder for favorites, replace with actual data
    cart: [], // Placeholder for cart items, replace with actual data
  });

  // Editable fields state
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  // Handlers for editing
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditedUser({ ...user });
    setEditMode(false);
  };

  const handleSaveEdit = () => {
    setUser({ ...editedUser });
    setEditMode(false);
    // Here, you would also send the updated data back to your server.
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="userProfile">
      <div className="avatar">
        <img src={user.avatarUrl} alt="User Avatar" />
      </div>
      <div className="userInfo">
        {editMode ? (
          <>
            <input
              name="firstName"
              value={editedUser.firstName}
              onChange={handleChange}
            />
            <input
              name="lastName"
              value={editedUser.lastName}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              value={editedUser.email}
              onChange={handleChange}
            />
            {/* Input for avatar editing would go here, requiring file handling */}
          </>
        ) : (
          <>
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p>{user.email}</p>
          </>
        )}
        {editMode ? (
          <>
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEdit}>Edit Profile</button>
        )}
      </div>
      <div className="favorites">
        {/* Favorites section for hotels and flights */}
      </div>
      <div className="cart">
        {/* Cart section for adding/removing hotels and flights */}
      </div>
    </div>
  );
};

export default UserProfile;