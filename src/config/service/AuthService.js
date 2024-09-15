import {toast} from "react-toastify";
import {LAN_EN, LAN_UZ} from "../../languages/Languages";
import {BASE_CONFIG_AUTH} from "../BaseConfig";
import {APP_API} from "../AppApi";
import {decodeToken} from "react-jwt";

const lan = localStorage.getItem("lan")

export const GetMe = async (navigate) => {
    const token = localStorage.getItem("token")
    if (token === null || token === undefined || token === "undefined") {
        navigate("/")
    }
    try {
        const username = decodeToken(token).username;
        return await BASE_CONFIG_AUTH.doGet(APP_API.getMe + "/" + username)
    } catch (err) {

    }
}

export const LoginHandler = async (data, navigate) => {
    if (data.login.trim().length === 0) {
        return toast.error(lan === "en" ? LAN_EN.checkUsername : LAN_UZ.checkUsername)
    }
    if (data.password.trim().length === 0) {
        return toast.error(lan === "en" ? LAN_EN.checkPassword : LAN_UZ.checkPassword)
    }
    try {
        const res = await BASE_CONFIG_AUTH.doPost(APP_API.login, data)
        localStorage.setItem("token", res.data.accessToken)
        toast.success(lan === "en" ? LAN_EN.success : LAN_UZ.success)
        navigate("/dashboard")
    } catch (err) {
        toast.error(lan === "en" ? LAN_EN.error : LAN_UZ.error)
        console.log(err)
    }
}