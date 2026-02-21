import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import GetStartedPage from "./components/GetStartedPage.jsx"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/getstarted" element={<GetStartedPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
