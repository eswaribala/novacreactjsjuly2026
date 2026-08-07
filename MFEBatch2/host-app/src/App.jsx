import { Suspense, lazy } from "react";

const RemoteButton = lazy(() =>
  import("productRemote/MfeButton")
);

function App() {
  const handleRemoteButtonClick = () => {
    alert("Remote button clicked from Host App");
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Host Application</h1>

      <p>
        The button below comes from the remote application.
      </p>

      <Suspense fallback={<p>Loading remote button...</p>}>
        <RemoteButton
          onClick={handleRemoteButtonClick}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Click Remote Button
        </RemoteButton>
      </Suspense>
    </div>
  );
}

export default App;