import Home from "./screens/Home";
import StationReport from "./screens/StatusReport";

export default [
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
]
