import "./App.css";
import React from "react";
import Todo from "./Components/Todo";
function App() {
  // const [count, setcount] = React.useState(0);
  // const [products, setproducts] = React.useState([]);

  // React.useEffect(() => {
  //   getData();
  //   document.title = `counter:${count}`;
  // }, [count]);
  // const getData = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setproducts(json));
  // };

  return (
    <div className="App">
      {/* <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={() => setcount(count + 1)}>Add</button>
      {products.map((item) => {
        return <div>{item.title}</div>;
      })} */}
      <Todo />
    </div>
  );
}

export default App;
