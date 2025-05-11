
import Chekout from "./component/Chekout";
import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Chekout/> */}
        <Routes>
          <Route path="/Chekout" element={<Header/> && <Chekout/>} />

          <Route path="/" element={<Home /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;