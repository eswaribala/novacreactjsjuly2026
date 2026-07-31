//orders,products,customers,discounts,settings,reviews,inventory,dashboard
import { ScanFace,ShoppingCart,Package,Users,Percent,CirclePile,Star,Settings} from "lucide-react"
export const menuData=[{
    id:"dashboard",
    label:"Dashboard",
    icon:ScanFace,
},{
    id:"orders",
    label:"Orders",
    icon:ShoppingCart,
    children:[
    {
        id:"addOrders",
        label:"Add Orders",
    
    },
    {
        id:"updateOrders",
        label:"Update Orders",
    },
    {
        id:"viewOrders",
        label:"View Orders",
    },
    {
        id:"deleteOrders",
        label:"Delete Orders",
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
    },
    {
        id:"updateProducts",
        label:"Update Products",
    },
    {
        id:"viewProducts",
        label:"View Products",
    },
    {
        id:"deleteProducts",
        label:"Delete Products",
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
    },
    {
        id:"updateCustomers",
        label:"Update Customers",
    },
    {
        id:"viewCustomers",
        label:"View Customers",
    },
    {
        id:"deleteCustomers",
        label:"Delete Customers",
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
    },
    {
        id:"updateDiscounts",
        label:"Update Discounts",
    },
    {
        id:"viewDiscounts",
        label:"View Discounts",
    },
    {
        id:"deleteDiscounts",
        label:"Delete Discounts",
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
        },
        {
            id:"updateInventory",
            label:"Update Inventory",
        },
        {
            id:"viewInventory",
            label:"View Inventory",
        },
        {
            id:"deleteInventory",
            label:"Delete Inventory",
        }
    ]

},
{
    id:"reviews",
    label:"Reviews",
    icon:Star,
},
{
    id:"settings",
    label:"Settings",
    icon:Settings,
}

]