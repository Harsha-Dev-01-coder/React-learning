import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import UserProvider from "./context/UserProvider";
import { CartProvider } from "./context/CartContext";

import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
           <App />
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);