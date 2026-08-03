import {Asterisk} from 'lucide-react'
import {ArrowLeftRight,Summary,UserPen,MessageCircleX} from 'lucide-react'
export const menuData = [
    {
        id: 'Masters',
        label: 'Masters',
        icon: Asterisk,
        children: [

        ]
    },
    {
        id: 'Transactions',
        label: 'Transactions',
        icon: ArrowLeftRight,
        children: [
        ]
    },
    {
        id: 'Reports',
        label: 'Reports',
        icon: Summary,
        children: [
        ]
    },
    {
        id: 'Profile',
        label: 'Profile',
        icon: UserPen,
        children: [
        ]
    },
    {
        id: 'ClosedPAN',
        label: 'Closed PAN',
        icon: MessageCircleX,
        children: [
        ]
    }
]