import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import AuthPad from "../../organisms/AuthPad/AuthPad";
import HomeScreen from "../../organisms/HomeScreen/HomeScreen";

import { lazy, Suspense } from "react";
const BeneficiaryPAN = lazy(() => import("../../../pages/BeneficiaryPAN"));

import HomePage from "../../../pages/HomePage";

const ChangePassword = lazy(() => import("../../../pages/ChangePassword"));
const MISReport = lazy(() => import("../../../pages/MISReport"));
const Profile = lazy(() => import("../../../pages/Profile"));
const ClosedPAN = lazy(() => import("../../../pages/ClosedPAN"));
const Payout = lazy(() => import("../../../pages/Payout"));
const EmailUpdate = lazy(() => import("../../../pages/EmailUpdate"));
const MobileUpdate = lazy(() => import("../../../pages/MobileUpdate"));
import AdminHome from "../../../pages/AdminHome";

const AddPolicy = lazy(() => import("../../organisms/AddPolicy/AddPolicy"));
const EditPolicy = lazy(() => import("../../organisms/EditPolicy/EditPolicy"));
const DeletePolicy = lazy(() => import("../../organisms/DeletePolicy/DeletePolicy"));
const ViewPolicy = lazy(() => import("../../organisms/ViewPolicy/ViewPolicy"));

function AuthRoutes() {
  return (
     <Suspense fallback={<div>Loading...</div>}> 
    <Routes>
    
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<AuthPad />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
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
      >
        <Route index element={<h2>Admin Dashboard</h2>} />
        <Route path="policy/add" element={<AddPolicy />} />
        <Route path="policy/edit" element={<EditPolicy />} />
        <Route path="policy/delete" element={<DeletePolicy />} />
        <Route path="policy/view" element={<ViewPolicy />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <HomeScreen />
          </ProtectedRoute>
        }
      >
        <Route
          path="/masters/change-password"
          element={<ChangePassword />}
        />

        <Route
          path="/transactions/beneficiary-pan"
          element={<BeneficiaryPAN />}
        />

        <Route
          path="/transactions/policy-service/payouts"
          element={<Payout />}
        />

        <Route
          path="/transactions/policy-service/non-payouts/email-update"
          element={<EmailUpdate />}
        />

        <Route
          path="/transactions/policy-service/non-payouts/mobile-update"
          element={<MobileUpdate />}
        />

        <Route path="/reports/mis-report" element={<MISReport />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/closed-pan" element={<ClosedPAN />} />
      </Route>

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
    </Suspense>
  );
}

export default AuthRoutes;