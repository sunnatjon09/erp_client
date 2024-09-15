import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {Dashboard} from "./pages/Dashboard";
import {DashboardLayout} from "./layout/DashboardLayout";
import {Rooms} from "./pages/rooms/Rooms.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {AddRoom} from "./pages/rooms/AddRoom.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/dashboard"} element={<DashboardLayout/>}>
                    <Route index element={<Dashboard/>}/>

                    <Route path={'/dashboard/rooms/:page'} element={<Rooms/>}/>
                    <Route path={'/dashboard/rooms/add'} element={<AddRoom/>}/>

                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App