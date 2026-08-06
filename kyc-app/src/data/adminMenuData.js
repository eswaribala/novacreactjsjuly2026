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
                path: 'policy/add'
            },
            {
                id: 'editPolicy',
                label: 'Edit Policy',
                path: 'policy/edit'
            },
            {
                id: 'deletePolicy',
                label: 'Delete Policy',
                path: 'policy/delete'
            },
            {
                id: 'viewPolicy',
                label: 'View Policy',
                path: 'policy/view'
            }

        ]
    },
    
]