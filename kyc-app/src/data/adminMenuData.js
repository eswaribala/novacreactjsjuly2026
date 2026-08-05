import {Asterisk} from 'lucide-react'
export const adminMenuData = [
    {
        id: 'policy',
        label: 'Policy',
        icon: Asterisk,
        children: [
            {
                id: 'addPolicy',
                label: 'Add Policy',
                path: '/policy/add-policy'
            },
            {
                id: 'editPolicy',
                label: 'Edit Policy',
                path: '/policy/edit-policy'
            },
            {
                id: 'deletePolicy',
                label: 'Delete Policy',
                path: '/policy/delete-policy'
            },
            {
                id: 'viewPolicy',
                label: 'View Policy',
                path: '/policy/view-policy'
            }

        ]
    },
    
]