import React, { useState, useEffect } from "react";
import ProjectSummary from "./ProjectSummary";
import { collection, onSnapshot, doc } from "firebase/firestore";
import { app } from "../firebase";
import { getFirestore } from "firebase/firestore";
const ProjectList = () => {
  const [projects, setprojects] = useState([]);

  const db = getFirestore(app);
  useEffect(() => {
    onSnapshot(collection(db, "projects"), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        setprojects((projects) => [...projects, { ...doc.data(), id: doc.id }]);
      });
      console.log(projects);
    });
  }, []);
  console.log(projects);
  return (
    <div className="project-list section">
      {projects.length > 0 &&
        projects.map(({ title, content }) => (
          <ProjectSummary title={title} content={content} />
        ))}
    </div>
  );
};

export default ProjectList;
