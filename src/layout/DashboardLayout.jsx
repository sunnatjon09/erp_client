import {useEffect, useState} from "react";
import {GetMe} from "../config/service/AuthService";
import {Loading} from "../component/Loading";
import {Outlet, useNavigate} from 'react-router-dom'
import {SideBar} from "../component/SideBar.jsx";
import {Header} from "../component/Header.jsx";
import {COLOR_CHANGE_BG_SECONDARY} from "../component/ColorMode.jsx";

export const DashboardLayout = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const getMe = async () => {
        try {
            const getUser = await GetMe(navigate);
            setUser(getUser.data)
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getMe()
    }, [])
    return (
        <div>
            {loading ? (
                <div>
                    <header>
                        <SideBar/>
                        <Header/>
                    </header>
                    <main style={{marginTop: "58px"}}>
                        <div className={`container pt-4 ${COLOR_CHANGE_BG_SECONDARY}`} style={{height:'92vh', overflow:'auto'}}>
                            <Outlet/>
                        </div>
                    </main>
                </div>
            ) : (
                <Loading/>
            )}
        </div>
    )
}