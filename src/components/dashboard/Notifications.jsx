import React, { useState } from "react";
import { collection, onSnapshot, doc } from "firebase/firestore";
import { app } from "../firebase";
import { getFirestore } from "firebase/firestore";
const Notifications = () => {
  const [notifications, setnotifications] = useState("");
  const db = getFirestore(app);

  onSnapshot(collection(db, "notifications"), (snapshot) => {
    snapshot.docs.forEach((doc) => {
      setnotifications({ ...doc.data(), id: doc.id });
    });
  });
  return (
    <div>
      {notifications && (
        <>
          <p>Notifications</p>
          <p>Someone added {notifications.title}</p>
        </>
      )}
    </div>
  );
};

export default Notifications;
