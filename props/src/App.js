import "./App.css";
import Product from "./Product";

function App() {
  const productName = "Buzdolabı";
  return (
    <div>
      {<Product productName="Ayakkabı" price={2700} />}
      <hr />
      {<Product productName="Pantolon" price={800} />}
      <hr />
      {<Product productName={productName} price={18000} />}
    </div>
  );
}

export default App;
