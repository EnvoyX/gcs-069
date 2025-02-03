import './App.css';
import '../Backend/api/server';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import Vans, { loader as vansPageLoader } from './pages/Vans/Vans';
import VansDetail, {
  loader as vansDetailPageLoader,
} from './pages/Vans/VansDetail';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import VansHost, { loader as vanHostLoader } from './pages/Host/VansHost';
import VansHostDetail, {
  loader as vanHostDetailLoader,
} from './pages/Host/VansHostDetail';
import VansHostInfo from './pages/Host/VansHostInfo';
import VansHostPhotos from './pages/Host/VansHostPhotos';
import VansHostPricing from './pages/Host/VansHostPricing';
import NotFound from './components/NotFound';
import Error from './components/Error';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="vans"
          element={<Vans />}
          loader={vansPageLoader}
          errorElement={<Error></Error>}
        ></Route>
        <Route
          path="vans/:id"
          element={<VansDetail />}
          loader={vansDetailPageLoader}
        ></Route>
        <Route
          path="host"
          element={<HostLayout />}
          loader={async () => {
            return null;
          }}
        >
          <Route
            index
            element={<Dashboard />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => {
              return null;
            }}
          />
          <Route path="vans" element={<VansHost />} loader={vanHostLoader} />
          <Route
            path="vans/:id"
            element={<VansHostDetail />}
            loader={vanHostDetailLoader}
          >
            <Route
              index
              element={<VansHostInfo />}
              loader={async () => {
                return null;
              }}
            ></Route>
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
