import {Link, useLocation} from "react-router-dom";
import {LAN_EN, LAN_UZ} from "../languages/Languages.js";
import {COLOR_CHANGE_BG, COLOR_CHANGE_TEXT} from "./ColorMode.jsx";

export const Title = ({arr, status, link}) => {
    const location = useLocation().pathname
    const lan = localStorage.getItem("lan")
    return (
        <nav data-mdb-navbar-init
             className={`navbar navbar-expand-lg ${COLOR_CHANGE_BG} shadow-sm p-3 mb-5 rounded`}>
            <div className="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {arr.map(item => (
                            item.link === location ? (
                                <li className={`breadcrumb-item active ${COLOR_CHANGE_TEXT}`}
                                    aria-current="page">{item.name}</li>
                            ) : (
                                <li className={`breadcrumb-item`}><Link
                                    to={item.link} className={COLOR_CHANGE_TEXT}>{item.name}</Link></li>
                            )
                        ))}

                    </ol>
                </nav>
                {status === "add" ? (
                    <Link className={"btn btn-primary"} to={link}>{lan === 'en' ? LAN_EN.save : LAN_UZ.save}</Link>
                ) : status === 'back' ? (
                    <Link className={"btn btn-danger"} to={link}>{lan === 'en' ? LAN_EN.back : LAN_UZ.back}</Link>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    )
}