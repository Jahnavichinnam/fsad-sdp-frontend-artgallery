import React, { useState } from "react";
import CuratorNavBar from "./CuratorNavBar";

function CreateExhibition() {
  const [title, setTitle] = useState("");

  const handleCreate = () => {
    alert("Exhibition Created 🎉");
  };

  return (
    <div>
      <CuratorNavBar />
      <h2>Create Exhibition</h2>

      <input
        placeholder="Exhibition Title"
        onChange={(e) => setTitle(e.target.value)}
      /><br /><br />

      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default CreateExhibition;