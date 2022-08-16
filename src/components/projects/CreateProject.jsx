import { useState, useEffect } from "react";
import { auth, app } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
function CreateProject() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [user, setUser] = useState("");

  const db = getFirestore(app);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "projects"), {
        title: title,
        content: content,
      });
      await addDoc(collection(db, "notifications"), {
        title: title,
      })
        .then(function (res) {
          alert("data is submitted");
        })
        .catch(function (err) {
          alert(err);
        });
    } catch (error) {
      console.log(error);
    }
    // try {
    //   await addDoc(collection(db, "notifications"), {
    //     firstname: user.firstname,
    //     lastname: user.lastname,
    //     title: title,
    //   })
    //     .then(function (res) {
    //       window.location.href = "/";
    //     })
    //     .catch(function (err) {
    //       alert(err);
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label>Title</label>
          <input type="text" onChange={(e) => settitle(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            onChange={(e) => setcontent(e.target.value)}
            className="materialize-textarea"
          />
        </div>
        <div className="input-field">
          <button className="btn red lighten-1 z-depth-0">
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProject;
