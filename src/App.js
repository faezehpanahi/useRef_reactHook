import React from "react";
import "./App.css";
import ImageToggle from "./components/ImageToggle";
// import contextAPI from "./components/contextAPI";
import img1 from "./image/image1.jpg";
import img11 from "./image/image11.jpg";
import img2 from "./image/image2.jpg";
import img22 from "./image/image22.jpg";

function App() {
  return (
    <div className="App">
      {/* <contextAPI.Provider
        value={{
          primery: primery,
          secondery: secondery,
        }}
      > */}
      <ImageToggle primery={img1} secondery={img11} />
      <ImageToggle primery={img2} secondery={img22} />
      {/* </contextAPI.Provider> */}
    </div>
  );
}

export default App;
