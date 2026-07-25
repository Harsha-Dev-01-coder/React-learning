import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Main from "./components/Main";
import Student from "./components/Student";
import Card from "./components/Card"
import Product from "./components/Product"
import Footer from "./components/Footer";

function App() {
  const name = "Champ";
  const isLoggedIn = true;
  const marks = 85;
  const isPremium = true;
  const fruits = [
    "Apple",
    "Mango",
    "Orange"
  ];

  return (
    <>
      <h1>
        {isLoggedIn ? "Welcome to" : "Please Login"}
      </h1>
      <>
        {isPremium && <h1>Premium User</h1>}
      </>
      <Header />
      <Greeting />
      <Main />
      <Student
        name="Champ" 
        course="Frontend"
      />
        <>
          <Card title="HTML" />
          <Card title="CSS" />
          <Card title="JavaScript" />
          <Card title="React" />
        </>
        <>
          <Product name="Keyboard" price="1999" />
          <Product name="Mouse" price="999" />
        </>
        <h1>Hello {name.toUpperCase}</h1>
        <h2>
          {marks <= 85 ? "Pass" : "Fail"}
        </h2>
        <>
          {fruits.map((fruit, index) => (
            <h2 key={index}>{fruit}</h2>
          ))}
        </>
      <Footer />
    </>
  );
}

export default App;