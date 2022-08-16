import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, app } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
function SignUp() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const db = getFirestore(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      await addDoc(collection(db, "users"), {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
        .then(function (res) {
          alert("data is submitted");
        })
        .catch(function (err) {
          alert(err);
        });
      window.location.href = "/signin";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label>First Name</label>
            <input type="text" onChange={(e) => setfirstname(e.target.value)} />
          </div>
          <div className="input-field">
            <label>Last Name</label>
            <input type="text" onChange={(e) => setlastname(e.target.value)} />
          </div>
          <div className="input-field">
            <label>Email</label>
            <input type="email" onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="input-field">
            <button className="btn red lighten-1 z-depth-0">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
