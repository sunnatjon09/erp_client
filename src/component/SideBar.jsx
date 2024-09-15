import './sidebar.css'
import {SIDEBAR_ARR} from "../config/Utils.js";
import {Link, useLocation} from "react-router-dom";
import {COLOR_CHANGE_BG, COLOR_CHANGE_TEXT} from "./ColorMode.jsx";

export const SideBar = () => {
    const location = useLocation().pathname
    return (
        <nav id="sidebarMenu" className={`collapse d-lg-block sidebar collapse ${COLOR_CHANGE_BG}`}>
            <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                    {SIDEBAR_ARR.map(item => (
                        <Link
                            to={item.link}
                            className={`list-group-item list-group-item-action py-2 ripple ${item.link === location ? "active" : COLOR_CHANGE_TEXT + " " + COLOR_CHANGE_BG}`}
                            aria-current="true"
                        >
                            <i className={`${item.icon} fa-fw me-3`}></i><span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}