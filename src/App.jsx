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

function App() {
  return (
    <>
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

      <Premium />

      <FruitList />

      <Counter />

      <UserInfo />

      <Footer />
    </>
  );
}

export default App;