import { useState } from "react";

import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Main from "./components/Main";
import Student from "./components/Student";
import Card from "./components/Card";
import Product from "./components/Product";
import Footer from "./components/Footer";
import ClickButtons from "./components/ClickButtons";
import InputExample from "./components/InputExample";
import LoginForm from "./components/LoginForm";
import Premium from "./components/Premium";
import FruitList from "./components/FruitList";
import Counter from "./components/Counter";
import UserInfo from "./components/userInfo";
import UserInput from "./components/UserInput";
import Profile from "./components/Profile"
import SearchBar from "./components/SearchBar";
import DisplayText from "./components/DisplayText";
import Objects from "./components/Objects";
import Variable from "./components/Variable";

function App() {
  const [ cartCount, setCartCount] = useState(0);
  const handleAdd = () => setCartCount(cartCount + 1);
  const [ name, setName] = useState("");
  const [ searchText, setSearchText] = useState("");

  return (
    <>
      <Navbar cartCount={cartCount} />
      <ProductCard addToCart={handleAdd} />

      <Header />

      <Greeting />

      <Main />

      <Student />

      <Card title="HTML" />
      <Card title="CSS" />
      <Card title="JavaScript" />
      <Card title="React" />

      <Product
        name="Keyboard"
        price={1999}
      />

      <Product
        name="Mouse"
        price={999}
      />

      <ClickButtons />

      <InputExample />

      <LoginForm />

      <Variable />

      <Premium />

      <FruitList />

      <Counter />

      <UserInfo name={name} setName={setName} />

      <UserInput name={name} setName={setName} />

      <>
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <DisplayText searchText={searchText} />
      </>

      <>
        <Profile
          name="Elon Musk"
          age={35}
        />
      </>

      <Variable />

      <Objects />

      <Footer />
    </>
  );
}

export default App;