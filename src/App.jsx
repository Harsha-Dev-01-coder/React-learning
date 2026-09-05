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
  const isActive = true;

  return (
    <>
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
        Hello Tailwind
      </h1>

      <p className="px-6 py-6 pt-6">
        Starting of Tailwind CSS
      </p>

      <div className="
        h-6
        w-40
        rounded
        bg-gray-200
        animate-pulse
      ">
      </div>

      <button className="
        fixed
        bottom-6
        right-6
      ">
        +
      </button>

      <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
        Hello
      </div>

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

      <button className="
        bg-blue-600
        hover:bg-blue-700
        focus:ring-2
        active:scale-95
      ">
        Click
      </button>

      <div className="flex gap-6">
        <button>One</button>
        <button>Two</button>
      </div>

      <button className="
        transition
        duration-200
        hover:bg-blue-700
      ">
        Hello
      </button>

      <div className="
        group
        rounded-xl
        p-6
        shadow
        hover:shadow-xl
        transition
      ">
        <h2 className="
          font-bold
          group-hover:text-blue-600
      ">
        React
        </h2>

      <button className="
        opacity-0
        group-hover:opacity-100
      ">
        Learn More
        </button>
      </div>

      <input
        className="peer border"
        placeholder=" "
      />

      <label className="
        peer-focus:text-blue-600
      ">
        Email
      </label>

      <button
        className={isActive
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-black"
        }
      >
        Home
      </button>

      <div className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      ">

      <img
        src="/image.png"
        className="
          h-64
          w-full
          object-cover
          transition
          duration-300
          group-hover:scale-105
        "
      />

      <div className="p-6">
        <h2 className="
          text-xl
          font-bold
          group-hover:text-blue-600
        ">
          React Course
        </h2>

        <p className="mt-2 text-gray-600">
          Learn React from the ground up.
        </p>

        <button className="
          mt-4
          rounded-lg
          bg-blue-600
          px-4
          py-2
          text-white
          transition
          hover:bg-blue-700
        ">
          Learn More
        </button>
      </div>
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
