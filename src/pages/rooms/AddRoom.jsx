import {Title} from "../../component/Title.jsx";
import {ADD_ROOM_BREADCRUMP} from "../../config/Utils.js";
import {LAN_EN, LAN_UZ} from "../../languages/Languages.js";
import {Link, useNavigate} from "react-router-dom";
import {COLOR_CHANGE_BG, COLOR_CHANGE_BG_SECONDARY, COLOR_CHANGE_TEXT} from "../../component/ColorMode.jsx";
import {useState} from "react";
import {AddRooms} from "../../config/service/AppService.js";
import {GetMe} from "../../config/service/AuthService.js";

export const AddRoom = () => {
    const navigate = useNavigate()
    const lan = localStorage.getItem("lan")
    const [name, setName] = useState('')
    const [pupilSize, setPupilSize] = useState(0)
    const [color, setColor] = useState('')
    const addRoom = async () => {
        const getUserMe = await GetMe(navigate)
        const data = {name, pupilSize, color, createdBy: getUserMe.data.id}
        await AddRooms(data)
        setName("")
        setPupilSize(0)
        setColor('')
    }
    return (<div>
        <Title arr={ADD_ROOM_BREADCRUMP} status={"back"} link={"/dashboard/rooms"}/>
        <form className={`card p-4 ${COLOR_CHANGE_BG}`}>
            <h3>{lan === 'en' ? LAN_EN.saveRoom : LAN_UZ.saveRoom}</h3>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="name"
                           className={`form-label ${COLOR_CHANGE_TEXT}`}>{lan === 'en' ? LAN_EN.roomName : LAN_UZ.roomName}</label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        id="name"
                        className={`form-control ${COLOR_CHANGE_BG_SECONDARY}`}/>
                </div>
                <div className="col-6">
                    <label htmlFor="size"
                           className={`form-label ${COLOR_CHANGE_TEXT}`}>{lan === 'en' ? LAN_EN.roomPupilSize : LAN_UZ.roomPupilSize}</label>
                    <input type="number"
                           value={pupilSize}
                           onChange={e => setPupilSize(e.target.value)}
                           id="size"
                           className={`form-control ${COLOR_CHANGE_BG_SECONDARY}`}/>
                </div>
            </div>
            <label htmlFor="color"
                   className={`form-label ${COLOR_CHANGE_TEXT} mt-4`}>{lan === 'en' ? LAN_EN.roomPupilSize : LAN_UZ.roomPupilSize}</label>
            <div className="col-1">
                <input type="color"
                       value={color}
                       onChange={e => setColor(e.target.value)}
                       id="color"
                       className={`form-control ${COLOR_CHANGE_BG_SECONDARY}`}/>
            </div>
            <div style={{width: '22%'}} className="mt-4 d-flex align-items-center justify-content-between">
                <button type={"button"} className={"btn btn-primary"}
                        onClick={() => addRoom()}>{lan === 'en' ? LAN_EN.save : LAN_UZ.save}</button>
                <Link to={"/dashboard/rooms"}
                      className={"btn btn-danger"}>{lan === 'en' ? LAN_EN.back : LAN_UZ.back}</Link>
            </div>
        </form>
    </div>);
}