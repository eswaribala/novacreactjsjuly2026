//orders,products,customers,discounts,settings,reviews,inventory,dashboard
import { ScanFace,ShoppingCart,Package,Users,Percent,CirclePile,Star,Settings} from "lucide-react"
export const menuData=[{
    id:"dashboard",
    label:"Dashboard",
    icon:ScanFace,
    path:"/dashboard"
},{
    id:"orders",
    label:"Orders",
    icon:ShoppingCart,
    children:[
    {
        id:"addOrders",
        label:"Add Orders",
        path: "/orders/add"
    
    },
    {
        id:"updateOrders",
        label:"Update Orders",
        path: "/orders/update"
    },
    {
        id:"viewOrders",
        label:"View Orders",
        path: "/orders"
    },
    {
        id:"deleteOrders",
        label:"Delete Orders",
        path: "/orders/delete"
    }
]
},
{
    id:"products",
    label:"Products",
    icon:Package,
    children:[
    {
        id:"addProducts",
        label:"Add Products",
        path: "/products/add"
    },
    {
        id:"updateProducts",
        label:"Update Products",
        path: "/products/update"
    },
    {
        id:"viewProducts",
        label:"View Products",
        path: "/products"
    },
    {
        id:"deleteProducts",
        label:"Delete Products",
        path: "/products/delete"
    }
]
},
{
    id:"customers",
    label:"Customers",
    icon:Users,
    children:[
    {
        id:"addCustomers",
        label:"Add Customers",
        path: "/customers/add"
    },
    {
        id:"updateCustomers",
        label:"Update Customers",
        path: "/customers/update"
    },
    {
        id:"viewCustomers",
        label:"View Customers",
        path: "/customers"
    },
    {
        id:"deleteCustomers",
        label:"Delete Customers",
        path: "/customers/delete"
    }
]
},
{
    id:"discounts",
    label:"Discounts",
    icon:Percent,
    children:[
    {
        id:"addDiscounts",
        label:"Add Discounts",
        path: "/discounts/add"
    },
    {
        id:"updateDiscounts",
        label:"Update Discounts",
        path: "/discounts/update"
    },
    {
        id:"viewDiscounts",
        label:"View Discounts",
        path: "/discounts"
    },
    {
        id:"deleteDiscounts",
        label:"Delete Discounts",
        path: "/discounts/delete"
    }
]
},
{
    id:"inventory",
    label:"Inventory",
    icon:CirclePile,
    children:[
        {
            id:"addInventory",
            label:"Add Inventory",
            path: "/inventory/add"
        },
        {
            id:"updateInventory",
            label:"Update Inventory",
            path: "/inventory/update"
        },
        {
            id:"viewInventory",
            label:"View Inventory",
            path: "/inventory"
        },
        {
            id:"deleteInventory",
            label:"Delete Inventory",
            path: "/inventory/delete"
        }
    ]

},
{
    id:"reviews",
    label:"Reviews",
    icon:Star,
    path:"/reviews"
},
{
    id:"settings",
    label:"Settings",
    icon:Settings,
    path:"/settings"
}

]