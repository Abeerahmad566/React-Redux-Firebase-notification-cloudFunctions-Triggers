import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  const [user, setUser] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <a href="/" className="brand-logo" style={{ left: "10rem" }}>
          Multiverse of Firestore
        </a>
        {user && <SignedInLinks />}

        {!user && <SignedOutLinks />}
      </div>
    </nav>
  );
};

export default Navbar;
