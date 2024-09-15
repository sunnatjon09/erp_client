import logo from '../assets/logo.png'
import {Link} from "react-router-dom";
import {LanguagesDropdown} from "./LanguagesDropdown.jsx";
import {COLOR_CHANGE_BG, ColorMode} from "./ColorMode.jsx";

export const Header = () => {
    return (
        <nav id="main-navbar" className={`navbar navbar-expand-lg navbar-light fixed-top ${COLOR_CHANGE_BG}`}>
            <div className="container-fluid">
                <button data-mdb-button-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-collapse-init
                        data-mdb-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <Link to={"/dashboard"} className="navbar-brand">
                    <img
                        src={logo}
                        height="35"
                        alt="MDB Logo"
                        loading="lazy"
                    />
                </Link>
                <form className="d-none d-md-flex input-group w-auto my-auto">
                    <input
                        autoComplete="off"
                        type="search"
                        className="form-control rounded"
                        placeholder='Search '
                        style={{minWidth: "225px"}}
                    />
                    <span className="input-group-text border-0"><i className="fas fa-search"></i></span>
                </form>

                <ul className="navbar-nav ms-auto d-flex flex-row">
                    <div>
                        <LanguagesDropdown/>
                    </div>
                    <div style={{marginRight: '1.5rem'}}>
                        <ColorMode/>
                    </div>
                    <li className="nav-item dropdown">
                        <a
                            data-mdb-dropdown-init
                            className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                                className="rounded-circle"
                                height="22"
                                alt="Avatar"
                                loading="lazy"
                            />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a className="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Settings</a>
                            </li>
                            <li></li>
                            <a className="dropdown-item" href="#">Logout</a>
                            {/*</li>*/}
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}