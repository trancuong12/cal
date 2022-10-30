import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import Login from "./pages/login/Login";
import Event from "./pages/event/Event";
import Booking from "./pages/booking/Booking";
import Availability from "./pages/availability/Availability";
import WorkFlows from "./pages/workflows/WorkFlows";
import Teams from "./pages/teams/Teams";
import Apps from "./pages/apps/Apps";
import Settings from "./pages/settings/Settings";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/availability" element={<Availability />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
        <Route path="/workflows" element={<WorkFlows />}></Route>
        <Route path="/apps" element={<Apps />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
