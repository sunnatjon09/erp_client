import {LAN_EN, LAN_UZ} from "../languages/Languages.js";

export const BASE_URL = "http://localhost:5555/api"

const lan = localStorage.getItem("lan")
export const SIDEBAR_ARR = [
    {name: lan === 'en' ? LAN_EN.dashboard : LAN_UZ.dashboard, link: '/dashboard', icon: 'bi bi-menu-down'},
    {name: lan === 'en' ? LAN_EN.lids : LAN_UZ.lids, link: '/dashboard/lids', icon: 'bi bi-person-check'},
    {
        name: lan === 'en' ? LAN_EN.students : LAN_UZ.students,
        link: '/dashboard/students',
        icon: 'bi bi-person-workspace'
    },
    {name: lan === 'en' ? LAN_EN.groups : LAN_UZ.groups, link: '/dashboard/groups', icon: 'bi bi-people'},
    {name: lan === 'en' ? LAN_EN.courses : LAN_UZ.courses, link: '/dashboard/courses', icon: 'bi bi-bookmark-check'},
    {name: lan === 'en' ? LAN_EN.employee : LAN_UZ.employee, link: '/dashboard/employee', icon: 'bi bi-bookmark-check'},
    {name: lan === 'en' ? LAN_EN.rooms : LAN_UZ.rooms, link: '/dashboard/rooms/0', icon: 'bi bi-hospital'},
]

export const ROOMS_BREADCRUMP = [
    {name: lan === 'en' ? LAN_EN.dashboard : LAN_UZ.dashboard, link: '/dashboard'},
    {name: lan === 'en' ? LAN_EN.rooms : LAN_UZ.rooms, link: '/dashboard/rooms'},
]

export const ADD_ROOM_BREADCRUMP = [
    {name: lan === 'en' ? LAN_EN.dashboard : LAN_UZ.dashboard, link: '/dashboard'},
    {name: lan === 'en' ? LAN_EN.rooms : LAN_UZ.rooms, link: '/dashboard/rooms'},
    {name: lan === 'en' ? LAN_EN.save : LAN_UZ.save, link: '/dashboard/rooms/add'},
]