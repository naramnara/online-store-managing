import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
const App = () => {
  return (
    <Provider store={store}>
    <div style={{padding:'20px'}}>
      <h1>product management</h1>
      <ProductForm />
      <ProductList />
    </div>
    </Provider>
  );
};

export default App;
