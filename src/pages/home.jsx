import React, { useEffect, useState } from "react";
import MemeCard from "../components/card";
import { MemeApi } from "../API/api";
import "../App.css";
import "../index.css";
const HomePage = () => {
  const [MemeArray, setMemeArray] = useState([]);
  useEffect(() => {
    MemeApi().then((memes) => setMemeArray(memes.data.memes));
  }, []);
  console.log(MemeArray);
  return (
    <div className="homepage row d-flex justify-content-center align-items-center">
      {MemeArray.map((meme) => (
        <div className="meme-card-container col-md-3" key={meme.id}>
          <MemeCard image={meme.url} title={meme.name} />
        </div>
      ))}
    </div>
  );
};
export default HomePage;
