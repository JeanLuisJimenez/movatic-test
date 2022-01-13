import Home from "./screens/Home";
import StationReport from "./screens/StatusReport";

const routes = [
    {
        name: "Home",
        path: "/",
        screen: <Home/>
    },
    {
        name: "Station Report",
        path: ":id",
        screen: <StationReport/>,
        hide: true
    }
];

export default routes;
