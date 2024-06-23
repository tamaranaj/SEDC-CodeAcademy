import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Container } from "./components/Container/Container";
import { Home } from "./components/Home/Home";
import { ProductContextProvider } from "./context/product.context";
import "./App.css"
import { AddProduct } from "./components/AddProduct/AddProduct";
import { Details } from "./components/Details/Details";
function App() {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Header/>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/addProduct" element={<AddProduct/>} />
            <Route path="/product/:id" element={<Details/>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ProductContextProvider>
  );
}

export default App;
