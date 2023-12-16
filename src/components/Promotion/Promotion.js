import React from "react";
import { useNavigate } from "react-router-dom";
function Promotion() {
  const navigate = useNavigate();
  return (
    <div className="qt-box qt-background2 flex items-center" id="promotion">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto text-center text-xl font-medium text-white">
            <h2 className="sm:text-3xl text-2xl font-bold text-center title-font mb-4">
              Looking to promote the competition?
            </h2>
            <span className="lead">
              Certiport wants educators to have the materials they need to
              promote the MOS P.K National Championship in their classroom,
              school, or state. Visit our Media page to request promotional
              items, view videos, and download your own posters, fliers, press
              releases, and other materials to get your students excited about
              the MOS P.K National Championship.
            </span>
          </div>
        </div>
        <div className="text-center">
          <button onClick={() => navigate('/promote')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-5">
            Lets Promote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
