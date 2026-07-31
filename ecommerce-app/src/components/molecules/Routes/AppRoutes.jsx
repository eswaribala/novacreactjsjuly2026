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
         <Route path="/orders" element={<Orders />}>
            <Route path="add" element={<AddOrders />} />
            <Route path="update/:id" element={<UpdateOrders />} />
            <Route path="delete/:id" element={<DeleteOrders />} />
         </Route>
          <Route path="/products" element={<Products />}>
            <Route path="add" element={<AddProducts />} />
            <Route path="update/:id" element={<UpdateProducts />} />
            <Route path="delete/:id" element={<DeleteProducts />} />
           </Route>
          <Route path="/inventory" element={<Inventory />}>
            <Route path="add" element={<AddInventory />} />
            <Route path="update/:id" element={<UpdateInventory />} />
            <Route path="delete/:id" element={<DeleteInventory />} />
          </Route>
          <Route path="/customers" element={<Customers />}>
            <Route path="add" element={<AddCustomers />} />
            <Route path="update/:id" element={<UpdateCustomers />} />
            <Route path="delete/:id" element={<DeleteCustomers />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/settings" element={<Settings />} />
         <Route path="/reviews" element={<Reviews />} />
        <Route path="/discount" element={<Discount />}>
            <Route path="add" element={<AddDiscount />} />
            <Route path="update/:id" element={<UpdateDiscount />} />
            <Route path="delete/:id" element={<DeleteDiscount />} />
        </Route>


        {/* 404 Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    )
}
export default AppRoutes