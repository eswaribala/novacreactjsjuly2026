//orders,products,customers,discounts,settings,reviews,inventory,dashboard

export const menuData=[{
    id:"dashboard",
    label:"Dashboard",
    icon:"bx bx-home",
},{
    id:"orders",
    label:"Orders",
    icon:"bx bx-cart",
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
    icon:"bx bx-box",
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
    icon:"bx bx-user",
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
    icon:"bx bx-tag",
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
    icon:"bx bx-archive",
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
    icon:"bx bx-star",
},
{
    id:"settings",
    label:"Settings",
    icon:"bx bx-cog",
}

]