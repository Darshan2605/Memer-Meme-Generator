import React, { useState } from "react";
import Draggable from "react-draggable";
import "../App.css";
import "../index.css";

const Text = () => {
  const [editMode, seteditMode] = useState(false); //this is used to check that we are in edit mode or not
  //whenever state get changed component get re-render
  const [val, setValue] = useState("Click to Edit");
  return (
    <Draggable>
      {editMode ? (
        <input
          className="edit-text"
          onClick={(e) => seteditMode(false)}
          value={val}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      ) : (
        <h1 onDoubleClick={(e) => seteditMode(true)}>{val}</h1>
      )}
    </Draggable>
  );
};

export default Text;
