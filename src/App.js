import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const count = 5;
  return (
    <>
      <HelloWorld />
      <Counter count={count} />

      <Form />
    </>
  );
}

export default App;
