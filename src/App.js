import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About/About";
import Checkout from "./pages/Checkout/Checkout/Checkout";
import AddService from "./pages/Home/AddService/AddService";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import ManageServices from "./pages/ManageServices/ManageServices";
import NotFound from "./pages/NotFound/NotFound";
import Orders from "./pages/Orders/Orders";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />

        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />

        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          }
        />

        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageServices />
            </RequireAuth>
          }
        />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
