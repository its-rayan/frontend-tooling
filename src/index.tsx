import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello World From React Typescript</h1>
      <button onClick={() => alert("React button clicked!")}>
        Click React Button
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
