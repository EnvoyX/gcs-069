import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Vans from "./pages/Vans/Vans";
import VansDetail from "./pages/Vans/VansDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import VansHost from "./pages/Host/VansHost";
import VansHostDetail from "./pages/Host/VansHostDetail";
import VansHostInfo from "./pages/Host/VansHostInfo";
import VansHostPhotos from "./pages/Host/VansHostPhotos";
import VansHostPricing from "./pages/Host/VansHostPricing";
import NotFound from "./components/NotFound";
import Error from "./components/Error";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route
          path="vans"
          element={<Vans />}
          errorElement={<Error></Error>}
        ></Route>
        <Route path="vans/:id" element={<VansDetail />}></Route>
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<VansHost />} />
          <Route path="vans/:id" element={<VansHostDetail />}>
            <Route index element={<VansHostInfo />}></Route>
            <Route path="pricing" element={<VansHostPricing />}></Route>
            <Route path="photos" element={<VansHostPhotos />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
