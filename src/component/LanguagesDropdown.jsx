export const LanguagesDropdown = () => {
    const lan = localStorage.getItem("lan")
    const changeLan = (lan) => {
        localStorage.setItem("lan", lan)
        window.location.reload()
    }
    return (
        <div className="dropdown m-4 mt-0 mb-0">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                <img width={"40px"}
                     src={lan === "en" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1200px-Flag_of_Uzbekistan.svg.png"}
                     alt=""/>
                {" "}
                {lan === "en" ? "English" : "O'zbekcha"}
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button className="dropdown-item" onClick={() => changeLan(lan === "en" ? "uz" : "en")}><img
                        width={"40px"}
                        src={lan === "uz" || lan === null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1200px-Flag_of_Uzbekistan.svg.png"}
                        alt=""/>{" "}{lan === "en" ? "O'zbekcha" : "English"}
                    </button>
                </li>
            </ul>
        </div>
    )
}