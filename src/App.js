import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'antd/dist/antd.less';
import "./App.scss";
import { AdminRoute } from "./routes/index.js";

// import { AdminRoute } from "./routes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          AdminRoute.map((item) => {
            return <Route exact={item.exact} path={item.path} element={item.element} />
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
