import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import GlobalProvider from "./context/GlobalProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GlobalProvider>
    <Toaster position="top-center" reverseOrder={false} />
    <App />
  </GlobalProvider>
);
