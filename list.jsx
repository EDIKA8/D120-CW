import React, { useState } from "react";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [friendName, setFriendName] = useState("");

  const handleAddFriend = () => {
    if (friendName.trim()) {
      setFriends([...friends, friendName]);
      setFriendName("");
    }
  };

  return (
    <div>
      <h2>Add a Friend</h2>
      <input
        type="text"
        value={friendName}
        placeholder="Friend's Name"
        onChange={(e) => setFriendName(e.target.value)}
      />
      <button onClick={handleAddFriend}>Add Friend</button>

      <div>
        <h2>Friends List</h2>
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendsList;
