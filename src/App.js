import "./App.css";
import { Routes, Route } from "react-router-dom";
//import components (req)
import SideDrawer from "./components/SideDrawer";
import Home from "./pages/Home";
import Msg from "./pages/Msg";
import Tasks from "./pages/Tasks";
import Members from "./pages/Members";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import DesignSystem from "./pages/DesignSystem";
import Wireframes from "./pages/Wireframes";
import MobileApp from "./pages/MobileApp";
import WebsiteRedesign from "./pages/WebsiteRedesign";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SideDrawer />}>
          {/* Nested routes */}
          <Route index element={<MobileApp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/msg" element={<Msg />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/members" element={<Members />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/mobileapp" element={<MobileApp />} />
          <Route path="/websiteredesign" element={<WebsiteRedesign />} />
          <Route path="/designsys" element={<DesignSystem />} />
          <Route path="/wireframes" element={<Wireframes />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
