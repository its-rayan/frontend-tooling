import { createRoot } from "react-dom/client";
import React from "react";

function App() {
  return (
    <div>
      <h1>Hello World From React</h1>
      <button onClick={() => alert("React button clicked!")}>
        Click React Button
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
