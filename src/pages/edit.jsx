import React, { useState, createRef } from "react";
import "../index.css";
import "../App.css";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../components/text";
import { exportComponentAsJPEG } from "react-component-export-image";
///useSearchParams is hook used to access querry parameter

const EditPage = () => {
  const [params] = useSearchParams();
  //console.log(params["url"]);  //we get actual url querry parameter value from url

  const [textCount, settextCount] = useState(0);
  const addtext = () => {
    settextCount(textCount + 1);
  };

  const memeref = createRef();
  return (
    //Fragments <> instead of Div
    <>
      <div className="edit-page row d-flex justify-content-center align-items-center">
        <div className="edit-box col-md-3 col-9">
          <div ref={memeref} className="meme  ">
            <img src={params.get("url")} width="250px" alt="meme" />
            {Array(textCount)
              .fill(0)
              .map((e) => (
                <Text></Text> //to make text draggable use react library (npm i react-dragabble)
              ))}
          </div>
          <div className="btns">
            <Button onClick={addtext}>Add Text</Button>
            <Button
              variant="success"
              onClick={(e) => {
                exportComponentAsJPEG(memeref);
              }}
            >
              Save
            </Button>
            <Button onClick={(e) => settextCount(0)}>Refresh</Button>
          </div>
        </div>
      </div>
    </> // To save memes use library npm i react-component-export-image
  );
};

export default EditPage;
