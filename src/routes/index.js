import Login from "../pages/Admin/Login"
import Profile from "../pages/Admin/Profile"
import UpdateProfile from "../pages/Admin/Profile/UpdateProfile"
import Dashboard from "../pages/Admin/Dashboard"
import Ads from "../pages/Admin/Ads"
import Script from "../pages/Admin/Script"
import Chart from "../pages/Admin/Analytics/index.js"
import Attachment from "../pages/Admin/Analytics/Attachment";
import ChartVisitor from "../pages/Admin/Analytics/ChartVisitor";
import ChartTransaction from "../pages/Admin/Analytics/ChartTransaction"

export const AdminRoute = [
    {
        title: "Đăng nhập | Orange Bot",
        path: "/login",
        element: <Login />,
        exact: true,
        // isLogin: false,
    },
    {
        title: "Profile | Orange Bot",
        path: "/",
        element: <Profile />,
        exact: true,
        // isLogin: false,
    },
    {
        title: "Profile | Orange Bot",
        path: "/profile",
        element: <Profile />,
        exact: true,
        // isLogin: false,
    },
    {
        title: "Update Profile | Orange Bot",
        path: "/profile/update",
        element: <UpdateProfile />,
        exact: true,
        // isLogin: false,
    },
    {
        title: "Dashboard | Orange Bot",
        path: "/dashboard",
        element: <Dashboard />,
        exact: true,
        // isLogin: false,
    },
    {
        title: "Ads | Orange Bot",
        path: "/ads",
        element: <Ads />,
        exact: true,
        // isLogin: false,
    },
    {
        title: "Script | Orange Bot",
        path: "/script",
        element: <Script />,
        exact: true,
        // isLogin: false,
    },
    {
        title: "Chart | Orange Bot",
        path: "/analystics/chart-script",
        element: <Chart />,
        exact: true,
        // isLogin: false,
    },
    {
        title: "Attachment | Orange Bot",
        path: "/analystics/chart-attachment",
        element: <Attachment />,
        exact: true,
        // isLogin: false,
    },
    {
        title: "Chart Visitor | Orange Bot",
        path: "/analystics/chart-visitor",
        element: <ChartVisitor />,
        exact: true,
        // isLogin: false,
    },
    {
        title: "Chart Transaction | Orange Bot",
        path: "/analystics/chart-transaction",
        element: <ChartTransaction />,
        exact: true,
        // isLogin: false,
    },
]

