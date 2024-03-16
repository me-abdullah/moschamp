import React from "react";

import { useNavigate } from "react-router-dom";
function Pastcomp() {
  const navigate = useNavigate();
  return (
    <div className="qt-box qt-background3 flex items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto text-center text-xl font-medium text-white">
            <h2 className="sm:text-3xl text-2xl font-bold text-center title-font mb-4">
              Past Competitions
            </h2>
            <span className="lead">
            Do you want to see highlights from our past competitions? Search our hashtag MOSWC on Facebook, Twitter and Instagram.
            </span>
          </div>
        </div>
        <div className="text-center">
          <button onClick={() => navigate('/past')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-5">
            View Past Competitions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pastcomp;
