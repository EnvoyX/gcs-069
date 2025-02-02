import "./App.css";
import "../Backend/api/server";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Vans, { loader as vansPageLoader } from "./pages/Vans/Vans";
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
import Error from "./Components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Nested Paths */}
      <Route path="/" element={<Layout />}>
        {/*Index routes render into their parent's <Outlet/> at their parent's URL*/}
        <Route index element={<Home />}></Route>
        {/* Relative Paths */}
        <Route path="about" element={<About />}></Route>
        <Route
          path="vans"
          element={<Vans />}
          loader={vansPageLoader}
          errorElement={<Error></Error>}
        ></Route>
        {/* Route with params */}
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
