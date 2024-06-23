import { useContext } from "react";
import "./AddProduct.css";
import {
  Category,  Product,
  ProductCreationProps,
} from "../../interfaces/product";
import { useForm } from "react-hook-form";
import { mapperProduct } from "../../services/mapper-product";
import { ProductContext } from "../../context/product.context";

export const AddProduct = () => {
  const { allProducts, handleSetNewProduct } = useContext(ProductContext);
 
  const formValues = useForm<ProductCreationProps>();
  const { register, getValues, setValue } = formValues;

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = getValues();
    const{title, description, price, image, category} = result
    const productToBeCreated = new ProductCreationProps(title, price,description,category, image)
    const newCreation: Product =  mapperProduct(productToBeCreated, allProducts);
    handleSetNewProduct(newCreation);
    resetForm();
  };
  const resetForm = () => {
    setValue("category", Category.electronics);
    setValue("title", "");
    setValue("description", "");
    setValue("image", "");
    setValue("price", "");
  };
  return (
    <div className="form-container">
      <h2>Add your new product here </h2>
      <form onSubmit={async (event) => await create(event)}>
        <input
          type="text"
          placeholder="Enter product title"
          {...register("title")}
        />
        <input
          type="text"
          placeholder="Enter product description"
          {...register("description")}
        />
        <input
          type="text"
          placeholder="Enter product image"
          {...register("image")}
        />
        <input
          type="text"
          placeholder="Enter product price" 
          {...register("price")}
        />
        <select {...register("category")}>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
};
