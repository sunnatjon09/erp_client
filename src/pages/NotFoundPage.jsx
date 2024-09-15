import {Link} from "react-router-dom";
import {LAN_EN, LAN_UZ} from "../languages/Languages.js";

export const NotFoundPage = () => {
    const lan = localStorage.getItem("lan")
    return (
        <div className={"w-100 d-flex align-items-center justify-content-center flex-column"}>
            <img style={{width: '76%'}} src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
                 alt="..."/>
            <Link to={"/dashboard"}
                  className={"btn btn-danger"}>{lan === 'en' ? LAN_EN.dashboard : LAN_UZ.dashboard}</Link>
        </div>
    )
}