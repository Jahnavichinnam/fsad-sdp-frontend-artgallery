import React, { useState } from "react";
import API from "../services/api";
import VisitorNavBar from "./VisitorNavBar";

function ReviewPage() {

  const [comment, setComment] = useState("");

  const submit = async () => {
    await API.post("/review/add", { comment });
    alert("Added");
  };

  return (
    <div>
      <textarea onChange={e => setComment(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default ReviewPage;