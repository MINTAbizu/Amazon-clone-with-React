import Checkout from "./component/Chekout"; // Corrected spelling
import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} /> {/* Ensure the spelling matches */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;