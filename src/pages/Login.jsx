import {COLOR_CHANGE_BG, COLOR_CHANGE_BG_SECONDARY, COLOR_CHANGE_TEXT, ColorMode} from "../component/ColorMode";
import {LanguagesDropdown} from "../component/LanguagesDropdown";
import {useNavigate} from 'react-router-dom'
import {LAN_EN, LAN_UZ} from "../languages/Languages";
import {useEffect, useState} from "react";
import {LoginHandler} from "../config/service/AuthService";

export const Login = () => {
    const lan = localStorage.getItem("lan")
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        const data = {login: username, password}
        await LoginHandler(data, navigate)
    }

    const secury = async () => {
        const token = localStorage.getItem("token")
        if (token !== undefined && token !== null && token !== "undefined") {
            navigate("/dashboard")
        }
    }

    useEffect(() => {
        secury()
    }, [])

    return (
        <section className={`${COLOR_CHANGE_BG} w-100 d-flex align-items-center justify-content-around`}
                 style={{height: '100vh'}}>
            <div className={`${COLOR_CHANGE_BG} shadow px-4 py-5 px-md-5 text-center text-lg-start`}
                 style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
                <div className={`container w-100 d-flex align-items-center justify-content-end mb-4`}>
                    <LanguagesDropdown/>
                    <ColorMode/>
                </div>
                <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className={`my-5 display-3 fw-bold ls-tight ${COLOR_CHANGE_TEXT}`}>
                                {lan === "en" ? LAN_EN.erp : LAN_UZ.erp} <br/>
                                <span className="text-primary">{lan === "en" ? LAN_EN.system : LAN_UZ.system}</span>
                            </h1>
                            <p style={{color: "hsl(217, 10%, 50.8%)"}} className={`${COLOR_CHANGE_TEXT}`}>
                                {lan === "en" ? LAN_EN.oka : LAN_UZ.oka}
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 w-50">
                            <div className={`card ${COLOR_CHANGE_BG_SECONDARY}`} style={{width: '630px'}}>
                                <div className="card-body py-5 px-md-5">
                                    <form>
                                        <h3 className={`text-center mb-4 ${COLOR_CHANGE_TEXT}`}>{lan === 'en' ? LAN_EN.login : LAN_UZ.login}</h3>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="text"
                                                   value={username}
                                                   onChange={e => setUsername(e.target.value)}
                                                   id="form3Example3"
                                                   className="form-control bg-light"/>
                                            <label className="form-label text-dark"
                                                   for="form3Example3">{lan === "en" ? LAN_EN.username : LAN_UZ.username}</label>
                                        </div>

                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="password"
                                                   value={password}
                                                   onChange={e => setPassword(e.target.value)}
                                                   id="form3Example4"
                                                   className="form-control bg-light"/>
                                            <label className="form-label text-dark"
                                                   for="form3Example4">{lan === "en" ? LAN_EN.password : LAN_UZ.password}</label>
                                        </div>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init
                                                className="btn btn-primary btn-block mb-4" onClick={() => login()}>
                                            {lan === "en" ? LAN_EN.login : LAN_UZ.login}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}