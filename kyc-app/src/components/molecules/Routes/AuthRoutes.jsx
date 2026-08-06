import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import AuthPad from "../../organisms/AuthPad/AuthPad";
import HomeScreen from "../../organisms/HomeScreen/HomeScreen";

import BeneficiaryPAN from "../../../pages/BeneficiaryPAN";
import HomePage from "../../../pages/HomePage";
import ChangePassword from "../../../pages/ChangePassword";
import MISReport from "../../../pages/MISReport";
import Profile from "../../../pages/Profile";
import ClosedPAN from "../../../pages/ClosedPAN";
import Payout from "../../../pages/Payout";
import EmailUpdate from "../../../pages/EmailUpdate";
import MobileUpdate from "../../../pages/MobileUpdate";
import AdminHome from "../../../pages/AdminHome";

import AddPolicy from "../../organisms/AddPolicy/AddPolicy";
import EditPolicy from "../../organisms/EditPolicy/EditPolicy";
import DeletePolicy from "../../organisms/DeletePolicy/DeletePolicy";
import ViewPolicy from "../../organisms/ViewPolicy/ViewPolicy";

function AuthRoutes() {
  return (
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
  );
}

export default AuthRoutes;