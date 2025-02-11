import { v4 as uuid } from "uuid"

export const USER_MENU_NAV = [
    {
        id: uuid(),
        name: 'Xe đạp',
        icon: '',
        link: '',
        active: false,
        subMenu: [
            { id: uuid(), name: 'Xe đạp leo núi', link: '', subMenu: [] },
            { id: uuid(), name: 'Xe đạp đường trường', link: '', subMenu: [] },
            { id: uuid(), name: 'Xe đạp điện', link: '', subMenu: [] },
            { id: uuid(), name: 'Xe đạp thành phố', link: '', subMenu: [] },
            { id: uuid(), name: 'Xe đạp trẻ em', link: '', subMenu: [] },
        ]
    },
    {
        id: uuid(),
        name: 'Phụ tùng xe đạp',
        icon: '',
        link: '',
        active: false,
        subMenu: [
            {
                id: uuid(),
                name: 'Khung sườn xe đạp',
                link: '',
                subMenu: [
                    { id: uuid(), name: 'Khung sườn xe đạp Gravel', link: '', subMenu: [] },
                    { id: uuid(), name: 'Khung sườn xe đạp Touring', link: '', subMenu: [] },
                    { id: uuid(), name: 'Khung sườn xe đạp 20 inch', link: '', subMenu: [] },
                    { id: uuid(), name: 'Khung sườn xe đạp MTB', link: '', subMenu: [] }
                ]
            },
            {
                id: uuid(),
                name: 'Vỏ xe đạp',
                link: '',
                subMenu: [
                    { id: uuid(), name: 'Vỏ, lốp xe đạp Gravel', link: '', subMenu: [] },
                    { id: uuid(), name: 'Vỏ, lốp xe đạp MTB', link: '', subMenu: [] },
                    { id: uuid(), name: 'Vỏ, lốp xe đạp Touring', link: '', subMenu: [] }
                ]
            },
            {
                id: uuid(),
                name: 'Pedal xe đạp',
                link: '',
                subMenu: [
                    { id: uuid(), name: 'Pedal cao xe đạp MTB', link: '', subMenu: [] },
                    { id: uuid(), name: 'Pedal cao xe đạp Gravel', link: '', subMenu: [] },
                    { id: uuid(), name: 'Pedal cao xe đạp Touring', link: '', subMenu: [] }
                ]
            },
            {
                id: uuid(),
                name: 'Đùm, Niềng, Căm',
                link: '',
                subMenu: [
                    { id: uuid(), name: 'Đùm xe đạp', link: '', subMenu: [] },
                    { id: uuid(), name: 'Niềng xe đạp', link: '', subMenu: [] },
                    { id: uuid(), name: 'Căm xe đạp', link: '', subMenu: [] }
                ]
            }
        ]
    },
    {
        id: uuid(),
        name: 'Flash Sale',
        icon: '',
        link: '/flash_sale',
        active: false,
        subMenu: []
    },
    {
        id: uuid(),
        name: 'Thuê xe đạp',
        icon: '',
        link: '',
        active: false,
        subMenu: []
    },
    {
        id: uuid(),
        name: 'Hướng dẫn thiết lập',
        icon: '',
        link: '',
        active: false,
        subMenu: []
    },
    {
        id: uuid(),
        name: 'Tin tức',
        icon: '',
        link: '/post',
        active: false,
        subMenu: []
    },
]