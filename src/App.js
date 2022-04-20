import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Admin/Login/index.js";
import 'antd/dist/antd.less';
import User from "./pages/Admin/User/index.js";
import "./App.scss";
import Header from "./components/Admin/Header/index.js";
import UpdateUser from "./pages/Admin/User/UpdateUser.js";
import Dashboard from "./pages/Admin/Dashboard/index.js";
import Ads from "./pages/Admin/Ads/index.js";
// import { AdminRoute } from "./routes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Login />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/user/update" element={<UpdateUser />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/ads" element={<Ads />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
