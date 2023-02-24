import Header from "./components/Header.jsx"
import Registration from "./components/Registration"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Rating from "./components/Rating.jsx";

function App() {
  return (

    <div>
        < Header/>
        <Router>
            <Routes>
                <Route path="/" element={<Rating />}/>
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
