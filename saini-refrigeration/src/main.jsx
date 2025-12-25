import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import UserDetails from './pages/UserDetails.jsx'
import CompanyDetails from './pages/CompanyDetails.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Acservices from './pages/Acservices.jsx'
import Frezservices from './pages/Frezservices.jsx'
import Wcservices from './pages/Wcservices.jsx'
import Wmservices from './pages/Wmservices.jsx'
import Roservices from './pages/Roservices.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Detail from './pages/Detail.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import ShippingPolicy from './pages/ShippingPolicy.jsx'
import RefundPolicy from './pages/RefundPolicy.jsx'
import GeyserServices from './pages/GeyserServices.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import OrderConfirmation from './pages/OrderConfirmation.jsx'
import OrderHistory from './pages/OrderHistory.jsx'
import Invoice from './pages/Invoice.jsx'
// import AddProduct from './pages/AddProduct.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import HomeDetail from './pages/HomeDetail.jsx'
import { CartProvider } from './components/CartContext.jsx'
import { AuthProvider } from './components/AuthContext.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/UserDetails" element={<UserDetails />} />
      <Route path="/CompanyDetails" element={<CompanyDetails />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/" element={<App />}  >
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/:id" element={<Detail />} />
        <Route path="/Ac Services" element={<Acservices />} />
        <Route path="/Ac Services/:id" element={<ProductDetail />} />
        <Route path="/Refrigerator Services" element={<Frezservices />} />
        <Route path="/Refrigerator Services/:id" element={<ProductDetail />} />
        <Route path="/Water cooler Services" element={<Wcservices />} />
        <Route path="/Water cooler Services/:id" element={<ProductDetail />} />
        <Route path="/Geyser Services" element={<GeyserServices />} />
        <Route path="/Geyser Services/:id" element={<ProductDetail />} />
        <Route path="/Washing machine Services" element={<Wmservices />} />
        <Route path="/Washing machine Services/:id" element={<ProductDetail />} />
        <Route path="/Ro Services" element={<Roservices />} />
        <Route path="/Ro Services/:id" element={<ProductDetail />} />
        <Route path="/Terms-Conditions" element={<TermsConditions />} />
        <Route path="/Shipping-Policy" element={<ShippingPolicy />} />
        <Route path="/Refund-Policy" element={<RefundPolicy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/invoice/:orderId" element={<Invoice />} />

        <Route path="/:id" element={<HomeDetail />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </AuthProvider>,
)
