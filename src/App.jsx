import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Counter from "./components/ReducerCounter";

import ReduxUsers from "./components/ReduxUsers"

import UserProfile from "./components/UserProfile";
import UserDisplay from "./components/UserDisplay";

import CartSummary from "./context/UseCart"

import NavbarRouter from "./pages/Navbar-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

import Dashboard from "./pages/Dashboard";
import Profiles from "./pages/Profiles";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";

import TypedState from "./typescript.js/typedState";
import UseEffect from "./typescript.js/useEffect";

import RegistrationForm from "./components/RegistrationForm";


function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
        Hello Tailwind
      </h1>

      <p className="px-6 py-6 pt-6">
        Starting of Tailwind CSS
      </p>

      <input className="border border-gray-300 rounded-lg"/>

      <div className="w-full max-w-md bg-blue-600 text-white">
        Content
      </div>

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <button
        disabled
        className="bg-blue-600 disabled:opacity-50"
      >
        Submit
      </button>

      <div className="flex gap-6">
        <button>One</button>
        <button>Two</button>
      </div>

      <ReduxUsers />

      <Counter />

      <UserProfile />

      <UserDisplay />

      <CartSummary />

      <NavbarRouter />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            path="profile"
            element={<Profiles />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

          <Route
            path="orders"
            element={<Orders />}
          />
        </Route>
      </Routes>

      <TypedState />

      <UseEffect />

      <RegistrationForm />

      <Footer />
    </>
  );
}

export default App;
