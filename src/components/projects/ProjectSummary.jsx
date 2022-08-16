import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const ProjectSummary = (props) => {
  // const [user, setUser] = useState("");

  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  // });
  const { title, content } = props;

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{title}</span>
        <p className="card-description ">{content}</p>

        {/* <p>Posted by The Abeer Ahmed</p>
        <p className="grey-text">4th August, 5:03pm</p> */}
      </div>
    </div>
  );
};

export default ProjectSummary;
