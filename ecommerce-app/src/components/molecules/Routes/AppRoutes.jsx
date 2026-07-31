import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../../../pages/AuthPage.jsx';
import Home from '../../../pages/HomePage.jsx';
import AdminHome from '../../../pages/AdminHome.jsx';
import {Orders, AddOrders, UpdateOrders, DeleteOrders} from '../../../pages/Orders.jsx';
import {Products, AddProducts, UpdateProducts, DeleteProducts} from '../../../pages/Products.jsx';
import {Customers, AddCustomers, UpdateCustomers, DeleteCustomers} from '../../../pages/Customers.jsx';
import {Inventory, AddInventory, UpdateInventory, DeleteInventory} from '../../../pages/Inventory.jsx';
import Dashboard from '../../../pages/Dashboard.jsx';
import Settings from '../../../pages/Settings.jsx';
import Reviews from '../../../pages/Reviews.jsx';
import {Discount, AddDiscount, UpdateDiscount, DeleteDiscount} from '../../../pages/Discount.jsx';

function AppRoutes(){
    
    return (
        <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login Page */}
        <Route path="/login" element={<AuthPage />} />

        {/* Home Page */}
        <Route path="/home" element={<Home />} />
        {/* Admin Page */}
        <Route path="/admin" element={<AdminHome />} />
         <Route path="/orders" element={<Orders />}/>
          <Route path="/orders/add" element={<AddOrders />} />
          <Route path="/orders/update" element={<UpdateOrders />} />
          <Route path="/orders/delete" element={<DeleteOrders />} />
         
          <Route path="/products" element={<Products />}/>
          <Route path="/products/add" element={<AddProducts />} />
          <Route path="/products/update" element={<UpdateProducts />} />
          <Route path="/products/delete" element={<DeleteProducts />} />
          <Route path="/inventory" element={<Inventory />}/>
          <Route path="/inventory/add" element={<AddInventory />} />
          <Route path="/inventory/update" element={<UpdateInventory />} />
          <Route path="/inventory/delete" element={<DeleteInventory />} />
        
          <Route path="/customers" element={<Customers />}/>
          <Route path="/customers/add" element={<AddCustomers />} />
          <Route path="/customers/update" element={<UpdateCustomers />} />
          <Route path="/customers/delete" element={<DeleteCustomers />} />
          <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/settings" element={<Settings />} />
         <Route path="/reviews" element={<Reviews />} />
        <Route path="/discount" element={<Discount />}/>
        <Route path="/discount/add" element={<AddDiscount />} />
        <Route path="/discount/update" element={<UpdateDiscount />} />
        <Route path="/discount/delete" element={<DeleteDiscount />} />


        {/* 404 Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    )
}
export default AppRoutes