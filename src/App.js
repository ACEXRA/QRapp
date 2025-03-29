import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
import AuthCtxProvider from "./context/AuthCtxProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthCtxProvider>
        <Navbar />
        <AppRoutes />
      </AuthCtxProvider>
    </BrowserRouter>
  );
}

export default App;
