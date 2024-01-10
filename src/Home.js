import Verify from "./Verify";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/verification" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
