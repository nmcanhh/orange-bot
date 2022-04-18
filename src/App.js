import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Admin/Login/index.js";
import 'antd/dist/antd.less';
import User from "./pages/Admin/User/index.js";
// import { AdminRoute } from "./routes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Login />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
