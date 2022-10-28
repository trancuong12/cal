import {BrowserRouter,Routes,Route,useParams} from "react-router-dom"
import Login from "./components/login";
import Event from "./components/event";
import Calender from "./components/calender";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/event" element={<Event/>}></Route>
        <Route path="/calender" element={<Calender/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
