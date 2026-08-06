import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute.jsx';
import AuthPage from '../../../pages/AuthPage.jsx';
import Home from '../../../pages/HomePage.jsx';
import AdminHome from '../../../pages/AdminHome.jsx';
import CrudPage from '../../organisms/CrudPage/CrudPage.jsx';

/* Orders named exports */
const Orders = lazy(() =>
  import('../../../pages/Orders.jsx').then((module) => ({
    default: module.Orders,
  }))
);

const AddOrders = lazy(() =>
  import('../../../pages/Orders.jsx').then((module) => ({
    default: module.AddOrders,
  }))
);

const UpdateOrders = lazy(() =>
  import('../../../pages/Orders.jsx').then((module) => ({
    default: module.UpdateOrders,
  }))
);

const DeleteOrders = lazy(() =>
  import('../../../pages/Orders.jsx').then((module) => ({
    default: module.DeleteOrders,
  }))
);

/* Products named exports */
const Products = lazy(() =>
  import('../../../pages/Products.jsx').then((module) => ({
    default: module.Products,
  }))
);

const AddProducts = lazy(() =>
  import('../../../pages/Products.jsx').then((module) => ({
    default: module.AddProducts,
  }))
);

const UpdateProducts = lazy(() =>
  import('../../../pages/Products.jsx').then((module) => ({
    default: module.UpdateProducts,
  }))
);

const DeleteProducts = lazy(() =>
  import('../../../pages/Products.jsx').then((module) => ({
    default: module.DeleteProducts,
  }))
);

/* Customers named exports */
const Customers = lazy(() =>
  import('../../../pages/Customers.jsx').then((module) => ({
    default: module.Customers,
  }))
);

const AddCustomers = lazy(() =>
  import('../../../pages/Customers.jsx').then((module) => ({
    default: module.AddCustomers,
  }))
);

const UpdateCustomers = lazy(() =>
  import('../../../pages/Customers.jsx').then((module) => ({
    default: module.UpdateCustomers,
  }))
);

const DeleteCustomers = lazy(() =>
  import('../../../pages/Customers.jsx').then((module) => ({
    default: module.DeleteCustomers,
  }))
);

/* Inventory named exports */
const Inventory = lazy(() =>
  import('../../../pages/Inventory.jsx').then((module) => ({
    default: module.Inventory,
  }))
);

const AddInventory = lazy(() =>
  import('../../../pages/Inventory.jsx').then((module) => ({
    default: module.AddInventory,
  }))
);

const UpdateInventory = lazy(() =>
  import('../../../pages/Inventory.jsx').then((module) => ({
    default: module.UpdateInventory,
  }))
);

const DeleteInventory = lazy(() =>
  import('../../../pages/Inventory.jsx').then((module) => ({
    default: module.DeleteInventory,
  }))
);

/* Discount named exports */
const Discount = lazy(() =>
  import('../../../pages/Discount.jsx').then((module) => ({
    default: module.Discount,
  }))
);

const AddDiscount = lazy(() =>
  import('../../../pages/Discount.jsx').then((module) => ({
    default: module.AddDiscount,
  }))
);

const UpdateDiscount = lazy(() =>
  import('../../../pages/Discount.jsx').then((module) => ({
    default: module.UpdateDiscount,
  }))
);

const DeleteDiscount = lazy(() =>
  import('../../../pages/Discount.jsx').then((module) => ({
    default: module.DeleteDiscount,
  }))
);

/* Default exports */
const Dashboard = lazy(() => import('../../../pages/Dashboard.jsx'));
const Settings = lazy(() => import('../../../pages/Settings.jsx'));
const Reviews = lazy(() => import('../../../pages/Reviews.jsx'));

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<AuthPage />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />

        <Route
          element={
            <ProtectedRoute>
              <CrudPage />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/add" element={<AddOrders />} />
          <Route path="/orders/update" element={<UpdateOrders />} />
          <Route path="/orders/delete" element={<DeleteOrders />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProducts />} />
          <Route path="/products/update" element={<UpdateProducts />} />
          <Route path="/products/delete" element={<DeleteProducts />} />

          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomers />} />
          <Route path="/customers/update" element={<UpdateCustomers />} />
          <Route path="/customers/delete" element={<DeleteCustomers />} />

          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/add" element={<AddInventory />} />
          <Route path="/inventory/update" element={<UpdateInventory />} />
          <Route path="/inventory/delete" element={<DeleteInventory />} />

          <Route path="/discount" element={<Discount />} />
          <Route path="/discount/add" element={<AddDiscount />} />
          <Route path="/discount/update" element={<UpdateDiscount />} />
          <Route path="/discount/delete" element={<DeleteDiscount />} />

          <Route path="/settings" element={<Settings />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;