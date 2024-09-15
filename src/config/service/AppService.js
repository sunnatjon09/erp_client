import {toast} from "react-toastify";
import {LAN_EN, LAN_UZ} from "../../languages/Languages.js";
import {BASE_CONFIG} from "../BaseConfig.js";
import {APP_API} from "../AppApi.js";

const lan = localStorage.getItem("lan")

export const AddRooms = async (data) => {
    if (data.name.trim().length === 0) {
        return toast.error(lan === 'en' ? LAN_EN.roomNameError : LAN_UZ.roomNameError)
    }

    if (data.pupilSize <= 0) {
        return toast.error(lan === 'en' ? LAN_EN.roomPupilSizeError : LAN_UZ.roomPupilSizeError)
    }
    try {
        await BASE_CONFIG.doPost(APP_API.room, data)
        toast.success(lan === 'en' ? LAN_EN.success : LAN_UZ.success)
    } catch (err) {
        console.log(err)
        toast.error(lan === 'en' ? LAN_EN.error : LAN_UZ.error)
    }
}

export const GetRooms = async () => {
    try {
        const res = await BASE_CONFIG.doGet(APP_API.room)
        return res.data._embedded.list
    } catch (err) {
    }
}

export const GetRoomsByPage = async (page) => {
    try {
        return await BASE_CONFIG.doGet(APP_API.room + "?page=" + page + "&size=5")
    } catch (err) {
    }
}

export const DeleteRoom = async (id, getAll) => {
    const confirm = window.confirm(lan === 'en' ? LAN_EN.deleted : LAN_UZ.deleted)
    if (confirm) {
        try {
            await BASE_CONFIG.doDelete(APP_API.room, id)
            toast.success(lan === 'en' ? LAN_EN.success : LAN_UZ.success)
            await getAll()
        } catch (err) {
            toast.error(lan === 'en' ? LAN_EN.error : LAN_UZ.error)
        }
    }
}