import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
function SignedInLinks() {
  // const[user,setUser] = useState("");

  // useEffect(()=>{
  //   onAuthStateChanged(auth,(currentUser)=>{
  //     setUser(currentUser);
  //     });
  // })

  const signout = async () => {
    await signOut(auth);
    window.location.href = "/signin";
  };
  return (
    <div>
      <ul className="right">
        <li>
          <a href="/createproject">New Project</a>
        </li>
        <li>
          <a onClick={signout}>Log Out</a>
        </li>
        <li>
          <a href="/" className="btn btn-floating red lighten-1">
            AA
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SignedInLinks;
