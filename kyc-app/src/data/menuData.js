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
                path: 'masters/change-password'
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
                path:'transactions/beneficiary-pan'
            },
            {
                id:'policy-service',
                label:'Policy Service',
                children:[{
                    id:'payouts',
                    label:'Payouts',
                    path:'transactions/policy-service/payouts'
                },
                {
                    id:'non-payouts',
                    label:'Non Payouts',
                    children:[{
                        id:'email-update',
                        label:'Email Update',
                        path:'transactions/policy-service/non-payouts/email-update'
                    },
                    {
                        id:'mobile-update',
                        label:'Mobile Update',
                        path:'transactions/policy-service/non-payouts/mobile-update'
                    }
                    ]

                }
            ]
            }
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
                path:'reports/mis-report'

            }
        ]
    },
    {
        id: 'profile',
        label: 'Profile',
        icon: UserPen,
        children: [
        ]
    },
    {
        id: 'closed-pan',
        label: 'Closed PAN',
        icon: MessageCircleX,
        children: [
        ]
    }
]