import {Asterisk} from 'lucide-react'
import {ArrowLeftRight,Summary,UserPen,MessageCircleX} from 'lucide-react'
export const menuData = [
    {
        id: 'masters',
        label: 'Masters',
        icon: Asterisk,
        children: [
            {
                id: 'change-password',
                label: 'Change Password',
                path: '/masters/change-password'
            }

        ]
    },
    {
        id: 'transactions',
        label: 'Transactions',
        icon: ArrowLeftRight,
        children: [
            {
                id:'beneficiary-pan',
                label:'Beneficiary PAN',
                path:'/transactions/beneficiary-pan'
            },
            
           
        ]
    },
    {
        id: 'reports',
        label: 'Reports',
        icon: Summary,
        children: [
            {
                id:'mis-report',
                label:'MIS Report',
                path:'/reports/mis-report'

            }
        ]
    },
    {
        id: 'profile',
        label: 'Profile',
        icon: UserPen,
        path: '/profile'
    },
    {
        id: 'closed-pan',
        label: 'Closed PAN',
        icon: MessageCircleX,
        path: '/closed-pan'
    }
]