import {lazy, Suspense} from "react";
const EVDashboard = lazy(() => import("ev-dashboard/EVMFE"));
function App() {
  

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <EVDashboard />
      </Suspense>
    
    </>
  )
}

export default App
