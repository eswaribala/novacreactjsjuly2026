import {lazy, Suspense} from "react";
import MarriageLoanMFE from "./components/MarriageLoanMFE";
const EVDashboard = lazy(() => import("ev-dashboard/EVMFE"));
function App() {
  

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <EVDashboard />
        <MarriageLoanMFE/>
      </Suspense>
    
    </>
  )
}

export default App
