import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Admin/Login/index.js";
import 'antd/dist/antd.less';
import Profile from "./pages/Admin/Profile/index.js";
import "./App.scss";
import Header from "./components/Admin/Header/index.js";
import UpdateProfile from "./pages/Admin/Profile/UpdateProfile.js";
import Dashboard from "./pages/Admin/Dashboard/index.js";
import Ads from "./pages/Admin/Ads/index.js";
import Script from "./pages/Admin/Script/index.js";
import Chart from "./pages/Admin/Analytics/index.js";
import Attachment from "./pages/Admin/Analytics/Attachment";
import ChartVisitor from "./pages/Admin/Analytics/ChartVisitor";
// import { AdminRoute } from "./routes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/update" element={<UpdateProfile />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/ads" element={<Ads />} />
        <Route exact path="/script" element={<Script />} />
        <Route exact path="/analytics" element={<Chart />} />
        <Route exact path="/analytics/attachment" element={<Attachment />} />
        <Route exact path="/analytics/chart-visitor" element={<ChartVisitor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
