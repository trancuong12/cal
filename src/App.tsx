import {BrowserRouter,Routes,Route,useParams} from "react-router-dom"
import Login from "./pages/login/Login";
import Event from "./pages/event/Event";
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
