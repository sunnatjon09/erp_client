import {Title} from "../../component/Title.jsx";
import {ROOMS_BREADCRUMP} from "../../config/Utils.js";
import {useEffect, useState} from "react";
import {DeleteRoom, GetRooms, GetRoomsByPage} from "../../config/service/AppService.js";
import {Loading} from "../../component/Loading.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {COLOR_CHANGE_BG, COLOR_CHANGE_TABLE} from "../../component/ColorMode.jsx";
import {LAN_EN, LAN_UZ} from "../../languages/Languages.js";
import {BASE_CONFIG} from "../../config/BaseConfig.js";
import {APP_API} from "../../config/AppApi.js";
import {Pagination} from "../../component/Pagination.jsx";

export const Rooms = () => {
    const page = useParams().page
    const [rooms, setRooms] = useState([])
    const [allRooms, setAllRooms] = useState([])
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const lan = localStorage.getItem("lan")
    const [totalPages, setTotalPages] = useState(0)
    const [search, setSearch] = useState('')
    const getAll = async () => {
        try {
            const res = await GetRoomsByPage(page)
            setAllRooms(await GetRooms())
            setRooms(res.data._embedded.list)
            console.log(res.data._embedded.list)
            setTotalPages(res.data.page.totalPages)
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    const findNameById = async (id) => {
        try {
            const res = await BASE_CONFIG.doGet(APP_API.getUserById + "/" + id)
            return res.data.name + " " + res.data.surname
        } catch (err) {
        }
    }
    const filter = allRooms.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            {loading ? (
                <div>
                    <Title arr={ROOMS_BREADCRUMP} status={"add"} link={"/dashboard/rooms/add"}/>
                    <div className={`shadow p-3 mb-5 rounded ${COLOR_CHANGE_TABLE}`}>
                        <div className="w-25 mb-2">
                            <input type="search" value={search} onChange={e => setSearch(e.target.value)}
                                   placeholder={lan === 'en' ? LAN_EN.search : LAN_UZ.search}
                                   className={"form-control"}/>
                        </div>
                        {search.trim().length === 0 ? (
                            rooms.length === 0 ? (
                                <div className={`${COLOR_CHANGE_BG} p-3`} style={{backgroundColor: 'transparent'}}>
                                    <h3 className={"text-center text-danger"}>Hozircha hech qanday ma'lumot mavjud
                                        emas!</h3>
                                </div>
                            ) : (
                                <>
                                    <GetRoomTable rooms={rooms} getAll={getAll} lan={lan}/>
                                    <Pagination totalPage={totalPages} api={"/dashboard/rooms"} nowPage={page}/>
                                </>
                            )
                        ) : (
                            filter.length === 0 ? (
                                <h3 className={"mt-3 text-center text-danger"}>
                                    Qidiruv natijasida hech qanday ma'lumot topilmadi...
                                </h3>
                            ) : (
                                <GetRoomTable rooms={filter} getAll={getAll} lan={lan}/>
                            )
                        )}
                    </div>
                </div>
            ) : (
                <Loading/>
            )}
        </div>
    )
}

const GetRoomTable = ({lan, rooms, getAll}) => {
    return (
        <table className={`table ${COLOR_CHANGE_TABLE}`} style={{backgroundColor: 'transparent'}}>
            <thead>
            <tr>
                <th className={"col-2"}>{lan === 'en' ? LAN_EN.tr : LAN_UZ.tr}</th>
                <th className={"col-2"}>{lan === 'en' ? LAN_EN.name : LAN_UZ.name}</th>
                <th className={"col-2"}>{lan === 'en' ? LAN_EN.pupilSz : LAN_UZ.pupilSz}</th>
                <th className={"col-2"}>{lan === 'en' ? LAN_EN.color : LAN_UZ.color}</th>
                <th className={"col-2"}>{lan === 'en' ? LAN_EN.createdBy : LAN_UZ.createdBy}</th>
                <th className={"col-2"}>{lan === 'en' ? LAN_EN.settings : LAN_UZ.settings}</th>
            </tr>
            </thead>
            <tbody>
            {rooms.map((item, i) => (
                <tr>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.pupilSize}</td>
                    <td>
                        <div style={{
                            backgroundColor: item.color,
                            height: '22px',
                            width: '12%',
                            borderRadius: '50%'
                        }}></div>
                    </td>
                    <td>{item.createdBy}</td>
                    <td>
                        <button className={"btn btn-warning m-3 mt-0 mb-0"}><i
                            className="bi bi-pencil-square"/>
                        </button>
                        <button className={"btn btn-danger"}
                                onClick={() => DeleteRoom(item.id, getAll)}><i className="bi bi-trash"/>
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}