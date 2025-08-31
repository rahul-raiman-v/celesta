import "./App.css";
import { AppRouter } from "./router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <AppRouter />
      <Toaster />
    </div>
  );
}

export default App;
