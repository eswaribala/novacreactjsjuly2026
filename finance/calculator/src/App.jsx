import {lazy, Suspense} from "react";
const MarriageLoanMFE = lazy(() => import("./components/MarriageLoanMFE"));
const EVDashboard = lazy(() => import("ev-dashboard/EVMFE"));
import { Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<EVDashboard />} />
          <Route path="/marriage-loan" element={<MarriageLoanMFE />} />
        </Routes>
      </Suspense>
    
    </>
  )
}

export default App
