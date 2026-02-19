import './styles/App.css';  
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Homepage from "./components/Homepage.jsx"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
